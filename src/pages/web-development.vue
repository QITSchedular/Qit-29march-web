<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li>
          <q-icon name="ion-logo-angular" size="xl" class="absolute-center" color="red" style="opacity: 0.7" />
        </li>
        <li>
          <q-icon name="ion-logo-css3" size="xl" class="absolute-center" color="dark" style="opacity: 0.7" />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <q-icon name="ion-logo-wordpress" size="xl" class="absolute-center" color="dark" style="opacity: 0.7" />
        </li>
        <li>
          <q-icon name="ion-logo-python" size="xl" class="absolute-center" color="yellow" style="opacity: 0.7" />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-icon name="ion-logo-nodejs" size="xl" class="absolute-center" color="yellow" style="opacity: 0.7" />
        </li>
      </ul>
      <div class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn">
        Website Development
      </div>

      <q-breadcrumbs class="q-pt-md text-blue-grey-11 animated fadeIn" active-color="white">
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Website Development" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Web-Developent</p>
          <p class="text-subtitle1 text-blue-grey-9"  style="font-family:  system-ui;">
            Looking for Website Design with creative ideas and Suggestions? You are in the right place. Where our Field
            Experienced Researcher Come up with Unique and Creative Web templates, names and ideas. That attract Clients &
            your potential customer remembers your name.<br />

            We are the only software development company in Surat that passionately develop the complete need of a
            customized website/web application, tested extensively to give a glitch-free user experience.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in-up">
          <q-img src="~assets/website.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-img src="~assets/website.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl">
          <p class="text-h6 text-blue-grey-7">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Web-Developent</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            Looking for Website Design with creative ideas and Suggestions? You are in the right place. Where our Field
            Experienced Researcher Come up with Unique and Creative Web templates, names and ideas. That attract Clients &
            your potential customer remembers your name.<br />
            We are the only software development company in Surat that passionately develop the complete need of a
            customized website/web application, tested extensively to give a glitch-free user experience.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2 q-pt-xl q-pb-sm">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Explore the Web Solution</p>
        <p class="text-blue-grey-9 text-subtitle1 q-mx-xl" v-bind:class="{ 'q-px-xl': mobile, 'text-center': mobile }"  style="font-family:  system-ui;">
          Your website represents your brand. And a site that’s slow, unreliable, or hard to use is a website that
          customers and prospects will avoid. Quantum's Web Solution provides the most reliable and robust development in
          the Web world. Quantum has a team of experts having years of experience in web development and frameworks like
          angular, react, vue, laravel and many more.
        </p>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly">
        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md row justify-center items-center" data-aos="fade-left">
          <q-card-section>
            <q-img src="~assets/angular.png" basic style="width: 100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md row justify-center items-center" data-aos="fade-left">
          <q-card-section>
            <q-img src="~assets/react.png" basic style="width: 100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md row justify-center items-center" data-aos="zoom-in">
          <q-card-section>
            <q-img src="~assets/vue.png" basic style="width: 100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md row justify-center items-center" data-aos="fade-right">
          <q-card-section>
            <q-img src="~assets/laravel.png" basic style="width: 100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md row justify-center items-center" data-aos="fade-right">
          <q-card-section>
            <q-img src="~assets/django.png" basic style="width: 80px" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pt-xl">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-bold text-h4 text-primary">
          Various Solution(s), Your Choice
        </p>
        <p class="text-blue-grey-9 text-subtitle1 q-mx-xl" v-bind:class="{ 'q-px-xl': mobile, 'text-center': mobile }"  style="font-family:  system-ui;">
          Our Designers with a great sense of UI and UX, Design website that meets consumer needs, empowers the
          generation’s brand respect and leads business growth and expansion.
        </p>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly"  style="font-family:  system-ui;">
        <div class="borderless" data-aos="zoom-in">
          <q-icon name="fas fa-palette" size="45px" class="q-pa-sm" color="secondary" />
          <p class="text-h6 text-primary">Web Design Service</p>
          <p class="text-blue-grey-9 text-subtitle1">
            Quantum offer the best website design service to its client. When we are designing websites for clients we are
            very much client oriented. As we are a website design company, we focus on our client's requirements to fulfil
            the optimal level of satisfaction. In this regards our motto is happy client, healthy business.
          </p>
        </div>
        <div class="borderless" data-aos="zoom-in">
          <q-icon name="fab fa-searchengin" size="45px" class="q-pa-sm" color="secondary" />
          <p class="text-h6 text-primary">SEO Service Provider</p>
          <p class="text-blue-grey-9 text-subtitle1">
            We are providing SEO services both for local and international clients. By doing SEO, companies can pull the
            customer with lesser effort. With appropriate methods and keywords, we successfully provide SEO services to
            our valued clients. Best SEO Service Company like us, you can get better and more clients with nominal effort.
          </p>
        </div>
        <div class="borderless" data-aos="zoom-in">
          <q-icon name="fas fa-cart-arrow-down" size="45px" class="q-pa-sm" color="secondary" />
          <p class="text-h6 text-primary">E-Commerce Website</p>
          <p class="text-blue-grey-9 text-subtitle1">
            We also provide eCommerce website development services. Currently, we have more than a hundred Ecommerce
            clients who are very much satisfied with us for our unique services and support. Nowadays customers are
            willing to buy goods and services online and we provide Ecommerce website development for companies to work
            efficiently.
          </p>
        </div>
        <div class="borderless" data-aos="zoom-in">
          <q-icon name="fas fa-seedling" size="45px" class="q-pa-sm" color="secondary" />
          <p class="text-h6 text-primary">Digital Growth Hacks</p>
          <p class="text-blue-grey-9 text-subtitle1">
            In digital advertising services, we are providing facebook and google advertisements. Nowadays companies reach
            more clients by using digital advertising. Digital advertising open-up new opportunities for companies. With
            the help of a digital advertising company like us, you can successfully use its promotion mix and attract more
            clients.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        <span class="q-px-xl">For More information, Book Your Free Demo</span>
        <q-btn color="primary" icon="call" class="q-ma-md" outline rounded label="Contact Us" to="/contact-us" />
      </p>

      <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        For More information, Book Your Free Demo
        <br /><br />
        <q-btn color="primary" icon="call" outline rounded label="Contact Us" to="/contact-us" />
      </p>
    </div>
  </div>
</template>

<script>
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
        description: 'Looking for Website Design with creative ideas and Suggestion? You are in the right Place. Where our Field Experienced Researcher Come up with Unique and Creative Web template, names and ideas.',
        title: 'Quantum | Web Development',
        keywords: 'Website Dvelopment, Angular Development, web app development,react dvelopment,seo,digital marketing, wordpress development'
      }
    };
  },
  meta,
  created() {
    if (this.$q.screen.lt.sm) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  },
};
</script>

<style scoped>
.my-cardc {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.my-cardc:hover {
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14), 0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;
}

.borderless {
  max-width: 250px;
}

.background {
  background: linear-gradient(132deg, #0652c5, #d4418e);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* position the div in center */
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;

  width: 60px;
  height: 60px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
