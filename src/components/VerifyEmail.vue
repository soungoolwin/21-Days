<template>
  <div>
    <h1>Verify Email</h1>
    <p>Verifying your email, please wait...</p>
  </div>
</template>

<script>
export default {
  name: "VerifyEmail",
  async created() {
    try {
      const token = this.$route.query.token;
      // Send the verification token to your Node.js backend for verification
      await this.verifyEmail(token);
      // Redirect the user to a success page or any other appropriate action
    } catch (error) {
      // Handle verification failure, e.g., display an error message
    }
  },
  methods: {
    async verifyEmail(token) {
      console.log(token);
      //   await axios.post("/api/verify-email", { token });
    },
  },
};
</script>
