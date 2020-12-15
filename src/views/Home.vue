<template>
  <div class="home">
    <h1>{{ message }}</h1>   
    <!-- <button v-on:click="recipesIndex()">Get Recipes</button> -->    
    <!-- recipes.each do |recipe| -->
    <h2>Make a new recipe</h2>
    <h1 v-for="error in errors">{{ error }}</h1>
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
      <button v-on:click="showRecipe(recipe)">Show more info</button>
      <hr>
    </div>
    <dialog id="recipe-details">
      <form method="dialog">
        <h3>Hello</h3>
        <p><strong>title:</strong> <input type="text" v-model="currentRecipe.title"></p>
        <p><strong>ingredients:</strong> <input type="text" v-model="currentRecipe.ingredients"></p>
        <p><strong>prep </strong>time: <input type="text" v-model="currentRecipe.prep_time"></p>
        <p><strong>image </strong>url: <input type="text" v-model="currentRecipe.image_url"></p>
        <p><strong>directions:</strong> <input type="text" v-model="currentRecipe.directions"></p>
        <button>Close</button>
        <button v-on:click="updateRecipe()">Update</button>
        <button v-on:click="destroyRecipe()">Remove</button>
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
      image_url: "",
      currentRecipe: {},
      errors: []
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
      }).catch(error => {
        console.log("you messed up");
        console.log(error.response.data.errors);
        // show user errors
        this.errors = error.response.data.errors;
      });
    },
    updateRecipe: function() {
      var params = {
        title: this.currentRecipe.title,
        directions: this.currentRecipe.directions,
        ingredients: this.currentRecipe.ingredients,
        image_url: this.currentRecipe.image_url,
        prep_time: this.currentRecipe.prep_time,
      }
      
      console.log('updating recipe...');
      axios.patch("/api/recipes/" + this.currentRecipe.id, params).then(response => {
        console.log(response.data);
      })
    },
    showRecipe: function(theRecipe) {
      console.log(theRecipe);
      this.currentRecipe = theRecipe;
      console.log('show recipe...');
      document.querySelector("#recipe-details").showModal();
    },
    destroyRecipe: function() {
      console.log('destroy recipe...');
      // making the correct request to rails
      axios.delete('/api/recipes/' + this.currentRecipe.id).then(response => {
        console.log(response.data);
        // remove the recipe from the array
        // find the correct index in the array
        var index = this.recipes.indexOf(this.currentRecipe);
        console.log(index);
        // delete at that index
        this.recipes.splice(index, 1);
      })
    }
  }
};
</script>
