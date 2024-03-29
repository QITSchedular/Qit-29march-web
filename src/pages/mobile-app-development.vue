<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li>
          <q-icon
            name="ion-logo-android"
            size="xl"
            class="absolute-center"
            color="green-13"
            style="opacity: 0.7"
          />
        </li>
        <li>
          <q-icon
            name="fas fa-mobile-alt"
            size="xl"
            class="absolute-center"
            color="light-green-11"
            style="opacity: 0.7"
          />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <q-icon
            name="fab fa-apple"
            size="xl"
            class="absolute-center"
            color="dark"
            style="opacity: 0.7"
          />
        </li>
        <li>
          <q-icon
            name="fab fa-app-store"
            size="xl"
            class="absolute-center"
            color="white"
            style="opacity: 0.7"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-icon
            name="phonelink_setup "
            size="xl"
            class="absolute-center"
            color="yellow-12"
            style="opacity: 0.7"
          />
        </li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        Mobile App Development
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Mobile App Development" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Mobile App Development</p>
          <p class="text-subtitle1 text-blue-grey-9">
            We do create or develop the best and easily accessible mobile
            applications based on the end user’s requirements. Our experts
            develop both native and hybrid applications to reach the client’s
            requirements. The application we develop will stand out and make a
            name for itself in the market. Our team will design the applications
            in such a way as to prove the best experience to the user.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in-up">
          <q-img src="~assets/mobile.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-img src="~assets/mobile.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Mobile App Development</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            We do create or develop the best and easily accessible mobile
            applications based on the end user’s requirements. Our experts
            develop both native and hybrid applications to reach the client’s
            requirements. The application we develop will stand out and make a
            name for itself in the market. Our team will design the applications
            in such a way as to prove the best experience to the user.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2 q-pt-xl q-pb-sm">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Why Chose Us ?</p>
        <p
          class="text-blue-grey-9 text-subtitle1 q-mx-xl"
          v-bind:class="{ 'q-px-xl': mobile, 'text-center': mobile }" style="font-family:  system-ui;"
        >
          From developing a Mobile app for distinct industries to providing a
          seamless user experience, there are a plethora of reasons that you can
          find to hire us as your development partner. With a primary focus on
          process-driven development, we offer exclusive benefits to all our
          discerning clients.
        </p>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly">
        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md"
          data-aos="fade-right"
        >
          <q-card-section class="text-center">
            <q-icon
              name="far fa-clock"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary" style="font-family:  system-ui;">
            Hourly Rates
          </q-card-section>
          <q-card-section class="text-justify">
            If you think your work scope is fixed and well laid out, then we can
            work for a fixed price and timeline.
          </q-card-section>
        </q-card>

        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md active"
          data-aos="zoom-in"
        >
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-user-friends"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Efficient Team
          </q-card-section>
          <q-card-section class="text-justify">
            We are proud to announce that we have created a pool of the best
            Mobile app developers.
          </q-card-section>
        </q-card>

        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md"
          data-aos="fade-left"
        >
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-paper-plane"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Open Communication
          </q-card-section>
          <q-card-section class="text-justify">
            We really want our clients to drop us their requirements in writing
            through email.
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pt-xl">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-bold text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
          We Develop Mobile App On Various Platform(s)
        </p>
        <p
          class="text-blue-grey-9 text-subtitle1 q-mx-xl"
          v-bind:class="{ 'q-px-xl': mobile, 'text-center': mobile }"
        >
          Our developers have over decade-long expertise in building mobile
          solutions that meet consumer needs, empower the generation’s brand
          respect, and lead business growth and expansion.
        </p>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly" style="font-family:  system-ui;">
        <div class="borderless" data-aos="zoom-in">
          <q-icon
            name="fab fa-uncharted"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
          <p class="text-h6 text-primary">Native Mobile App Development</p>
          <p class="text-blue-grey-9 text-subtitle1">
            Our mobile app developers can build high-quality native apps for
            both Android and iOS systems aligned with your business and security
            requirements.
          </p>
        </div>
        <div class="borderless" data-aos="zoom-in">
          <q-icon
            name="fab fa-mixer"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
          <p class="text-h6 text-primary">Hybrid Mobile App Development</p>
          <p class="text-blue-grey-9 text-subtitle1">
            Cross-platform apps that can work in different environments thanks
            to a unique blend of native and web app technologies.
          </p>
        </div>
        <div class="borderless" data-aos="zoom-in">
          <q-icon
            name="phonelink"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
          <p class="text-h6 text-primary">Progressive Web App Development</p>
          <p class="text-blue-grey-9 text-subtitle1">
            With Progressive Web Apps, we deliver native-like capabilities and
            installability while reaching anyone, anywhere, on any device with a
            single codebase.
          </p>
        </div>
        <div class="borderless" data-aos="zoom-in">
          <q-icon name="watch" size="45px" class="q-pa-sm" color="secondary" />
          <p class="text-h6 text-primary">Wearables and Embedded Software</p>
          <p class="text-blue-grey-9 text-subtitle1" style="font-family:  system-ui;">
            We can create companion apps for a number of wearable devices, and
            integrate them with smart devices or proprietary peripherals.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        <span class="q-px-xl">For More information, Book Your Free Demo</span>
        <q-btn
          color="primary"
          icon="call"
          class="q-ma-md"
          outline
          rounded
          label="Contact Us"
          to="/contact-us"
        />
      </p>

      <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        For More information, Book Your Free Demo
        <br /><br />
        <q-btn
          color="primary"
          icon="call"
          outline
          rounded
          label="Contact Us"
          to="/contact-us"
        />
      </p>
    </div>
  </div>
</template>

<script>
import meta from "../utils/meta.js";

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
        description:
          "We do create or develop the best and easily accessible mobile applications based on the end user’s requirement. Our experts develop both native and hybrid applications to reach the client’s requirement",
        title: "Quantum | Mobile APP Development",
        keywords:
          "Mobile app development,hybride app, react mobile app, ios app,android app,mobile app",
      },
    };
  },
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
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  border-top-color: #3663a8;
  border-top-width: 5px;
  border-top-style: solid;
  border-bottom-color: #ff8b0f;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.my-cardc:hover {
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14),
    0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;
  border-top-style: solid;
  border-top-color: #ff8b0f;
  border-top-width: 5px;
  border-bottom-color: #3663a8;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.borderless {
  max-width: 250px;
}

.background {
  background: linear-gradient(132deg, #051937, #004d7a, #008793, #00bf72);
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
