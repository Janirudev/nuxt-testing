<template>
  <div>
    <div class="items-center my-4 d-flex justify-content-between">
      <h2>Making API request - AsyncData Hook</h2>
      <div>
        <b-button variant="outline-primary" to="/countries"
          >All countries</b-button
        >
      </div>
    </div>
    <div v-for="(country, idx) in countryData" :key="idx">
      <img
        class="mx-auto max-w-32 max-h-10"
        :src="country.flag"
        :alt="country.name"
      />
      <h1>
        {{ country.name }}
      </h1>
      {{ country.topLevelDomain }}
      {{ country.alpha2Code }}
      {{ country.alpha3Code }}
      {{ country.callingCodes }}
      {{ country.capital }}
      {{ country.altSpellings }}
      {{ country.region }}
      {{ country.subregion }}
      {{ country.population }}
      {{ country.latlng }}
      {{ country.demonym }}
      {{ country.area }}
      {{ country.gini }}
      {{ country.timezones }}
      {{ country.borders }}
      {{ country.nativeName }}
      {{ country.numericCode }}
      {{ country.currencies }}
      {{ country.languages }}
      {{ country.translations }}
      {{ country.regionalBlocs }}
      {{ country.otherAcronyms }}
      {{ country.otherNames }}
      {{ country.cioc }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const countryData = await $axios.$get(
      `https://restcountries.eu/rest/v2/name/${params.name}`
    );
    return { countryData };
  },
};
</script>

<style>
</style>