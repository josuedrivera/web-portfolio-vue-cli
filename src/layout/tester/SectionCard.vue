<template>
	
<div class="tile is-parent is-vertical is-4 has-text-centered p-0">
	<article class="tile is-child is-flex m-0 p-0 has-background-success">
		<div
			class="is-flex is-flex-direction-column is-justify-content-space-between has-background-primary">
			<!-- headshot -->
			<figure class="image has-background-primary p-4">
				<img id="headshot" class="is-rounded p-0" src="../assets/headshotsm.jpg">
			</figure>

				<h1>{{ msg }}</h1>

			<!-- name and title -->
			<div class="box has-background-danger mx-4 py-2">
				<h1 class="title has-text-white"> Josue Rivera </h1>
				<h2 class="subtitle has-text-black">
					Front-End Developer
					<!-- | Creative Professional -->
				</h2>

			</div>

			<div class="container">
				<span class="is-size-3 has-text-white">
					<!-- <i class="fas fa-map-pin"></i> -->
					<i class="fas fa-map-marker-alt has-text-danger"></i> San Mateo, CA
				</span>
				<br>
				<span class="is-size-3 has-text-white">
					<i class="fas fa-lock-open has-text-success"></i>
					Looking for Work
				</span>
				<br>
				<span class="is-size-3 has-text-white">
					<i class="fas fa-paw has-text-info"></i>
					Smokey & Bandit
				</span>
				<!-- <span class="is-size-3 has-text-white">
					<i class="fas fa-paw"></i>
					
				</span> -->
				<a href="#blog-podcast">
					<span class="is-block has-text-warning is-size-3">
						<i class="fas fa-angle-down welcome-down is-size-3 has-text-warning p-0 m-0"></i> Checkout My Work</span>
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

	<div class="is-12 is-flex is-flex-direction-column has-background-info">

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
</style>


