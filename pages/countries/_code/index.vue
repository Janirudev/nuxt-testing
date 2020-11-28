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
    <img
      class="mx-auto max-w-32 max-h-10"
      :src="country.flag"
      :alt="country.name"
    />
    <h1>
      {{ country.name }}
    </h1>
    <div>Domain: {{ country.topLevelDomain }}</div>
    <div>(2 Digit) Country Code: {{ country.alpha2Code }}</div>
    <div>(3 Digit) Country Code: {{ country.alpha3Code }}</div>
    <div>Phone Country Code: {{ country.callingCodes }}</div>
    <div>Capital: {{ country.capital }}</div>
    <div>Alternative: {{ country.altSpellings }}</div>
    <div>Region: {{ country.region }}</div>
    <div>Subregion: {{ country.subregion }}</div>
    <div>Population: {{ country.population }}</div>
    <div>Location: {{ country.latlng }}</div>
    <div></div>

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
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const country = await $axios.$get(
      `https://restcountries.eu/rest/v2/alpha/${params.code}`
    );
    return { country };
  },
};
</script>

<style>
</style>