<template>
  <section
    id="about-me"
    class="section columns hero is-fullheight has-background-black-ter"
  >
    <div class="columns column container is-8 is-offset-2">
      <h2 class="title is-size-1 has-text-info pt-6">ABOUT ME</h2>
    </div>


    <div class="hero-body ">
      <div class="column is-8 is-offset-2">
        <div class="has-background-info tile is-ancestor box">
          <div
            class="
              tile
              is-parent is-vertical
              has-text-centered
              is-4
              has-background-primary
            "
          >
            <article class="tile is-child is-flex">
              <div class="container">
                <!-- headshot -->
                <figure class="image">
                  <img
                    id="headshot"
                    class="is-rounded"
                    src="../assets/headshotsm.jpg"
                  />
                </figure>
                <!-- <div>
                  <h1>{{ msg }}</h1>
                </div> -->

                <!-- <h1>{{ msg }}</h1> -->

                <!-- name and title -->
                <div class="box has-background-danger mx-4">
                  <h1 class="title has-text-white">Josue Rivera</h1>
                  <h2 class="subtitle has-text-black">
                    {{ msg }}
                    <!-- Front-End Developer -->
                    <!-- | Creative Professional -->
                  </h2>
                </div>

                <div class="container">
                  <span class="is-size-3 has-text-white">
                    <!-- <i class="fas fa-map-pin"></i> -->
                    <i class="fas fa-map-marker-alt has-text-danger"></i> San
                    Mateo, CA
                  </span>
                  <br />
                  <span class="is-size-3 has-text-white">
                    <i class="fas fa-lock-open has-text-success"></i>
                    Looking for Work
                  </span>
                  <br />
                  <span class="is-size-3 has-text-white">
                    <i class="fas fa-paw has-text-info"></i>
                    Smokey & Bandit
                  </span>
                  <!-- <span class="is-size-3 has-text-white">
										<i class="fas fa-paw"></i>
										
									</span> -->

                  <a href="#blog-podcast">
                    <span class="is-block has-text-info is-size-2">
                      <i
                        class="
                          fas
                          fa-angle-down
                          welcome-down
                          is-size-2
                          has-text-info
                          p-0
                          m-0
                        "
                      ></i>
                      Checkout My Work</span
                    >
                  </a>
                </div>

              
                <!-- closes bio column -->
              </div>
            </article>
          </div>

       

          <div class="tile is-parent has-background-primary is-vertical">
            <article class="tile is-child box has-background-grey is-flex ">

              <div
                class="
                  
                  box
                  has-background-grey-darker has-text-danger has-text-left
                "
              >
                <p class="title block has-text-primary is-size-2">
                  Hard Skills
                </p>
                <span
                  class="
                    block
                    subtitle
                    has-text-grey has-text-weight-bold
                    is-size-3
                  "
                >
                  Languages: <br
                /></span>
                <div class="block is-flex is-flex-direction-row">
                  <p class="subtitle block has-text-grey-light is-size-4">
                    <i class="fab fa-html5 is-size-1 mt-3 mx-3"></i> |HTML5
                    <i class="fab fa-css3-alt is-size-1 mt-3 mx-3"></i> |CSS3
                    <i class="fab fa-js-square is-size-1 mt-3 mx-3"></i>
                    |JAVASCRIPT (ES5/ES6)
                  </p>
                </div>

                <span
                  class="
                    block
                    subtitle
                    has-text-grey has-text-weight-bold
                    is-size-3
                  "
                >
                  Applications: <br
                /></span>
                <p class="subtitle block has-text-grey-light is-size-4">
                  <span class=""
                    >WordPress, SquareSpace, SharePoint, Shopify <br
                  /></span>
                  <span class=""
                    >SCSS/SASS, Bootstrap, Bulma, Semantic UI <br
                  /></span>
                  <span class=""
                    >Vue.js, jQuery, Node.js, NPM +a variety of node packages
                    <br
                  /></span>
                </p>
                <p class="is-size-4">
                  <span class="has-text-weight-bold">
                    Design Process & Theory</span
                  >
                  | Responsive Design, Media Queries, Version Control, Github,
                  AJAX, JSON, APIs, RESTful Routes, CSS Naming Convention, Cross
                  Browser Development, Browser Dev Tools, Testing/Debugging,
                  Command Line...
                </p>
                <br />
                <ul class="block is-size-4">
                  <span class="has-text-weight-bold">
                    Also experienced with:
                  </span>
                  <li>Adobe XD, Adobe CC(Illustrator, Photoshop, InDesign)</li>
                  <li>MS Suite, Google Suite (including Apps Script)</li>
                  <li>Express.js, passport.js, and various Node.js packages</li>
                  <li>
                    JIRA - Issue and Project Tracking Software, others, and
                    still eagerly learning....
                  </li>
                </ul>
              </div>

              <!-- closes column div  -->
              <!-- </div> -->
            </article>
              <!-- buttons  -->
              <div
                class="buttons has-addons is-flex is-justify-content-flex-end"
              >
                <router-link class="button is-danger" to="/aboutMe">
                  About Me</router-link
                >

                <router-link class="button is-danger" to="/hardSkills">
                  Hard Skills</router-link
                >

                <router-link class="button is-danger" to="/softSkills">
                  Soft Skills</router-link
                >

                <router-link
                  class="button is-inverted is-danger"
                  to="/spaceMan"
                >
                  <i class="fas fa-lg fa-user-astronaut"></i>
                </router-link>
              </div>
          </div>
          <!-- </div> -->
        </div>
        <!-- closes container div  -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyBio",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), black);
  /* background-image: linear-gradient(rgba(0, 128, 128, 0.2), black 1%); */
  /* background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,128,128,1)); */
}

#headshot {
  max-width: 75%;
  margin: 0 auto;
  padding: 1.2rem 0;
}

/* #about-me .container:hover .columns .column {
  animation: flip-customer 1s ease-out forwards;
} */
</style>
