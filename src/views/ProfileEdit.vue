<template>
  <div class="profileEditCard">
    <h2 class="formheader">Update Profile</h2>
    <form @submit.prevent="updateProfile()">
      <div class="mb-4">
        <label class="formlabel" for="username">Username</label>
        <input
          class="forminput"
          type="text"
          id="username"
          name="username"
          v-model="userName"
          required
        />
      </div>
      <div class="mb-4">
        <label class="formlabel" for="bio">Bio</label>
        <input
          class="forminput"
          type="text"
          id="bio"
          name="bio"
          v-model="bio"
        />
      </div>
      <div class="mb-4">
        <label class="formlabel" for="profileImg">Profile Image</label>
        <input
          class="forminput"
          type="file"
          id="image"
          name="start-date"
          v-on:change="getProfileImgLink"
        />
      </div>

      <button class="profileEditButton" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = new useRouter();
    let userName = ref("");
    let bio = ref("");
    let image = ref(null);
    let imageUrl = ref("");
    let getUser = async () => {
      try {
        let response = await axios.get("/api/v1/user/showCurrentUser");
        userName.value = response.data.data.username;
        bio.value = response.data.data.bio;
        imageUrl.value = response.data.data.image;
      } catch (error) {
        console.log(error);
      }
    };
    let getProfileImgLink = async (event) => {
      const file = event.target.files[0];
      image.value = file;

      try {
        let response = await axios.post(
          "/api/v1/user/uploadMyImage",
          {
            image: image.value,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data", // Correctly set the Content-Type header
            },
          }
        );

        // Handle the response from the server
        imageUrl.value = response.data.data;
      } catch (error) {
        console.log(error);
      }
    };

    let updateProfile = async () => {
      try {
        let response = await axios.patch("/api/v1/user/updateCurrentUser", {
          username: userName.value,
          bio: bio.value,
          image: imageUrl.value,
        });
        if (response.status == 200) {
          router.push("/profile");
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await getUser();
    });

    return { userName, bio, image, getProfileImgLink, updateProfile };
  },
};
</script>

<style></style>
