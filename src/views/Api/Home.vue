<template>
  <div>
    <h4 class="text-center mb-3">Quotes Axios API</h4>

    <div v-for="(quote, index) in quotes" :key="quote.id">
      <div class="card shadow mb-3">
        <div class="card-body">
          <div class="d-flex position-relative">
            <img
              v-bind:src="quotes1.baseurl + quotes[index].background"
              class="flex-shrink-0 me-3"
              style="width: 300px"
            />
            <div>
              <h5 class="mt-0">{{ quotes[index].name }}</h5>
              <p>
                {{ quotes[index].description }}
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                illo repellat, accusamus pariatur sit deserunt optio? Dolorum
                magnam deserunt aliquam, tenetur expedita error quod id
                perspiciatis unde ullam, voluptatem cumque?s
              </p>
              <p>language : {{ quotes[index].language }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quotes: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://quotes.rest/qod/categories?language=en&detailed=true"
    );
    this.quotes = response.data.contents.categories;
    this.quotes1 = response.data;
    console.log(this.quotes);
  },
};
</script>
