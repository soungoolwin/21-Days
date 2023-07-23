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
          id="profileImg"
          name="start-date"
          required
        />
      </div>

      <button class="profileEditButton" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    let userName = ref("");
    let bio = ref("");
    let profileImg = ref();
    let getUser = async () => {
      try {
        let response = await axios.get("/api/v1/user/showCurrentUser");
        userName.value = response.data.data.username;
        bio.value = response.data.data.bio;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      await getUser();
    });

    return { userName, bio, profileImg };
  },
};
</script>

<style></style>
