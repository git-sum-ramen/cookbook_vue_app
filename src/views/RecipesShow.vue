<template>
  <div class="recipes-show">
    <h1>{{ message }}</h1>
    <h1>title: {{ recipe.title }}</h1>
    <h1>ingredients: {{ recipe.ingredients }}</h1>
    <h1>directions: {{ recipe.directions }}</h1>
    <h1>prep_time: {{ recipe.prep_time }}</h1>
    <h1>image_url: {{ recipe.image_url }}</h1>
    <!-- <h1>chef: {{ recipe.user.email }}</h1> -->
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
    }
  }
};
</script>
