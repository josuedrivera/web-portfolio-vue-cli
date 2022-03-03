<template>
	<section id="contact-info" class="hero is-fullheight has-background-black-ter pt-6">
		<div class="columns column is-8 is-offset-2 my-0">
			<div class="columns column has-background-grey-black-ter is-flex is-justify-content-flex-end m-0 p-0">
        <h1>{{ msg }}</h1>
				<h2 class="title is-size-1 has-text-warning">CONTACT INFO</h2>
			</div>
		</div>

		<div id="" class="container columns  is-centered py-4">
			<div class="tile is-ancestor box column columns  has-background-black-bis is-10">
				<div class="tile is-parent box has-background-warning">


					<div class="tile is-child box has-background-grey-darker has-text-warning">

						<p class="is-size-1 px-6 has-text-centered">Thanks for visiting my site.</p>
						<p class="is-size-3 px-6 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel atque molestias hic quia porro alias adipisci assumenda molestiae excepturi iusto, nobis officia reiciendis tempora laborum quod ipsa in inventore. Email me for work inquiries.</p>
						<!-- <p class="is-size-6 p-6">work inquiries</p> -->
					</div>

				</div>
			</div>	
		</div>	
		<div id="" class="card has-background-danger">

			<!-- CONTACT INFO AND MORE AREA  -->
			<div class="card-content container columns is-centered has-background-danger my-0 pb-0">
				<div class=" column columns is-11 px-5">
					<div class="tile is-vertical">

						<!-- EMAIL C/P  -->
						<div id="email-div" class="">
							<div class="is-size-5 has-text-warning">
								<i class="fas fa-paper-plane"></i>
								E-MAIL:
							</div>
							<span class="tooltip has-text-warning">
								<span onclick="copyToClipboard('#myemail')" onmouseout="outFunc()">
									<span class="subtitle has-text-white" id="myemail">
										jdemarrivera@gmail.com
									</span>
									<i class="fas fa-copy has-text-white"></i>
									<span class="tooltiptext has-background-black has-text-warning" id="myTooltip">Copy
										to clipboard</span>
								</span>
							</span>
						</div>

						<!-- CREDITS BAR  -->
						<div id="credits-div" class="pt-6">
							
							
							<p class="block is-flex is-align-content-center"></p>
							<div class="pr-4">
								<a href="https://bulma.io" class="">
									<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma"
										width="128" height="24">
								</a>
							</div>


							<div class="has-text-grey-light">
								Video by:
								<a href="https://instagram.com/freecreativestuff" class=" pl-3">
									<i class="fab fa-instagram"></i> Free Creative Stuff
								</a>
								via
								<a href="https://www.pexels.com/">Pexels.com</a>
							</div>


							<div class="has-text-white is-size-5">
								<span class="">
									This website was made using:
								</span>

								<span class="px-1">
									<i class="fab fa-html5"></i>
								</span>
								<span class="px-1">
									<i class="fab fa-css3-alt"></i>
								</span>
								<span class="px-1">
									<i class="fab fa-js-square"></i>
								</span>
								<span class="px-1">
									<i class="fab fa-vuejs"></i>
								</span>
								<span class="px-1">
									<i class="fab fa-node-js"></i>
								</span>

							</div>
						</div>
					</div>

					<!-- SOCIAL MEDIA TEXT  AND LINKS-->
					<div id="" class="tile is-vertical has-text-right is-flex is-justify-content-flex-end">
						<span class="is-size-4 is-align-flex-start">
							<a href="#welcome">
								back to top
								<i class="fas fa-chevron-up"></i>
							</a>
						</span>
	
						<!-- SOCIAL MEDIA TEXT  -->
						<div class="pt-6">
							<p class="subtitle is-size-5 has-text-warning is-flex is-justify-content-flex-end">
								CHECK OUT MY
							</p>
							<p class="title is-size-3 has-text-white is-flex is-justify-content-flex-end">
								SOCIAL MEDIA
							</p>
						</div>

						<!-- SOCIAL MEDIA ICON LIST  -->
						<div
							class="column columns is-10 is-offset-2 py-5 is-flex is-justify-content-space-between is-align-self-flex-end">
							<a href="https://www.linkedin.com/in/josuedrivera/" target="_blank"
								class="btn contact-details">
								<i class="icon is-large fas fa-3x fab fa-linkedin"></i>
								<!-- LinkedIn -->
							</a>

							<a href="https://github.com/josuedrivera" target="_blank" class="btn contact-details">
								<i class="icon is-large fas fa-3x fab fa-github"></i>
								<!-- GitHub -->
							</a>

							<a id="profile-link" href="https://codepen.io/josuedrivera" target="_blank"
								class="btn contact-details">
								<i class="icon is-large fas fa-3x fab fa-codepen"></i>
								<!-- CodePen -->
							</a>

							<a id="profile-link" href="https://www.freecodecamp.org/josuedrivera" target="_blank"
								class="btn contact-details">
								<i class="icon is-large fas fa-3x fab fa-free-code-camp"></i>
								<!-- FreeCodeCamp -->
							</a>

							<a href="https://www.instagram.com/swaysauce/" target="_blank" class="btn contact-details">
								<i class="icon is-large fas fa-3x fab fa-instagram"></i>
								<!-- Instagram -->
							</a>

							<a href="https://www.facebook.com/worldgoneswayzee/" target="_blank"
								class="btn contact-details">
								<i class="icon is-large fas fa-3x fab fa-facebook-square"></i>
								<!-- Facebook -->
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- FOOTER W/COPYRIGHT AND YEAR  -->
			<footer class="card-footer has-background-black">
				<p class="card-footer-item">
					<span class="is-size-4">
						<span class="pl-6">
							<i class="far fa-copyright"></i>
							Josue Rivera 2022
						</span>
					</span>
				</p>

			</footer>
		</div>
	</section>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
  }
  
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

#email-div .title {
    margin: 0;
}
</style>
