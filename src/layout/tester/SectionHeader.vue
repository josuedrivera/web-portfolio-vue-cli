<template>
	
	<div class="columns column is-8 is-offset-2 my-0">
			<div class="columns column m-0 p-0 has-background-black-ter">
				<h2 class="title is-size-1 has-text-primary-dark">{{ sectionTitle }}</h2>
			</div>
	</div>
	
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    sectionTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>


