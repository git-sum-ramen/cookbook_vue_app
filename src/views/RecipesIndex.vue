

<template>
  <div class="recipes-index">
    <!-- <h1>{{ recipes }}</h1> -->    
    <!-- <div v-for="recipe in recipes"> -->
    <div v-for="recipe in filterBy(recipes, searchTerm, 'title')">
      <p>{{ recipe.title }}</p>
       <!-- <router-link v-bind:to="'/recipes/' + recipe.id"> -->
       <router-link v-bind:to="`/recipes/${recipe.id}`">
        <img v-bind:src="recipe.image_url">
      </router-link>
    </div>
  </div>
</template>

<style>

</style>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to index page!",
      recipes: [],
      searchTerm: ""
    };
  },
  created: function() {
    this.recipesIndex();
  },
  methods: {
    recipesIndex: function() {
      console.log('in recipes index')
      axios.get('/api/recipes').then(response => {
        console.log(response.data);
        this.recipes = response.data;
      })
    }    
  }
};
</script>
