<template>
  <section
    id="blog-podcast"
    class="section columns hero is-fullheight has-background-warning py-6 is-flex "
  >
    <div class="columns column is-8 is-offset-2 my-0 has-background-success is-justify-content-flex-end m-0 p-0">
      <h2 class="title is-size-1 has-background-info has-text-danger">MY PERSPECTIVE</h2>
    </div>

    <div class="tile is-ancestor box columns column is-12 has-background-dark ">
     
      
    </div>

    <div>
      <h1>{{ msg }}</h1>

    </div>
    
  </section>
</template>

<script>
export default {
  name: "my-voice",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
