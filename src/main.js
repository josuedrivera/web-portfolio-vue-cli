import { createApp } from 'vue';

import App from './App.vue';

import HelloWorld from './layout/HelloWorld.vue';
import MyBio from './layout/MyBio.vue';
import MyVoice from './layout/MyVoice.vue';
import MyWork from './layout/MyWork.vue';
import TheFooter from './layout/TheFooter.vue';

// import SectionShell from './UI/section/SectionShell.vue';
// import TheVideo from './UI/section/TheVideo.vue';
// import TheVideo from './UI/section/TheHeadline.vue';
// createApp(App).mount('#app')





// const one = {
// 	template: `
// 		<div class="has-text-grey-light has-text-center px-6">
// 			<h3 class="is-size-1 has-text-primary-dark">Digital Drumkit</h3>
// 			<img class="img-fluid" src="https://lh3.googleusercontent.com/eH2vp1F--cvmAhWvdbAniMQjx0Tae4LMSY1Ca13qwi9rwNH1lF-T7asHm2pVLgsm-vhjWFR_BmPuyiTJlOfIK_4vutZeQNGU19ZD7YVQ3b9MyLgXCCfbkyZpy4yDFFXJG3bpUuulcnUCCeKxG3HJFPBNK6FSELxygoKUo1BdpKvuxUq29Hw63F_OpzpASGB5XCIFaCHIoV_SY9Xzr2HPRvMzrax1MafQfTpeILRXghD46pmo_dY4lwb_d6lnULn-kwldRvj4BBEp8WgZPoUwqlKuRb0S5O56Xh0OZcU40MFVh7WiAMZE7mAE41hmUC01X_eW001NfCCk5FMk0PoGiMWO7sFTsA-dJl61UTTlC2Jy0k3ZPSzhBa31k9Y2hCiZEs7q3G7M_qcDQwM7GfGSb5dbeBokQk9wdmiAuAeIaOwz3aXOZ2HD51v7IbmKEvge1W6MssLjsPEQBpsjnVlQzTvUY5FNtqUksA-gwv_a5gSNJOKd00GqCUysNp-c-SYDq4v6QY_s4-3hit8SPmA-U35N5IiObcz4R62ZWFF9sA_4najaxZTzqqC1ZCpcCuLeInDdtwYvOaCKDin79V-nafXHVXUGHAna2dNRRcei_-BZnhiM0h3z8asIA5zEC_D_uV1w8fhJm4FEzNsFhHTcj60h4gcXq78XC7_mk1BQzo4oG_QslWjJ0Q0eOl3XQtLYUZ747x8T4ALEcd5ESTjGB9_C=w1437-h789-no?authuser=0" alt="an oil painting of a Muni bus">
//       <p class="has-text-centered has-background-black-ter py-4">
//       This is a simple drumkit simulator I made using JavaScript and sleek design.
//       </p>
// 		</div>
// 	`
// }
// const two = {
// 	template: `
// 		<div class="is-size-1 has-text-danger has-text-center px-6">
// 			<h3>Pusheen Zodiac</h3>
// 			<img class="img-fluid" src="https://lh3.googleusercontent.com/5KcEINLtrG81XqRFOoIEnh6PC4sWKmbRNeSU7gCSqnkU4-echrMGHI63OBtRZHqB2wXLcPN95PYgW_3rXsLmsH8WyGe_czqYnx8bEWAOHi5NbKIRZfGn6j4pid8zI7psadjnWCtqzn65XhPDnky2L6Gsr2ZnmPCymPJMXRRF79L_dC3sCJy8bs9r06ANX3Vph-UTw8ipM2C772Cy2PX78w3Zd-fHFpiHyf06fep5gRN656ZH37BGIN87ZJBGl3vPmlZb74MdV2yXxhqcQh7q4CVJhC9gazhSwuQaESLUzUVenYNFE_qsiD-9B1z2aczpRzcqNMbACFnkPYxMKKBg2WaAoF1yf2fa5wu1S9SUIKxqefUC0YPixedbzu6LRFUWKr6yner9vTDIFvNwVByobmyEEIOLVnOY5n8PuP_cXB-EsKHB5uWVuX1qHl4RsUzyHFYco6DCMGYUdMUhHgGGLdL663NghRDC8GP2QOfUczaO33knqpfvuBq93wvxYUb0pq-kN5OjzXWLTuJZ2mCMoPNRPyc6PoPo3Uq4pB058U1LZGsgfYjJExGWTK7YWhERz3Dd4rdrEiJe0d1OSaFIQ-YljFU8AN_w1ggp_3-xjpRJesEvzxg3ALhiIiBhog9q4KC_TDOwCIOlSrpNAD-0zyDuqIH23gj8vjWN0vJbAfbLGYQpbipgk2MSXWOV7MZRhs9XrmXHlkVBN1dtFQltnyKo=w1440-h789-no?authuser=0" alt="A mixed media image of SF and a heart">
// 		</div>
// 	`
// }
// const three = {
// 	template: `
// 		<div class="is-size-1 has-text-danger has-text-center px-6">
// 			<h3>Natours</h3>
// 			<img class="img-fluid" src="https://lh3.googleusercontent.com/vQg2v4S0EdwGRr4-71_4cEamlveUJ1w2pBCxg_GYtcUDCMGwN34Zi38ngvm4LUIiSMiWh20_UVJNFbqYVu3Ev_XaDEWAL1WhT0NVtN2AtMXl1KYLu_z2VSMMf1kHDVLG9bXRrPZnX9cVcalGO1BqzR_u1Yzdvu32uUfw44kFg0w9rVflngVRxF-AAZu3d1tArWLBcUpNQByq-MtEYd0ncaxDBLrCOj2yQj7Ldw8npt-DivVtdk3wB6EQ8IPMmegxypc41RqjfU9gNLTjU00_aDN_JpccdP2G3wIwbuLH8EX-StOhlE4YKiJfyRKoxQXmruHZEK6gPJcr1R7jtyE6B5CANA7ix8e8vfKW--O7QFDGlnEA-4Tso1gc2UWOd4hgpnh9MFt6XhVGKYpqUqiktd_j5Q-07_AqUXxqG1LzOB0_JUFdtsJ3Y7aJvBhzJH0z5jOytPRp82e2_2ZucpiwSqQFueaeEQQKD1GuLVmopiqGOWRSENDESGTQpu39jzTj5jRFBItWjEmbgqlcnrWOWsIamyhFR0PecmLIZSz41Tc-b936GFJguovsvtS4vXpFQ9QKiYvutBTrGk7RWmsjFy97tVqJz7OVrRi-PVJcL--8UtVn78WLBh4LRMhKq0mP66xoKbdPYMMuw8eU3BANvRGVhsrEOGm36hcUHLA9uPOyTtb9c7uoPMFII179BY-A8pyWU4HwtweOvumEHSIQN0Tr=w1439-h789-no?authuser=0" alt="A watercolor painting of a woman holding rosemary">
// 		</div>
// 	`
// }



