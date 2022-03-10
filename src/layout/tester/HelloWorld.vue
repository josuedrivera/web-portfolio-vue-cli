<template>
  <section id="hello-world" class="hero is-fullheight has-text-centered">
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
      </figure>

      <div id="hello-world-hero-container" class="container">
        
        <!-- <h1 id="" class="has-text-info testType p-0">Josue Rivera</h1>
        <div
          class="
            titleBar
            is-flex is-align-items-flex-end is-centered
            has-background-danger
            columns
            column
            is-6 is-offset-3
            p-0
          "
        >
          <h2 class="has-text-black testTypeII">
            Web Developer | San Francisco Bay Area.
          </h2>
        </div> -->
        <!-- ALTERNATE HEADER TEXT NOT FINAL VERSION -->
        <h1 id="" class="title is-size-1 has-text-white ">
					Hi, my name is 
					Josue Rivera
				</h1>
				<h2 class="subtitle is-size-3 has-text-white">
				Web Deverloper | San Francisco Bay Area.
				</h2>
				<hr class="hero-bar">
		<h4 class="is-size-1 has-text-white">{{ msg }}</h4>
		<h1 class="title has-text-danger">more about me</h1>
        <a href="#about-me"
          ><i
            class="fas fa-angle-down hello-world-down is-size-1 has-text-black"
          ></i
        ></a>
      </div>
    </div>
	<!-- <div class="hero-foot has-text-primary-dark">
			<div class="m-0">
				<a href="#about-me"><i class="fas fa-angle-down hello-world-down is-size-1 has-text-primary"></i></a>
			</div>
		</div> -->
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
  overflow: hidden;
}

.bg-video__content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}




.logo { 
  font-family: 'Economica', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
}

.logoTest {
  /* width: 4.5rem;
  height: 4.5rem; */
  width: 6.5rem;
  height: 6.5rem;
  position: fixed;
  top: 4.5rem;
  left: 4.5rem;
  color: aqua;
  font-family: 'Economica', sans-serif;
  font-size: 3rem;
  
  border-radius: 50%;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: overline dotted teal 30px;
  /* padding: 20px; */
  z-index: 100;
}









.testType {
  font-family: 'Economica', sans-serif;
  font-size: 8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: .5rem .5rem black, 0 0rem 2rem teal, 0 0rem 1rem aqua;
}

.testTypeII {
  font-family: 'Economica', sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: overline 8px wavy #FCDD57; 
}

.hero-bar {
  width: 60%;
  height: 5px;
  background-color: hsl(180, 100%, 25%);
  border: none;
  margin: 2rem auto;
}

.titleBar {
  height: 5rem;
  position: relative;
  top: -1.5rem;
  box-shadow: -5px 15px black, 15px -7px teal, 20px 20px 20px aqua;
  z-index: -1;
}

</style>


