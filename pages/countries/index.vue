<template>
  <div class="country-items">
    <nuxt-link
      v-for="(country, idx) in countries"
      :key="idx"
      class="flex flex-col items-center justify-center py-2 my-6 md:flex-row md:justify-between md:text-center country-item"
      :to="{
        name: 'countries-code',
        params: { code: country.alpha2Code },
      }"
    >
      <div class="w-8 h-8 mb-4 overflow-hidden rounded-full md:mb-0">
        <img
          class="object-cover w-full h-full"
          :src="country.flag"
          :alt="country.name"
        />
      </div>
      <h1 class="font-semibold">
        {{ country.name }} - {{ country.nativeName }}
      </h1>
      <p class="hidden md:block">
        {{ country.alpha2Code }} - {{ country.region }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    const data = await this.$axios.$get(
      "https://restcountries.eu/rest/v2/all?fields=name;nativeName;alpha2Code;region;flag"
    );
    this.$store.dispatch("setCountries", data);
  },
  mounted() {
    this.$fetch();
  },
  computed: {
    ...mapGetters(["countries"]),
  },
};
</script>

<style scoped>
.country-item:nth-child(old) {
  background: #333;
}
</style>