// const headshot = {
// 	template: `
  
// 	`
// }
// const aboutMe = {
// 	template: `
//     <div class="container is-fluid has-background-grey-darker has-text-danger py-4 is-flex is-flex-direction-column is-align-items-space-between">
//         <p class="title block has-text-primary pb-3">Ars Longa Vita Brevis</p>
//         <p class="subtitle block has-text-primary-dark pb-0"> Hello World! My name is 
//         <span class="is-size-4 has-text-weight-bold">Josue</span>. 
//         If you can't say that, <a class="has-text-primary has-text-weight-bold" href="https://www.google.com/search?q=google+pronounce+josue&rlz=1C5CHFA_enUS728US728&oq=google+pronounce+josue&aqs=chrome..69i57j0i333j69i64.5107j1j7&sourceid=chrome&ie=UTF-8"> try this</a> 
//         then amuse me *sarcasm*, or just call me Sway. I am a 
//         <span class="has-text-weight-bold"> Front-End Developer</span> from the beautiful 
//         <span class="has-text-weight-bold"> Bay Area, California</span>.</p>
//         <p class="block has-text-primary-dark"> As a Web Developer, I enjoy the challenge for creative solutions, and the demand for curiosity, critical thinking, and efficient code required to produce content worthy of an audience. I am passionate about building as well as deconstructing 'things' while learning throughout the whole process. <br><br>
        
//         I am also familiar with many aspects of Back-End Development, UX/UI, and Content Management Systems. I am currently utilizing these skills with the ultimate goal of joining a team that enjoys solving difficult problems, shares in my appreciation for direct, clear, and concise communication and open-minded feedback.</p>
//         <div class="">
//         <p class="block is-size-6 has-text-right"> 
//         learn more about me 
//         <i class="fas fa-angle-down welcome-down p-0 m-0"></i>	
//         </p>
//         </div>
//     </div>
// 	`
// }
// const hardSkills = {
// 	template: `
//     <div class="container is-fluid has-background-grey-darker has-text-danger py-4">
//         <p class="title block has-text-primary">Hard Skills</p>
//         <span class="block subtitle has-text-primary has-text-weight-bold"> Languages:  <br></span>
//         <div class="block is-flex is-flex-direction-row">
//         <p class="subtitle block has-text-primary-dark">
//         <i class="fab fa-html5 is-size-1 mt-3 mx-3"></i> |HTML5 
//         <i class="fab fa-css3-alt is-size-1 mt-3 mx-3"></i> |CSS3 
//         <i class="fab fa-js-square is-size-1 mt-3 mx-3"></i> |JAVASCRIPT (ES5/ES6)
//         </p>
//         </div>
        
