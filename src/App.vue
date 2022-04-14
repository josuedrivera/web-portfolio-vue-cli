<template>

  <HelloWorld msg="more about me" />
  <!-- <HelloWorld msg="Welcome to my WEB_PORTFOLIO/>" /> -->
  <MyBio msg="This is my Bio and Skillset" />
  <!-- <MyVoice msg="Check out my Blog and Podcast!" /> -->
  <!-- <MyWork msg="Check out my Project Gallery!" /> -->
  <TheFooter msg="Stay in touch!" />


  <!-- BURGER AND NAVIGATION -->
  <!-- <div class="navigation">
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
  </div> -->
  
</template>

<script>
import HelloWorld from "./layout/HelloWorld.vue";
import MyBio from "./layout/MyBio.vue";
// import MyVoice from "./layout/MyVoice.vue";
// import MyWork from "./layout/MyWork.vue";
import TheFooter from "./layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    HelloWorld,
    MyBio,
    // MyVoice,
    // MyWork,
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
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  background-color: black;
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  background-color: transparent;
  padding-left: 1rem;
}

::selection {
  background-color: teal;
  color: white;
}


</style>
