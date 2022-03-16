<template>

  <HelloWorld msg="Welcome to my WEB_PORTFOLIO/>" />
  <MyBio msg="This is my Bio and Skillset" />
  <MyVoice msg="Check out my Blog and Podcast!" />
  <MyWork msg="Check out my Project Gallery!" />
  <TheFooter msg="Stay in touch!" />


  <!-- BURGER AND NAVIGATION -->
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#about-me" class="navigation__link">
            <span>01</span> About Me
          </a>
        </li>
        <li class="navigation__item">
          <a href="#blog-podcast" class="navigation__link">
            <span>02</span> Blog & Podcast
          </a>
        </li>
        <li class="navigation__item">
          <a href="#project-gallery" class="navigation__link">
            <span>03</span> Project Gallery
          </a>
        </li>
        <li class="navigation__item">
          <a href="#contact-info" class="navigation__link">
            <span>04</span> Contact Info
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HelloWorld from "./layout/HelloWorld.vue";
import MyBio from "./layout/MyBio.vue";
import MyVoice from "./layout/MyVoice.vue";
import MyWork from "./layout/MyWork.vue";
import TheFooter from "./layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    HelloWorld,
    MyBio,
    MyVoice,
    MyWork,
    TheFooter,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*,
*::before,
*::after {
  /* margin: 0;
  padding: 0; */
  box-sizing: inherit;
}

html {
  background-color: black;
  /* font-size: 62.5%; */
}

body {
  box-sizing: border-box;
  background-color: transparent;
  /* padding: 2rem; */
}

::selection {
  background-color: teal;
  color: white;
}

.navigation__checkbox {
  display: none;
}

.navigation__button {
  background-color: teal;
  height: 7rem;
  /* height: 5rem; */
  width: 7rem;
  /* width: 5rem; */
  position: fixed;
  top: 4rem;
  right: 4rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  /* // @include respond(tab-port) {
//     top: 4rem;
//     right: 4rem;
// }

// @include respond(phone) {
//     top: 3rem;
//     right: 3rem;
// } */
}

.navigation__background {
  /* // height: 6rem; */
  height: 4rem;
  /* // width: 6rem; */
  width: 4rem;
  border-radius: 50%;
  position: fixed;
  /* // top: 6.5rem;
  // right: 6.5rem; */
  top: 5rem;
  right: 5rem;
  /* // background-image: radial-gradient($color-primary-light, $color-primary-dark); */
  background-image: radial-gradient(aqua, teal);
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

  /* // @include respond(tab-port) {
  //     top: 4.5rem;
  //     right: 4.5rem;
  // }

  // @include respond(phone) {
  //     top: 3.5rem;
  //     right: 3.5rem;
  // } */
}

.navigation__nav {
  height: 100vh;
  /* width: 100%; */
  position: fixed;
  top: 0;
  /* left: 0; */
  right: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.53);
}

.navigation__list {
  /* //create h/v center mixin out of these 4 lines and implement */
  position: absolute;
  /* top: 50%; */
  top: 25%;
  left: 45%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: right;
  width: 100%;
}

.navigation__item {
  margin: 1rem;
  /* text-align: right; */
}

.navigation__link:link,
.navigation__link:visited {
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  padding: 1rem 2rem;
  /* // color: $color-white; */
  color: teal;
  text-decoration: none;
  text-transform: uppercase;
  /* // background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%); */
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    teal 50%
  );
  background-size: 220%;
  transition: all 0.4s;
}

.navigation__link span {
  margin-right: 1.5rem;
  display: inline-block;
}

.navigation__link:hover,
.navigation__link:active {
  /* // color: $color-primary; */
  color: aqua;
  background-position: 100%;
  transform: translateX(1rem);
}

/* //FUNCTIONALITY */
.navigation__checkbox:checked ~ .navigation__background {
  /* transform: scale(80); */
  transform: scale(27);
}

.navigation__checkbox:checked ~ .navigation__nav {
  /* width: 100%; */
  width: 50%;
  opacity: 1;
}

/* //ICON */
.navigation__icon {
  position: absolute;
  /* position: relative; */
  background-color: hotpink;
  margin-top: 2.5rem;
}

.navigation,
.navigation::before,
.navigation::after {
  position: relative;
  width: 2.5rem;
  height: 2px;
  /* background-color: $color-grey-darkest; */
  background-color: aqua;
  display: inline-block;
}

.navigation::before,
.navigation::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.navigation::before {
  top: -0.8rem;
}
.navigation::after {
  top: 0.8rem;
}

.navigation__button:hover .navigation__icon::before {
  top: -1rem;
}

.navigation__button:hover .navigation__icon::after {
  top: 1rem;
}

.navigation__checkbox:checked + .navigation__button .navigation__icon {
  background-color: transparent;
}

.navigation__checkbox:checked + .navigation__button .navigation__icon::before {
  top: 0;
  transform: rotate(135deg);
}

.navigation__checkbox:checked + .navigation__button .navigation__icon::after {
  top: 0;
  transform: rotate(-135deg);
}
</style>
