<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      The page you requested was not found
    </h1>
    <h1 v-else>An error occurred</h1>
    <p>{{ error }}</p>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
</style>