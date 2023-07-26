<template>
  <div>
    <h1>Verify Email</h1>
    <p>Verifying your email, please wait...</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VerifyEmail",
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
          this.$router.push("/");
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
