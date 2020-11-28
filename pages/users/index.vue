<template>
  <div>
    <h1>Users Page</h1>
    <b-form-input placeholder="User Id" type="text" v-model="id" />
    <b-button variant="outline-primary" @click="loadUser"
      >Go to User Profile</b-button
    >
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      id: null,
    };
  },
  methods: {
    loadUser() {
      this.$router.push(`/users/${this.id}`);
    },
  },
};
</script>