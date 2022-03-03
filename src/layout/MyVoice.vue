<template>
  <section
    id="blog-podcast"
    class="section hero is-fullheight has-background-black-ter py-6"
  >
    <div class="columns column is-8 is-offset-2 my-0">
      <div
        class="
          columns
          column
          has-background-black-ter
          is-flex is-justify-content-flex-end
          m-0
          p-0
        "
      >
        <h1>{{ msg }}</h1>
        <h2 class="title is-size-1 has-text-danger">MY PERSPECTIVE</h2>
      </div>
    </div>

	<!-- top tile about web dev -->
    <div id="" class="container columns is-centered py-4"></div>
    <div class="box column columns has-background-danger is-10">
      <div class="card-content box has-background-black-ter is-12 p-3">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">Web Dev &amp; Design</p>
                <div class="subtitle is-flex is-justify-content-space-between">
                  <!-- ICON LIST -->
                  <p class="is-size-2">
                    <span class="px-1">
                      <i class="fab fa-html5"></i>
                    </span>
                    <span class="px-1">
                      <i class="fab fa-css3-alt"></i>
                    </span>
                    <span class="px-1">
                      <i class="fab fa-js-square"></i>
                    </span>
                    <span class="px-1">
                      <i class="fab fa-vuejs"></i>
                    </span>
                    <span class="px-1">
                      <i class="fab fa-node-js"></i>
                    </span>
                    <span class="px-1">
                      <i class="fab fa-wordpress"></i>
                    </span>
                    <span class="px-1">
                      <i class="fab fa-github"></i>
                    </span>
                    <span class="px-1">
                      <i class="fas fa-code-branch"></i>
                    </span>
                  </p>

                  <div class="content is-size-4 is-flex has-text-black-ter">
                    <a href="#project-gallery"
                      >Checkout My Work
                      <i
                        class="fas fa-angle-down welcome-down has-text-black"
                      ></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
			<!-- art, blog, & podcast -->
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <p class="title">
                    [My Blog]: What I learned from Kids &amp; Kittens
                  </p>
                  <p class="subtitle">...in progress</p>
                </article>
                <article class="tile is-child notification is-info">
                  <p class="title">Pen, Pencil, and Paint</p>
                  <p class="subtitle">
                    ...check out my art and other creative projects
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eveniet. Doloribus sunt quidem blanditiis et,
                    exercitationem repellat quisquam hic sapiente enim beatae
                    iusto maxime aliquam nam aperiam animi quod voluptate. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                    deserunt ducimus architecto repellendus, earum natus soluta
                    unde ut aperiam fugiat quae modi. Corrupti culpa cumque
                    officia quo impedit fugit distinctio.
                  </p>
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child notification is-warning">
                  <p class="title">[My Podcast]</p>
                  <p class="subtitle">...in progress</p>
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
