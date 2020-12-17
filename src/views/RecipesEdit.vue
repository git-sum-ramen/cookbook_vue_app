<template>
  <div class="recipes-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit a Recipe</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Title:</label> 
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>Ingredients:</label>
        <input type="text" class="form-control" v-model="ingredients">
      </div>
      <div class="form-group">
        <label>Directions:</label>
        <input type="text" class="form-control" v-model="directions">
      </div>
      <div class="form-group">
        <label>Prep Time:</label>
        <input type="text" class="form-control" v-model="prepTime">
      </div>
      <div class="form-group">
        <label>Image Url:</label>
        <input type="text" class="form-control" v-model="imageUrl">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      ingredients: "",
      directions: "",
      prepTime: "",
      imageUrl: "",
      errors: []
    };
  },
  created: function() {
    console.log('in created...');
    this.getRecipeData();
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageUrl,
      };
      axios
        .patch("/api/recipes/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/recipes/" + this.$route.params.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    getRecipeData: function() {
      // get data to prepopulate the form
      axios.get('/api/recipes/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.title = response.data.title;
        this.ingredients = response.data.ingredients;
        this.directions = response.data.directions;
        this.prepTime = response.data.prep_time;
        this.imageUrl = response.data.image_url;
      })
    }
  }
};
</script>
