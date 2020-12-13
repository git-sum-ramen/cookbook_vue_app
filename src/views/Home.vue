<template>
  <div class="home">
    <h1>{{ message }}</h1>   
    <!-- <button v-on:click="recipesIndex()">Get Recipes</button> -->    
    <!-- recipes.each do |recipe| -->
    <h2>Make a new recipe</h2>
    <p>Title:<input type="text" v-model="title"></p>
    <p>Ingredients:<input type="text" v-model="ingredients"></p>
    <p>directions:<input type="text" v-model="directions"></p>
    <p>prep_time:<input type="text" v-model="prep_time"></p>
    <p>image_url:<input type="text" v-model="image_url"></p>
    <button v-on:click="createRecipe()">Make Recipe</button>
    <br>
    
    
    <div v-for="recipe in recipes">
      {{ recipe.id }}
      {{ recipe.title }}
      <p><img v-bind:src="recipe.image_url" v-bind:alt="recipe.title"></p>
      <button v-on:click="showRecipe()">Show more info</button>
      <hr>
    </div>
    <dialog id="recipe-details">
      <form method="dialog">
        <h3>Hello</h3>
        <button>Close</button>
      </form>
    </dialog>
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
      recipes: [],
      title: "",
      ingredients: "",
      directions: "",
      prep_time: "",
      image_url: ""
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
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prep_time,
        image_url: this.image_url
      };
      axios.post('/api/recipes', params).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
      });
    },
    showRecipe: function() {
      console.log('show recipe...');
      document.querySelector("#recipe-details").showModal();
    }
  }
};
</script>
