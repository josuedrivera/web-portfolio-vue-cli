<template>
  <section
    id="about-me"
    class="section hero is-fullheight has-background-black-ter py-6"
  >
    <div class="columns column is-8 is-offset-2 my-0">
      <div class="columns column m-0 p-0 has-background-black-ter">
        <h2 class="title is-size-1 has-text-primary-dark">ABOUT ME</h2>
      </div>
    </div>

    <div class="container columns is-centered py-4">
      <div
        class="
          tile
          is-ancestor
          box
          column
          columns
          has-background-primary-dark
          is-10
        "
      >
        <div class="tile box has-background-black p-3">
          <div class="tile is-parent is-vertical is-4 has-text-centered p-0">
            <article
              class="tile is-child is-flex m-0 p-0 has-background-success"
            >
              <div
                class="
                  is-flex
                  is-flex-direction-column
                  is-justify-content-space-between
                  has-background-primary
                "
              >
                <!-- headshot -->
                <figure class="image has-background-primary p-4">
                  <img
                    id="headshot"
                    class="is-rounded p-0"
                    src="../assets/headshotsm.jpg"
                  />
                </figure>

                <h1>{{ msg }}</h1>

                <!-- name and title -->
                <div class="box has-background-danger mx-4 py-2">
                  <h1 class="title has-text-white">Josue Rivera</h1>
                  <h2 class="subtitle has-text-black">
                    Front-End Developer
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
                    <span class="is-block has-text-warning is-size-3">
                      <i
                        class="
                          fas
                          fa-angle-down
                          welcome-down
                          is-size-3
                          has-text-warning
                          p-0
                          m-0
                        "
                      ></i>
                      Checkout My Work</span
                    >
                  </a>
                </div>

                <!-- test paragraph -->
                <!-- <div class="p-4">
									<div class="box is-size-5 has-background-grey-darker p-0">
										<div class="container">
											<p class="block has-text-primary-dark has-text-centered is-size-5">
												--blog & podcast in progress--
											</p>
										</div>
										<a href="#project-gallery">
											<span class="is-block is-size-4 has-text-danger p-0">
												<i class="fas fa-angle-down welcome-down p-0 m-0"></i> CHECK OUT MY
												WORK</span>
										</a>
									</div>
								</div> -->
                <!-- closes bio column -->
              </div>
            </article>
          </div>
          <div class="tile is-vertical has-background-primary p-4">
            <div
              class="is-12 is-flex is-flex-direction-column has-background-info"
            >
              <!-- vue router -->
              <div id="about-me" class="">
                <div class="has-background-grey-darker">
                  <div v-html="softSkill"></div>
                  <!-- <transition mode="out-in" name="bounce">
										<router-view></router-view>
									</transition> -->
                </div>
              </div>
            </div>
            <div class="tile is-parent has-background-grey-darker p-0">
              <article class="tile is-child is-flex is-align-self-flex-end">
                <div
                  class="
                    column
                    is-flex
                    is-align-content-flex-end
                    is-justify-content-flex-end
                    p-0
                    m-0
                  "
                >
                  <!-- buttons  -->
                  <div class="buttons has-addons">
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
                  <!-- closes column div  -->
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <!-- closes container div  -->
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
#headshot {
  max-width: 75%;
  margin: 0 auto;
  padding: 1.2rem 0;
}

#about-me .container:hover .columns .column {
  animation: flip-customer 1s ease-out forwards;
}
</style>
