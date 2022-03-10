<template>
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
              <li class="">
                <router-link to="/eight" class="has-text-primary"
                  >Roast Sway
                </router-link>
              </li>
              <li class="">
                <router-link to="/nine" class="has-text-primary"
                  >Villains
                </router-link>
              </li>
              <li class="">
                <router-link to="/ten" class="has-text-primary"
                  >U-Host
                </router-link>
              </li>
              <li class="">
                <router-link to="/eleven" class="has-text-primary"
                  >Patatap Clone
                </router-link>
              </li>
              <li class="">
                <router-link to="/twelve" class="has-text-primary"
                  >Aurora Grove
                </router-link>
              </li>
              <li class="">
                <router-link to="/thirteen" class="has-text-primary"
                  >Bulma Portfolio</router-link
                >
              </li>
              <li class="">
                <router-link to="/fourteen" class="has-text-primary"
                  >Faithful Quiz
                </router-link>
              </li>
              <li class="">
                <router-link to="/fifteen" class="has-text-primary"
                  >Faithful Quiz
                </router-link>
              </li>
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
</template>