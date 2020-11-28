<template>
  <div>
    <div class="items-center my-4 d-flex justify-content-between">
      <h2>Making API request - AsyncData Hook</h2>
      <div>
        <b-button variant="outline-primary" to="/posts">All Posts</b-button>
      </div>
    </div>
    <h1>
      {{ post.title }}
    </h1>
    <em>
      <span v-for="(locations, idx) in post.countries" :key="idx"
        >{{ locations }},
      </span>
      - {{ post.continent }}</em
    >
    |
    <em>{{ post.updatedAt }}</em>
    <p>
      {{ post.description }}
    </p>
    <div>
      <img :src="post.image" :alt="post.title" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
    return { post };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description,
        },
      ],
    };
  },
};
</script>

<style>
</style>