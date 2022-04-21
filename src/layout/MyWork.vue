<template>

<section
    id="project-gallery"
    class="
      section
      columns
      hero
      is-fullheight
      has-background-black-ter
      
      is-vcentered
    "
  >
    <div>
    <!-- <div
      class="container columns column hero-head is-8 has-background-black-ter"
    > -->
      <h2 class="title is-size-1 has-text-grey-light">MY WORK</h2>
    </div>

    <div
      id="project-slides"
      class="container tile is-ancestor is-10 "
    >
     <div class="tile box has-background-black p-3  has-background-grey-light">
      

        <div class="tile is-vertical box  has-background-black-ter p-3">
          <div class="card p-0">
            <div class="card-content has-background-grey-darker">
              <div class="tile has-background-black-bis">
                <div class="tile is-parent is-vertical p-0">
                  <article class="tile is-child p-0">
                    <div class="tile is-vertical p-0">
                      <!-- vue router  -->
                      <div id="app" class="has-background-black-bis">
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
                    <ul class="px-4">
                      <h1>{{ msg }}</h1>
                      <li class="">
                        <router-link to="/one" class="has-text-primary"
                          >Digital Drumkit
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/two" class="has-text-primary"
                          >Pusheen Zodiac
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/three" class="has-text-primary"
                          >Natours
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/four" class="has-text-primary"
                          >Color Guess
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/five" class="has-text-primary"
                          >Monster Attack
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/six" class="has-text-primary"
                          >To Do App
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/seven" class="has-text-primary"
                          >Score Keeper
                        </router-link>
                      </li>
                      <!-- <li class="">
							<router-link to="/eight" class="has-text-primary">Roast Sway
							</router-link>
						</li>
						<li class="">
							<router-link to="/nine" class="has-text-primary">Villains
							</router-link>
						</li>
						<li class="">
							<router-link to="/ten" class="has-text-primary">U-Host
							</router-link>
						</li>
						<li class="">
							<router-link to="/eleven" class="has-text-primary">Patatap Clone
							</router-link>
						</li>
						<li class="">
							<router-link to="/twelve" class="has-text-primary">Aurora Grove
							</router-link>
						</li>
						<li class="">
							<router-link to="/thirteen" class="has-text-primary">Bulma
								Portfolio</router-link>
						</li>
						<li class="">
							<router-link to="/fourteen" class="has-text-primary">Faithful Quiz
							</router-link>
						</li> -->
                      <!-- <li class="">
							<router-link to="/fifteen" class="has-text-primary">Faithful Quiz
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
                has-background-primary
                is-flex is-justify-content-center
              "
            >
              <h3 id="">
                <a href="#contact-info" class="is-size-4 has-text-white">
                  <i class="fas fa-angle-down welcome-down"></i>
                  <span> Sway says 'Hi!' | KEEP UP AND STAY IN TOUCH </span>
                  <i class="fas fa-angle-down welcome-down"></i>
                </a>
              </h3>
            </footer>
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
</style>
