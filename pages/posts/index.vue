<template>
  <div>
    <div class="my-4 d-flex justify-content-between">
      <h2>Making API request - Fetch Hook</h2>
      <b-button variant="outline-primary" @click="$fetch">Refresh</b-button>
    </div>

    <div v-if="$fetchState.pending">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; display: block"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#1d0e0b"
          stroke-width="10"
          r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
    <div v-if="$fetchState.error">{{ $fetchState.error.message }}</div>

    <b-row v-if="!$fetchState.pending && !$fetchState.error">
      <b-col
        cols="4"
        class="d-flex align-items-stretch"
        v-for="post in posts"
        :key="post.id"
      >
        <b-card
          :title="post.title"
          :img-src="post.image"
          :img-alt="`${post.title} Image`"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            {{ post.description }}
          </b-card-text>

          <b-button
            :to="{ name: 'posts-id', params: { id: post.id } }"
            variant="primary"
            >Go to Post</b-button
          >
          <template #footer>
            <em>
              <span v-for="(locations, idx) in post.countries" :key="idx"
                >{{ locations }},
              </span>
              - {{ post.continent }}</em
            >
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-button variant="primary" v-scroll-to="'body'">Back to top</b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    const data = await this.$axios.$get("https://api.nuxtjs.dev/posts");
    this.$store.dispatch("setPosts", data);
  },
  mounted() {
    this.$fetch();
  },
  computed: {
    ...mapGetters(["posts"]),
    // posts() {
    //   return this.$store.getters.posts;
    // },
  },
};
</script>

<style>
</style>