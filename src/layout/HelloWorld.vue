<template>
	<section id="welcome" class="hero is-fullheight has-text-centered">
		<!-- BACKGROUND VIDEO -->
		<div class="bg-video">
			<video class="bg-video__content" autoplay muted loop>
				<source src="../assets/video.mp4" type="video/mp4">
				<source src="img/video.webm" type="video/webm">
				Your browser is not supported!
			</video>
		</div>
		<!-- LANDING PAGE CONTENT -->
		<div id="welcome-hero" class="hero-body">
			<!-- <span>&#x1F433</span> -->
			<figure class="hero-head image has-background-info-dark p-1 logoTest">
				<img class="is-rounded" src="../assets/swaysauce_pfp.jpeg" alt="">
			</figure>

			<div id="welcome-hero-container" class="container">
        <h1>{{ msg }}</h1>
				<h1 id="" class=" has-text-info testType p-0">
					Josue Rivera</h1>
				<div class="titleBar is-flex is-align-items-flex-end is-centered has-background-danger columns column is-6 is-offset-3 p-0">
					<h2 class="has-text-black testTypeII">
						Web Developer | San Francisco Bay Area.
					</h2>
				</div>
				<!-- ALTERNATE HEADER TEXT NOT FINAL VERSION -->
				<!-- <h1 id="" class="title is-size-1 has-text-primary-dark testType">
					Hi, my name is 
					Josue Rivera
				</h1>
				<hr class="hero-bar">
				<h2 class="subtitle is-size-3 has-text-primary-dark">
				Web Deverloper | San Francisco Bay Area.
				</h2> -->

				<a href="#about-me"><i class="fas fa-angle-down welcome-down is-size-1 has-text-black"></i></a>
			</div>
		</div>

		<!-- <div class="hero-foot has-text-primary-dark">
			<div class="m-0">
				<a href="#about-me"><i class="fas fa-angle-down welcome-down is-size-1 has-text-primary"></i></a>
			</div>
		</div> -->
	</section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .9;
  overflow: hidden; 
}


.bg-video__content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>


