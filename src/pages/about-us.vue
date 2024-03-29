<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none"  id="main_ul">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        About Quantum
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="About Us" />
      </q-breadcrumbs>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-my-xl"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui"
    >
      <p>
        Quantum IT solution is a surat leading software development firm across Gujarat. When you choose to go with Quantum, you are choosing to take full control of the direction your business is headed – regardless of economic conditions. The choice to work with Quantum ensures you have the right partner to help guide you through this process. This will give you peace of mind, reducing project risks by having a highly experienced partner with practical project plans and most importantly – open and transparent communication.
      </p>
      <p>
        We also provide 100% optimal solutions in all industries. With our real-time consultant’s expertise and tailor-made solution, you can meet your goal objectives whether you are an industrialist, start-up Owner, or a working professional.
      </p>
    </div>
    <div class="q-pb-md" v-bind:class="{ 'q-px-xl': mobile }">
      <p class="text-justify q-mx-xl text-h5 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Vision</p>
      <p class="q-mx-xl text-subtitle1 text-justify text-blue-grey-9" style="font-family:  system-ui">
        We expect the exceptional and will continuously evolve to reach greater heights. To enable every business establishment, regardless of size, to access the power of IT to grow their business efficiently and profitably.
      </p>
      <p class="text-justify q-mx-xl text-h5 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Mission</p>
      <p class="q-mx-xl text-subtitle1 text-justify text-blue-grey-9" style="font-family:  system-ui">
        Deliver customer satisfaction by ensuring the enterprise application products and services are robust, cost-effective, and time-bound.
      </p>
    </div>

    <div class="bg-grey-2 q-pb-md">
      <p class="text-center text-h4 q-pt-xl text-primary q-mx-md" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        What Services We Provide
      </p>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly" style="font-family:  system-ui">
        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md" data-aos="fade-right">
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-user-shield"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Business One Implement
          </q-card-section>
          <q-card-section class="text-justify">
            SAP Business One, covers the typical functions of a business organization. The most widely used modules are Financials, Sales – A/R, Purchasing A/P, Banking and Inventory.
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md" data-aos="zoom-in">
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-user-shield"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            S/4 HANA Implement
          </q-card-section>
          <q-card-section class="text-justify">
            The offering is an Enterprise Resource Planning software package meant to cover all day-to-day processes of an enterprise (for example, order-to-cash, procure-to-pay) and core capabilities.
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md" data-aos="fade-left">
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-user-shield"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            SAP ADD-Ons
          </q-card-section>
          <q-card-section class="text-justify">
            Add-on products expand SAP Business One by adding depth or breadth to the base product. add-ons are developed by experts in their field and are then tested to work with the application.
          </q-card-section>
        </q-card>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly" >
        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md" data-aos="fade-right">
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-user-shield"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            SAP services
          </q-card-section>
          <q-card-section class="text-justify">
            An SAP consulting company can assist you to meet the challenge and change your company with the latest tools, that can bring brilliance to your business.
          </q-card-section>
        </q-card>

        <q-card class="my-cardc q-my-md text-blue-grey-9 q-pa-md" data-aos="fade-left">
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-user-shield"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            IT development
          </q-card-section>
          <q-card-section class="text-justify">
            From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, quantum provides everything under one roof.
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="">
      <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        <span class="q-px-xl">Contact us for more information</span>
        <q-btn
          color="primary"
          class="q-ma-md"
          icon="call"
          outline
          rounded
          label="Contact Us"
          to="/contact-us"
        />
      </p>

      <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none">
        contact us for more information
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
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'Quantum IT solution is surat leading software development firm across the Gujarat. We offer solutionn in SAP, Machine learning, Python, Blockchain, data science/Analytics and many more networking and Business Management with assured quality support.',
          title: 'Quantum | About Us',
          keywords : 'SAP Channel Partner,SAP Solution Provider in surat,sap channel partner in surat,it solution in suart'
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
    0 20px 31px 3px rgba(54, 99, 168, 0.14), 0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;

  border-top-style: solid;
  border-top-color: #ff8b0f;
  border-top-width: 5px;
  border-bottom-color: #3663a8;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.background {
  background: linear-gradient(132deg, #b82e1f, #000000);
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
  width: 20px;
  height: 20px;
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
  width: 60px;
  height: 60px;
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
#main_ul{
  
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
