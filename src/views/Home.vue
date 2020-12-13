<template>
  <div class="home">
    <h1>{{ message }}</h1>   
    <!-- <button v-on:click="recipesIndex()">Get Recipes</button> -->    
    <!-- recipes.each do |recipe| -->
    <h2>Make a new recipe</h2>
    <button v-on:click="createRecipe()">Make Recipe</button>
    
    
    <div v-for="recipe in recipes">
      {{ recipe.title }}
      <p><img v-bind:src="recipe.image_url" v-bind:alt="recipe.title"></p>
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
    },
    createRecipe: function() {
      console.log('creating recipe...');
      var params = {
        title: "oats",
        ingredients: "the ingredients",
        directions: "the directions",
        prep_time: 20,
        image_url: "the image_url"
      };
      axios.post('/api/recipes', params).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
      });
    }
  }
};
</script>
