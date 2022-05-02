<template>
  <!-- <section id="blog-podcast" class="section columns hero is-fullheight">
    <div class="columns column container is-8 is-offset-2">
      <h2 class="title is-size-1 has-text-info pt-6">MY PERSPECTIVE</h2>
    </div>

    <div class="hero-body">
      <div class="column is-8 is-offset-2">
        <div class="has-background-info tile is-ancestor box">
          <div
            class="
              tile
              is-parent is-vertical
              has-text-centered has-background-primary
            "
          >
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <p class="title">This Section Is Under Construction</p>
                <p class="subtitle has-text-info">{{ msg }}</p>
                <div class="content">
                  Content
        
                </div>
              </article>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-info">
                  <p class="title">
                    What I've Learned From Kids and Kittens
                  </p>
                  <p class="subtitle">
                    CHECK OUT MY BLOG
                  </p>
                </article>
                <article class="tile is-child notification is-info">
                  <p class="title">Psychonauts and Bubble Butts</p>
                  <p class="subtitle">Delusions of Grandeur</p>
                  <p class="subtitle">CHECK OUT MY PODCASTS</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                  <p class="title">places2Go</p>
                  <p class="subtitle">CHECK OUT MY TRAVEL BLOG</p>
                  <figure class="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                    />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section id="blog-podcast" class="section columns hero is-fullheight">
    <div class="columns column container is-8 is-offset-2">
      <h2 class="title is-size-1 has-text-info pt-6">MY VOICE</h2>
    </div>

    <div class="hero-body">
      <div class="column is-8 is-offset-2">
        <div class="has-background-info tile is-ancestor box">
          <div
            class="
              tile
              is-parent is-vertical
              has-text-centered has-background-primary
            "
          >
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <p class="title">This Section Is Under Construction</p>
                <p class="subtitle has-text-info">{{ msg }}</p>
                <div class="content  column is-6 is-offset-3">
                  <!-- Content -->
                 
                
                 
                  <figure class="image ">
                    <img
                      src="https://res.cloudinary.com/dfuxcsi7w/image/upload/v1651477304/Photos-001/20211204_093111-removebg-preview_e9cgwh.png"
                    />
                    <p>Smokey & Bandit: "Eh, we're workin' on it"</p>
                  </figure>
                
            
                </div>
              </article>
            </div>
            <div class="tile">
              
              
            </div>
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
.section {
  background-image: linear-gradient(to bottom, rgba(50, 50, 50, 0.8), black);
  /* background-image: linear-gradient(rgba(0, 128, 128, 0.2), black 1%); */
  /* background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,128,128,1)); */
}
</style>
