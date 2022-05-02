<template>        
<section
    id="project-gallery"
    class="
      section
      columns
      hero
      is-fullheight
      has-background-black-ter
      
      
    "
  >
    
    <div class="columns column container is-8 is-offset-2">
      <h2 class="title is-size-1 has-text-info  pt-6">MY WORK</h2>
    </div>
    
   

    <!-- <div
      id="project-slides"
      class="container tile is-ancestor is-10 "
    > -->
    <div class="hero-body ">

     <!-- <div class="tile box has-background-black p-3  has-background-grey-light"> -->
      <div class="column is-8 is-offset-2 ">

        <!-- <div class="tile is-vertical box  has-background-black-ter p-3"> -->
          <div class="has-background-info tile is-ancestor box">
            <div
            class="
              tile
              is-parent is-vertical
              has-text-centered
              
              has-background-grey
            "
          >
          <div class="card p-0">
            <div class="card-content has-background-primary">
              <div class="tile has-background-black-bis">
                <h1>{{ msg }}</h1>
                <div class="tile is-parent is-vertical p-0   has-background-info">
                  <article class="tile is-child p-0  has-background-danger">
                    <div class="tile is-vertical p-0  has-background-link">
                      <!-- vue router  -->
                      <div id="app-router" class="has-background-black-bis">
                        <div class="">
                          <!-- <transition mode="out-in" name="bounce">
														<router-viewer></router-viewer>
													</transition>   -->
                          
                          <p>{{ projectName }}</p>
                          <img :src="projectImg" alt="" />
                          <a v-bind:href="projectLink"
                            >Open {{ projectName }} in a new window.</a
                          >

                          <div v-html="projCard"></div>

                          <transition mode="out-in" name="moveInLeft" class="">
                            <router-view class=""></router-view>
                          </transition>
                          <!-- list of projects available  -->
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div
                  class="
                    tile
                    is-parent is-3
                    has-background-grey-darker has-text-centered
                    p-4
                  "
                >
                  <article
                    class="
                      tile
                      is-child
                      m-0
                      is-size-4
                      is-flex
                      is-justify-content-flex-end
                      is-align-items-center
                    "
                  >
                    <!-- MY PROJECTS: LIST  -->
                    <ul class="px-4 has-text-info">
                      
                      <li class="">
                        <router-link to="/one" class=""
                          >Digital Drumkit
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/two" class=""
                          >Pusheen Zodiac
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/three" class=""
                          >Natours
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/four" class=""
                          >Color Guess
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/five" class=""
                          >Monster Attack
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/six" class=""
                          >To Do App
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/seven" class=""
                          >Score Keeper
                        </router-link>
                      </li>
                      <li class="">
							<router-link to="/eight" class="">Roast Sway
							</router-link>
						</li>
						<li class="">
							<router-link to="/nine" class="">Villains
							</router-link>
						</li>
						<li class="">
							<router-link to="/ten" class="">U-Host
							</router-link>
						</li>
						<li class="">
							<router-link to="/eleven" class="">Patatap Clone
							</router-link>
						</li>
						<li class="">
							<router-link to="/twelve" class="">Aurora Grove
							</router-link>
						</li>
						<li class="">
							<router-link to="/thirteen" class="">Bulma
								Portfolio</router-link>
						</li>
						<li class="">
							<router-link to="/fourteen" class="">Faithful Quiz
							</router-link>
						</li>
                      <!-- <li class="">
							<router-link to="/fifteen" class="">Faithful Quiz
							</router-link>
						</li> -->
                    </ul>
                  </article>
                </div>
              </div>
            </div>

            <footer
              class="
                card-footer
                has-background-danger
                is-flex is-justify-content-center
              "
            >
              <h3 id="">
                <a href="#contact-info" class="is-size-4 has-text-white">
                  <i class="fas fa-angle-down welcome-down"></i>
                  <span> Sway says 'Hi!' | check out my Blog & Podcast </span>
                  <i class="fas fa-angle-down welcome-down"></i>
                </a>
              </h3>
            </footer>
          </div>
            </div>
        </div>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <!-- <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>Natours</a></li>
            <li><a>yelpCamp</a></li>
            <li><a>places2Go</a></li>
            <li><a>Zodiac</a></li>
            <li><a>Color Guess</a></li>
            <li><a>Villains</a></li>
            <li><a>DigiDrumkit</a></li>
            <li><a>Monster Slayer</a></li>
          </ul> -->
        </div>
      </nav>
    </div>



    <!-- <div
      class="
        container
        hero-body
        columns
        column
        box
        tile
        is-ancestor is-12 is-centered
        has-background-black-ter
        py-0
      "
    >
      <div class="tile box has-background-grey-light is-12">
        <div
          class="
            tile
            is-parent is-vertical
            has-text-centered
            p-0
            has-background-grey-dark
          "
        >
          <article class="tile is-child is-flex">
            <div class="container">
              
            </div>
          </article>
        </div>

        <div class="has-background-grey-darker tile is-vertical p-4  is-4">
          <div class="is-12 is-flex is-flex-direction-column">
            
          </div>

          <div>
            <h1>{{ msg }}</h1>
          </div>

         
        </div>
      </div>
    </div> -->
  </section>



</template>

<script>
export default {
  name: "MyWork",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  background: url('https://res.cloudinary.com/dfuxcsi7w/image/upload/v1651303602/Photos-001/josh-wilburne-yhFdxUYkgA8-unsplash_jwf3dw.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  opacity: 0.95;
}


</style>
