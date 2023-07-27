<template>
  <div class="errorContainer">
    <div class="errorCard" v-if="beforeVerify">
      <h1>Verifying your email. Please Wait.....</h1>
    </div>
    <div class="errorCard" v-if="!beforeVerify">
      <h1>Your Email is verified. Go back to your browser.</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VerifyEmail",
  data() {
    return {
      beforeVerify: true,
    };
  },
  async created() {
    try {
      const token = this.$route.query.token;
      const email = this.$route.query.email;
      // Send the verification token to your Node.js backend for verification
      await this.verifyEmail(token, email);
      // Redirect the user to a success page or any other appropriate action
    } catch (error) {
      // Handle verification failure, e.g., display an error message
    }
  },
  methods: {
    async verifyEmail(token, email) {
      try {
        let response = await axios.post("/api/v1/auth/verify-email", {
          email: email,
          verificationToken: token,
        });
        if (response.status == 200) {
          this.beforeVerify = false;
        }
      } catch (error) {
        const errorMessage = error.response.data.message;
        const errorStatus = error.response.status;
        this.$router.push({
          name: "ErrorTemplate",
          params: { errorMessage, errorStatus },
        });
      }
    },
  },
};
</script>
<style>
.errorContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the height of the container to the full viewport height */
}

.errorCard {
  background-color: white;
  width: 60%;
  padding: 40px;
  border-radius: 20px;
}

.errorCard h1 {
  margin: 15px;
  font-weight: bolder;
}
.statusCode {
  color: red;
  font-size: 40px;
}
</style>
