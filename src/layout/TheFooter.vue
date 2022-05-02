<template>
  <section id="contact-info" class="hero is-fullheight columns bgfooter">
    <div class="columns column container is-8 is-offset-2">
      <h2 class="title is-size-1 has-text-info pt-6">CONTACT INFO</h2>
    </div>

    <div class="m-3 hero-body">
      <div class="column is-8 is-offset-2">
        <div class="has-background-info box">
          <div
            class="tile is-child box has-background-grey-darker has-text-info"
          >
            <p class="is-size-1 px-6 has-text-centered has-text-weight-bold">
              Thanks for visiting my site.
            </p>
            <p class="is-size-3 px-6 py-3 has-text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel
              atque molestias hic quia porro alias adipisci assumenda molestiae
              excepturi iusto, nobis officia reiciendis tempora laborum quod
              ipsa in inventore. Email me for work inquiries.
            </p>
            <!-- <p class="is-size-6 p-6">work inquiries</p> -->
            <h3>{{ msg }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div id="" class="card has-background-primary">
      <div class="has-background-primary column is-8 is-offset-2">
        <div class="card-content">
          <div class="tile is-vertical">
            <div class="is-size-3 has-text-right">
              <a href="#hello-world" class="has-text-info">
                back to top
                <i class="fas fa-chevron-up"></i>
              </a>
            </div>

            <!-- <div id="email-div" class="has-text-left">
              <div class="subtitle  has-text-info">
                <i class="fas fa-paper-plane"></i>
                E-MAIL:
              </div>
              <span class="tooltip has-text-info">
                <span
                  onclick="copyToClipboard('#myemail')"
                  onmouseout="outFunc()"
                >
                  <span class="title has-text-white" id="myemail">
                    jdemarrivera@gmail.com
                  </span>
                  <i class="fas fa-copy has-text-white"></i>
                  <span
                    class="tooltiptext has-background-black has-text-info"
                    id="myTooltip"
                    >Copy to clipboard</span
                  >
                </span>
              </span>
            </div> -->

            <div class="py-6 has-text-right">
              <span class="subtitle is-size-3 has-text-light"
                >CHECK OUT MY
              </span>
              <span class="title is-size-2 has-text-white">SOCIAL MEDIA</span>

              <!-- SOCIAL MEDIA ICON LIST  -->
              <div class="ml-auto pt-4">
                <a
                  href="https://www.linkedin.com/in/josuedrivera/"
                  target="_blank"
                  class="btn contact-details px-3 has-text-white"
                >
                  <i class="icon is-large fas fa-3x fab fa-linkedin"></i>
                  <!-- LinkedIn -->
                </a>

                <a
                  href="https://github.com/josuedrivera"
                  target="_blank"
                  class="btn contact-details pl-3 has-text-white"
                >
                  <i class="icon is-large fas fa-3x fab fa-github"></i>
                  <!-- GitHub -->
                </a>

                <a
                  id="profile-link"
                  href="https://codepen.io/josuedrivera"
                  target="_blank"
                  class="btn contact-details pl-3 has-text-white"
                >
                  <i class="icon is-large fas fa-3x fab fa-codepen"></i>
                  <!-- CodePen -->
                </a>

                <a
                  id="profile-link"
                  href="https://www.freecodecamp.org/josuedrivera"
                  target="_blank"
                  class="btn contact-details pl-3 has-text-white"
                >
                  <i class="icon is-large fas fa-3x fab fa-free-code-camp"></i>
                  <!-- FreeCodeCamp -->
                </a>

                <a
                  href="https://www.instagram.com/swaysauce/"
                  target="_blank"
                  class="btn contact-details pl-3 has-text-white"
                >
                  <i class="icon is-large fas fa-3x fab fa-instagram"></i>
                  <!-- Instagram -->
                </a>

                <a
                  href="https://www.facebook.com/worldgoneswayzee/"
                  target="_blank"
                  class="btn contact-details pl-3 has-text-white"
                >
                  <i class="icon is-large fas fa-3x fab fa-facebook-square"></i>
                  <!-- Facebook -->
                </a>
              </div>
            </div>

            <div id="credits-div" class="has-text-left">
              <!-- <p class="block is-flex is-align-content-center"></p> -->
              <span class="">
                <a href="https://bulma.io" class="">
                  <img
                    src="https://bulma.io/images/made-with-bulma.png"
                    alt="Made with Bulma"
                    width="128"
                    height="24"
                  />
                </a>
              </span>

              <div class="has-text-white is-size-3">
                <span class=""> This website was made using: </span>

                <span class="pl-3">
                  <i class="fab fa-html5"></i>
                </span>
                <span class="pl-3">
                  <i class="fab fa-css3-alt"></i>
                </span>
                <span class="pl-3">
                  <i class="fab fa-js-square"></i>
                </span>
                <span class="pl-3">
                  <i class="fab fa-vuejs"></i>
                </span>
                <span class="pl-3">
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
          <span class="is-size-3">
            <span class="pl-6 has-text-primary">
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
.bgfooter {
  background: url("https://res.cloudinary.com/dfuxcsi7w/image/upload/v1651382863/Photos-001/carl-nenzen-loven-qfJeSOeFed0-unsplash_lickai.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  /* z-index: -1; */
  opacity: 0.95;
}

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
