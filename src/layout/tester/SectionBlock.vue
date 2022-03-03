<template>
	<section :id="mode" class="section hero is-fullheight has-background-black-ter py-6">
		
		<!-- section title here -->  
		<slot></slot>

		<div class="container columns is-centered py-4">
			<div class="tile is-ancestor box column columns has-background-primary-dark is-10">
				<div class="tile box has-background-black p-3">
					
					<!-- section card here -->  
					<slot>

					<!-- about me section here -->  
					<slot></slot>

					<!-- about me text app here -->  
					<slot></slot>

					</slot>
					
				</div>
			</div>
		</div>
	</section>
</template>








<script>
export default {
  name: 'HelloWorld',
  props: ['mode']
  
//   {
//     sectId: String
//   }
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
</style>


