<template>
  <div class="home">
    <h1>{{ message }}</h1>   
    <!-- recipes.each do |recipe| -->
    <div v-for="recipe in recipes">
      {{ recipe.title }}
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      recipes: [
        {id: 1, title: "Raw Eggs", chef: "Jay Wengrow"},
        {id: 2, title: "Ice Cubes", chef: "Peter Jang"},
        {id: 3, title: "Quinoa Salad", chef: "Brian Rice"},
      ]
    };
  },
  created: function() {},
  methods: {}
};
</script>
