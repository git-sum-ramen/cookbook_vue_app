

<template>
  <div class="recipes-index">
    	<!-- Main -->
					<div id="main">

						<!-- Featured Post -->
							<article class="post featured">
								<header class="major">
									<span class="date">April 25, 2017</span>
									<h2><a href="#">Welcome to the <br />
									Index Page</a></h2>
									<p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
									facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
									amet nullam sed etiam veroeros.</p>
								</header>
								<a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
								<ul class="actions special">
									<li><a href="#" class="button large">Full Story</a></li>
								</ul>
							</article>

						<!-- Posts -->
							<section class="posts">
								<article v-for="recipe in recipes">
									<header>
										<span class="date">{{recipe.id}}</span>
										<h2><a href="#">{{recipe.title}}<br />
										</a></h2>
									</header>
									<a v-bind:href="'/recipes/' + recipe.id" class="image fit"><img v-bind:src="recipe.image_url" alt="" /></a>
									<p>{{recipe.directions}}.</p>
									<ul class="actions special">
										<li><a href="#" class="button">Full Story</a></li>
									</ul>
								</article>

							</section>

					
					</div>
    <!-- <h1>{{ recipes }}</h1> -->    
    <!-- <div v-for="recipe in recipes"> -->
    <p>Search: <input type="text" v-model="searchTerm" list="titles"></p>     
      <datalist id="titles">
        <option v-for="recipe in recipes">{{ recipe.title }}</option>
      </datalist>
    <div v-for="recipe in orderBy(filterBy(recipes, searchTerm, 'title'), 'title')">
    <!-- <div v-for="recipe in orderBy(recipes, 'title', 1)"> -->
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
