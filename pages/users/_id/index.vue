<template>
  <div>
    <h1>User: {{ $route.params.id }} Page</h1>
    <router-link to="/users">Back</router-link>
  </div>
</template>

<script>
export default {
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
};
</script>