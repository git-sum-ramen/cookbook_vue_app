<template>
  <div class="recipes-show">
    					<div id="main">

						<!-- Post -->
							<section class="post">
								<header class="major">
									<span class="date">April 25, 2017</span>
									<h1>This is a<br />
									Generic Page</h1>
									<p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
									facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
									amet nullam sed etiam veroeros.</p>
								</header>
								<div class="image main"><img src="images/pic01.jpg" alt="" /></div>
								<p>{{recipe.directions}}</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus. Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum.</p>
							</section>

					</div>
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
