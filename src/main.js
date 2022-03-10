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

app.mount('#app');