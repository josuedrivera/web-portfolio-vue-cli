<template>
  <!-- has-background-black-ter    -->
  <!-- <section id="contact-info" class="section hero is-fullheight columns has-background-success is-vcentered pt-6"> -->
  <section
    id="contact-info"
    class="hero is-fullheight columns has-background-black-ter pt-6"
  >
    <!-- <section id="contact-info"  class="
      section
      columns
      hero
      is-fullheight
      has-background-warning
      py-6
      is-vcentered
    "
  > -->
    <!-- <div
      class="
        columns
        column
        is-8
        my-0
        has-background-success has-text-right
        m-0
        p-0
      "
    >
      <h2 class="title is-size-1 has-background-info has-text-danger">
        MY PERSPECTIVE
      </h2>
    </div> -->

    <div class="columns column is-8 is-offset-2 my-0">
      <!-- <div class="columns column has-background-grey-black-ter is-flex is-justify-content-flex-end m-0 p-0"> -->
      <h2 class="title is-size-1 has-text-info">CONTACT INFO</h2>
      <h1>{{ msg }}</h1>
      <!-- </div> -->
    </div>

    <div id="" class="column is-10 is-offset-1 py-4">
      <div class="tile is-ancestor box has-background-black-ter">
        <div class="tile is-parent box has-background-info p-0">
          <div
            class="
              tile
              is-child
              box
              has-background-grey-darker has-text-info
            "
          >
            <p class="is-size-1 px-6 has-text-centered">
              Thanks for visiting my site.
            </p>
            <p class="is-size-3 px-6 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel
              atque molestias hic quia porro alias adipisci assumenda molestiae
              excepturi iusto, nobis officia reiciendis tempora laborum quod
              ipsa in inventore. Email me for work inquiries.
            </p>
            <!-- <p class="is-size-6 p-6">work inquiries</p> -->
          </div>
        </div>
      </div>
    </div>

    <div id="" class="card has-background-info">
      <div class="container card-content">
        <div class="columns column">
          <div class="tile is-vertical ">
            <div class="is-size-4 has-text-right">
              <a href="#hello-world" class="has-text-black">
                back to top
                <i class="fas fa-chevron-up"></i>
              </a>
            </div>

            <div id="email-div" class="has-text-left">
              <div class="is-size-5 has-text-info-dark">
                <i class="fas fa-paper-plane"></i>
                E-MAIL:
              </div>
              <span class="tooltip has-text-info-dark">
                <span
                  onclick="copyToClipboard('#myemail')"
                  onmouseout="outFunc()"
                >
                  <span class="subtitle has-text-white" id="myemail">
                    jdemarrivera@gmail.com
                  </span>
                  <i class="fas fa-copy has-text-white"></i>
                  <span
                    class="tooltiptext has-background-black has-text-info-dark"
                    id="myTooltip"
                    >Copy to clipboard</span
                  >
                </span>
              </span>
            </div>

            <div class="pt-6 has-text-right">
              <p class="subtitle is-size-5 has-text-info-dark">CHECK OUT MY</p>
              <p class="title is-size-3 has-text-white">SOCIAL MEDIA</p>

              <!-- SOCIAL MEDIA ICON LIST  -->
              <div class="ml-auto">
                <a
                  href="https://www.linkedin.com/in/josuedrivera/"
                  target="_blank"
                  class="btn contact-details"
                >
                  <i class="icon is-large fas fa-3x fab fa-linkedin"></i>
                  <!-- LinkedIn -->
                </a>

                <a
                  href="https://github.com/josuedrivera"
                  target="_blank"
                  class="btn contact-details"
                >
                  <i class="icon is-large fas fa-3x fab fa-github"></i>
                  <!-- GitHub -->
                </a>

                <a
                  id="profile-link"
                  href="https://codepen.io/josuedrivera"
                  target="_blank"
                  class="btn contact-details"
                >
                  <i class="icon is-large fas fa-3x fab fa-codepen"></i>
                  <!-- CodePen -->
                </a>

                <a
                  id="profile-link"
                  href="https://www.freecodecamp.org/josuedrivera"
                  target="_blank"
                  class="btn contact-details"
                >
                  <i class="icon is-large fas fa-3x fab fa-free-code-camp"></i>
                  <!-- FreeCodeCamp -->
                </a>

                <a
                  href="https://www.instagram.com/swaysauce/"
                  target="_blank"
                  class="btn contact-details"
                >
                  <i class="icon is-large fas fa-3x fab fa-instagram"></i>
                  <!-- Instagram -->
                </a>

                <a
                  href="https://www.facebook.com/worldgoneswayzee/"
                  target="_blank"
                  class="btn contact-details"
                >
                  <i class="icon is-large fas fa-3x fab fa-facebook-square"></i>
                  <!-- Facebook -->
                </a>
              </div>
            </div>

            <div id="credits-div" class="has-text-left">
              <!-- <p class="block is-flex is-align-content-center"></p> -->
              <span class="pr-4 has-background-grey">
                <a href="https://bulma.io" class="">
                  <img
                    src="https://bulma.io/images/made-with-bulma.png"
                    alt="Made with Bulma"
                    width="128"
                    height="24"
                  />
                </a>
              </span>

              <span class="">
                Video by:
                <a
                  href="https://instagram.com/freecreativestuff"
                  class=""
                >
                  <i class="fab fa-instagram"></i> Free Creative Stuff
                </a>
                via
                <a href="https://www.pexels.com/">Pexels.com</a>
              </span>

              <div class="has-text-white is-size-4">
                <span class=""> This website was made using: </span>

                <span class="">
                  <i class="fab fa-html5"></i>
                </span>
                <span class="">
                  <i class="fab fa-css3-alt"></i>
                </span>
                <span class="">
                  <i class="fab fa-js-square"></i>
                </span>
                <span class="">
                  <i class="fab fa-vuejs"></i>
                </span>
                <span class="">
                  <i class="fab fa-node-js"></i>
                </span>
              </div>
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
  name: "TheFooter",
  props: {
    msg: String,
  },
};
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
