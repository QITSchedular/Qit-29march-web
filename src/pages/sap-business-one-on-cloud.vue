<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li>
          <q-img
            src="~assets/cloud.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-img
            src="~assets/cloud.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li></li>
        <li>
          <q-img
            src="~assets/cloud.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li>
          <q-img
            src="~assets/cloud.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-img
            src="~assets/cloud.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        SAP BUSINESS ONE CLOUD
      </div>

      <q-breadcrumbs
        class="q-pt-md q-mb-sm text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="SAP Business One Cloud" />
      </q-breadcrumbs>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-my-xl" style="font-family:  system-ui;"
      v-bind:class="{ 'q-px-xl': mobile }"
    >
      <p>
        SAP Business One Cloud delivers strong business management software functionality
        in a secure cloud environment that frees you from maintaining servers, back-ups
        and managing infrastructure requirements.
      </p>
      <p>
        Small and midsize businesses -- manage your most critical business functions with
        SAP Business One cloud. It is a robust and scalable solution that helps you to
        standardize and streamline processes, minimizing errors and delays.
      </p>
    </div>

    <div class="bg-grey-2">
      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary" class="q-py-xl">
          <q-timeline-entry title="ZeroCapex" icon="api" >
            <div style="font-family:  system-ui;">
              You get all the features of SAP Business One on the Cloud without even
              deploying the software on your premises which results in effective capital
              expense (CapEx) management.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Smooth and Rapid Deployment" icon="backup">
            <div style="font-family:  system-ui;">
              SAP Business One Cloud is designed for smooth and rapid deployment. That
              means you can get up and run in a matter of weeks with minimal disruption to
              your operations.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Minimize IT Overhead" icon="offline_bolt">
            <div style="font-family:  system-ui;">
              SAP Business One Cloud greatly minimizes the need to hire an experienced IT
              staff as there's no need to maintain and support the software on-premise.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Safeguard your Data to Prevent Loss" icon="lock">
            <div style="font-family:  system-ui;">
              Safeguard your data to prevent loss of information and ensure data security.
              The Cloud model is highly reliable than typical commodity disk drives,
              making it more secure and robust to manage your data.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Access from Anywhere" icon="language">
            <div style="font-family:  system-ui;">
              With SAP Business One, all your key functions can be accessed simply
              anytime, anywhere, and on any device.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Highly Scalable" icon="thumb_up_alt">
            <div style="font-family:  system-ui;">
              With no need to deploy, maintain traditional, on-premise infrastructure and
              perpetual licenses you will observe that the total cost of ownership (TCO)
              is substantially reduced.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
    <p class="text-center text-h5 text-primary q-mx-md" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
      Options for SAP Business One in the Cloud
    </p>

    <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly">
      <q-card class="my-cardc q-my-md text-blue-grey-9" data-aos="fade-right">
        <q-card-section class="text-center">
          <q-icon
            name="fas fa-user-shield"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
        </q-card-section>
        <q-card-section class="text-center text-h6 text-primary">
          Private Cloud Hosted
        </q-card-section>
        <q-card-section style="font-family:  system-ui;">
          Run SAP Business One SQL or HANA version. Best for situations where your
          solution requires add-on products to SAP Business One.
        </q-card-section>
      </q-card>
      <q-card class="my-cardc q-my-md text-blue-grey-9" data-aos="zoom-in">
        <q-card-section class="text-center">
          <q-icon
            name="fas fa-cloud-upload-alt"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
        </q-card-section>
        <q-card-section class="text-center text-h6 text-primary">
          Public Cloud Hosted
        </q-card-section>
        <q-card-section style="font-family:  system-ui;">
          Run SAP Business One SQL or HANA version. Good for situations where you have
          minimal customizations, and can run the standard offering.
        </q-card-section>
      </q-card>
      <q-card class="my-cardc q-my-md text-blue-grey-9" data-aos="fade-left">
        <q-card-section class="text-center">
          <q-icon name="fas fa-cogs" size="45px" class="q-pa-sm" color="secondary" />
        </q-card-section>
        <q-card-section class="text-center text-h6 text-primary">
          SAP on SaaS
        </q-card-section>
        <q-card-section style="font-family:  system-ui;">
          Run SAP Business One HANA version only. Best for situations where you can run
          the standard offering, and prefer a subscription pricing model.
        </q-card-section>
      </q-card>
    </div>

    <div class="bg-grey-2">
      <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        <span class="q-px-xl">For More information, Book Your Free Demo</span>
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

      <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
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
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'SAP Business One Cloud delivers strong business management software functionality in a secure cloud environment that frees you from maintaining servers, back-ups and managing infrastructure requirements.',
          title: 'Quantum | SAP Business One On Cloud',
          keywords : 'SAP Solution on cloud,SAP Implementation,SAP business one on cloud, SAP Solution in India, SAP Business One,SAP, ERP Solution'
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
  max-width: 250px;
  border-radius: 25px;
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
  background: linear-gradient(132deg, #0f0c29, #302b63, #24243e);
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
