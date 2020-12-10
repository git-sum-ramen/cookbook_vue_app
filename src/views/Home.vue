<template>
  <div class="home">
    <h1>{{ message }}</h1>   
    <!-- recipes.each do |recipe| -->
    <!-- <button v-on:click="recipesIndex()">Get Recipes</button> -->
    
    <div v-for="recipe in recipes">
      {{ recipe.title }}
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      recipes: []
    };
  },
  created: function() {
    console.log('in created');
    this.recipesIndex();
  },
  methods: {
    recipesIndex: function() {
      console.log('recipes index..');
      axios.get('/api/recipes').then(response => {
        console.log(response.data);
        this.recipes = response.data;
      });
    }
  }
};
</script>
