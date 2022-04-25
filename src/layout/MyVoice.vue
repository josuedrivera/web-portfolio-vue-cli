<template>
  <section
    id="blog-podcast"
    class="section columns hero is-fullheight has-background-black-ter"
  >
    <div class="columns column container is-8 is-offset-2">
      <h2 class="title is-size-1 has-text-danger pt-6">
        MY PERSPECTIVE
      </h2>
    </div>

    <div class="hero-body has-background-black-ter">
      <div class="column is-8 is-offset-2">
        <div class="has-background-link tile is-ancestor box">
          <div
            class="
              tile
              is-parent is-vertical
              has-text-centered
              has-background-danger
            "
          >
          

          <!-- <div class="tile is-ancestor"> -->
  <!-- <div class="tile is-vertical is-8"> -->
     <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
    <div class="tile">
      
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-link">
          <p class="title">CHECK OUT MY BLOG</p>
          <p class="subtitle">What I've Learned From Kids and Kittens</p>
        </article>
        <article class="tile is-child notification is-link">
          <p class="title">CHECK OUT MY PODCASTS</p>
          <p class="subtitle">Delusions of Grandeur</p>
          <p class="subtitle">Psychonauts and Bubble Butts</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-dark">
          <p class="title">CHECK OUT MY TRAVEL BLOG</p>
          <p class="subtitle">places2Go</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
   
  <!-- </div> -->
  
<!-- </div> -->
          
         






          </div>
        </div>
      </div>
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
#headshot {
  max-width: 75%;
  margin: 0 auto;
  padding: 1.2rem 0;
}
</style>