//         <span class="block subtitle has-text-primary has-text-weight-bold"> Applications:  <br></span>
//         <p class="subtitle block has-text-primary-dark">
//         <span class="">WordPress, SquareSpace, SharePoint, Shopify <br></span>
//         <span class="">SCSS/SASS, Bootstrap,  Bulma, Semantic UI <br></span>
//         <span class="">Vue.js, jQuery, Node.js, NPM +a variety of node packages <br></span>
//         </p>
//         <p><span class="has-text-weight-bold"> Design Process & Theory</span> | Responsive Design, Media Queries, Version Control, Github, AJAX, JSON, APIs, RESTful Routes, CSS Naming Convention, Cross Browser Development, Browser Dev Tools, Testing/Debugging, Command Line... </p><br>
//         <ul class="block is-size-7"> 
//             <span class="has-text-weight-bold"> Also experienced with: </span>
//             <li>Adobe XD, Adobe CC(Illustrator, Photoshop, InDesign)</li>
//             <li>MS Suite, Google Suite (including Apps Script)</li>
//             <li>Express.js, passport.js, and various Node.js packages</li>
//             <li>JIRA - Issue and Project Tracking Software, others, and still eagerly learning....</li>
//         </ul>				
//     </div>
// 	`
// }
// const softSkills = {
// 	template: `
//     <div class="container is-fluid has-background-grey-darker has-text-danger py-4">
//         <p class="title block has-text-primary pb-3">Soft Skills</p>
        
//         <p class="subtitle block has-text-primary-dark pb-2">
//           As introduced by The 4 Agreements, I subscribe to the idea that all humans are artists and life is our canvas. Seeing the world through this filter, I am excited and intrigued by others' creations. I respect their style and encourage their best because life has shown me that when people feel safe, happy, and motivated, awesome things are created!
//         </p>
        
//         <ul class="block has-text-right"> <span class="is-size-4 has-text-weight-bold"> Core Competencies: </span>
//             <li> Naturally Creative • Conceptual/Critical Thinker and Tinkerer </li>
//             <li> Adaptable • Solution Oriented • Problem Solver w/a Drive for Efficiency</li>
//             <li> Embraces Teamwork • Empathic and Open Minded • Empowering of Others </li>
//             <li> Accountable & Approachable • Ability To Take Criticism • Learns From Mistakes </li>
//             <li> Interpersonal Awareness • Willingness to Grow • Self-Starter/Self-Motivated </li>
//             <li> Excellent Written and Verbal Communication Skills and ability to follow process</li>
//         </ul>  
//         <p class="has-text-primary has-text-centered is-size-7">thnx for coming to my TedTalk, check out my --blog in progress--</p>
//     </div>
// 	`
// }
// const spaceMan = {
//   template: `
//   <div class="has-text-left m-0 has-background-black-ter rotating-text-box">
//     <!-- ROTATING TEXT -->
//     <div class="rotating-text has-background-black-ter m-0 p-0">
    
//       <div class=" is-inline-block">
//         <h2 class="title is-size-1 has-text-warning">SOME OF MY FAVORITE THINGS:</h2>
//       </div>
   
//       <div class=" is-inline-block">
//         <p class="">
//           <span class="word alizarin">tacos.</span>
//           <span class="word wisteria">football.</span>
//           <span class="word peter-river">napping.</span>
//           <span class="word emerald">hanging_out.</span>
//           <span class="word sun-flower">free_stuff.</span>
//         </p>
//       </div>
//     </div>
//   </div>
//   `
// }

// const router = new VueRouter({
// 	routes: [
// 		{
// 			path: '/',
// 			component: headshot
// 		},
// 		{
// 			path: '/aboutMe',
// 			component: aboutMe
// 		},
// 		{
// 			path: '/hardSkills',
// 			component: hardSkills

// 		},
// 		{
// 			path: '/softSkills',
// 			component: softSkills

// 		},
//     {
// 			path: '/spaceMan',
// 			component: spaceMan

// 		},
// 		{
// 			path: '/one',
// 			component: one
// 		},
// 		{
// 			path: '/two',
// 			component: two

// 		},
// 		{
// 			path: '/three',
// 			component: three

// 		}
// 	]
// })






























const app = createApp(App)

app.component('hello-world', HelloWorld);
app.component('my-bio', MyBio);
app.component('my-voice', MyVoice);
app.component('my-work', MyWork);
app.component('the-footer', TheFooter);
// app.component('section-shell', SectionShell);
// app.component('the-video', TheVideo);
// app.component('the-headline', TheHeadline);
// app.component('base-card', BaseCard);
// app.component('base-button', BaseButton);
// app.component('base-button', BaseButton);

app.mount('#app');





