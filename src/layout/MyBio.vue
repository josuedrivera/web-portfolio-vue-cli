<template>
  <section
    id="about-me"
    class="section hero is-fullheight has-background-black-ter py-6 is-flex"
  >
    <div class="columns column is-8 is-offset-2 my-0">
        <h1 class="is-size-1 has-text-white">{{ msg }}</h1>
		<!-- SectionTitle here -->
    </div>



	<div class="container columns is-centered py-4 has-background-success">
      <div
        class="
          tile
          is-ancestor
          box
          column
          columns
          has-background-info
          is-10
        "
      >
        <div class="tile box has-background-black p-3 has-background-warning">
          <div class="tile is-parent is-vertical is-4 has-text-centered p-0 has-background-danger">
            <!-- bio article here -->
          </div>
          <div class="tile is-vertical has-background-primary p-4">
            <div
              class="is-12 is-flex is-flex-direction-column has-background-info"
            >
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
				<!-- BioDisplay here -->
          </div>
        </div>
      </div>
      <!-- closes container div  -->
    </div>

    
  </section>
</template>

<script>
export default {
  name: "MyBio",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headshot {
  max-width: 75%;
  margin: 0 auto;
  padding: 1.2rem 0;
}

#about-me .container:hover .columns .column {
  animation: flip-customer 1s ease-out forwards;
}
</style>
