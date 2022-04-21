<template>
  <section id="hello-world" class="hero is-fullheight has-text-centered">
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

    <!-- BACKGROUND VIDEO -->
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="../assets/video.mp4" type="video/mp4" />
        <source src="img/video.webm" type="video/webm" />
        Your browser is not supported!
      </video>
		
    </div>

    <!-- LANDING PAGE CONTENT -->
    <div id="hello-world-hero" class="hero-body">
      <figure class="hero-head image has-background-info-dark p-1 logoTest">
        <img class="is-rounded" src="../assets/swaysauce_pfp.jpeg" alt="" />
        <!-- <img class="is-rounded" src="../assets/swaysauce_pfp.jpeg" alt="" /> -->
      </figure>
     
      <div id="hello-world-hero-container" class="container">
        <!-- <h1 id="jdr" class="title is-size-1 has-text-white my-6 pt-6">Josue Demar Rivera	</h1> -->

        <!-- <img src="../assets/1-glow.svg" alt=""> -->
        <img src="../assets/1.svg" alt="">
        <!-- <img src="../assets/1-bkdrop.svg" alt=""> -->
        <!-- <img src="../assets/2-bkdrop.svg" alt=""> -->
        <!-- <img src="../assets/2.svg" alt=""> -->
        <!-- <img src="../assets/3.svg" alt=""> -->
				
        
				<hr class="hero-bar">
        <a href="#about-me" class=" has-text-white">
          
		<!-- <h4 class="title has-text-danger">more about me</h4> -->
		<h4 class="is-size-2 has-text-white">{{ msg }}</h4>
          <i
            class="fas fa-angle-down hello-world-down is-size-1"
          ></i
        ></a>
      </div>
    </div>
    
	
  </section>
</template>











<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.85;
  /* overflow: hidden; */
}

.bg-video__content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.logoTest {
  /* width: 4.5rem;
  height: 4.5rem; */
  width: 7.5rem;
  height: 7.5rem;
  position: fixed;
  top: 4rem;
  left: 4rem;
  /* color: aqua; */
  font-family: 'Economica', sans-serif;
  font-size: 3rem;
  border: 0.5rem solid teal;
  /* border: 0.5rem solid #07d1b2; */
  border-radius: 50%;
  font-weight: 700;
  /* text-transform: uppercase; */
  /* text-decoration: overline dotted teal 30px; */
  /* padding: 20px; */
  z-index: 100;
}

/* .logoTest:hover {animation: moveInRight 1s ease-out;} */

.hero-bar {
  width: 70%;
  height: 5px;
  background-color: hsl(180, 100%, 25%);
  /* background-color: aqua; */
  /* background-color: #07d1b2; */
  border: none;
  border-radius: 50%;
  margin: 2rem auto;
}

/* {
  color: #FCDD57;
  color: #07D1B2;
} */



.navigation__checkbox {
  display: none;
}

.navigation__button {
  background-color: teal;
  /* background-color: #07D1B2; */
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
  /* background-image: radial-gradient(aqua, teal); */
  background-image: radial-gradient(aqua, #07D1B2);
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
  position: relative;
  /* background-color: hotpink; */
  margin-top: 3.5rem;
}

.navigation__icon,
.navigation__icon::before,
.navigation__icon::after {

  width: 2.5rem;
  height: 2px;
  /* background-color: $color-grey-darkest; */
  background-color: aqua;
  display: inline-block;
}

.navigation__icon::before,
.navigation__icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.navigation__icon::before {
  top: -0.8rem;
}
.navigation__icon::after {
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


/* @keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
} */
</style>