

<template>
  <div class="recipes-index">
    <h1>{{ message }}</h1>
    <!-- <h1>{{ recipes }}</h1> -->
    <div v-for="recipe in recipes">
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
export default {
  data: function() {
    return {
      message: "Welcome to index page!",
      recipes: []
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
