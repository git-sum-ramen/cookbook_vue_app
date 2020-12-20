<template>
  <div class="recipes-show">
    <h6>{{ message }}</h6>
    <h6>title: {{ recipe.title }}</h6>
    <h6>ingredients: {{ recipe.ingredients }}</h6>
    <h6>directions: {{ recipe.directions }}</h6>
    <h6>prep_time: {{ recipe.prep_time }}</h6>
    <h6>image_url: {{ recipe.image_url }}</h6>
    <!-- <h1>chef: {{ recipe.user.email }}</h1> -->
    <h1>User Id? {{ $parent.getUserId() }}</h1>
    <h1>User Id of the recipe? {{ recipe.user_id }}</h1>
    
    <!-- <p v-if="getUserId() === recipe.user_id">The user should be able to edit this</p> -->
    <router-link v-if="$parent.getUserId() == recipe.user_id" v-bind:to="`/recipes/${recipe.id}/edit`">Edit</router-link>
    <br>
    <button v-if="$parent.getUserId() == recipe.user_id" v-on:click="recipesDestroy()">Delete</button>

  </div>
</template>

<style>
</style>

<script>


import axios from 'axios'
export default {
  data: function() {
    return {
      message: "Welcome to the show",
      recipe: {}
    };
  },
  created: function() {
    this.recipesShow();
  },
  methods: {
    recipesShow: function() {
      console.log('in recipes show');
      console.log(this.$route.params.id);
      axios.get('/api/recipes/' + this.$route.params.id).then(response => {
        console.log(response.data); 
        this.recipe = response.data;
      })
    },
    recipesDestroy: function() {
      console.log('destroying reciep...');
      axios.delete(`/api/recipes/${this.recipe.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/recipes");
      })
    }
  }
};
</script>
