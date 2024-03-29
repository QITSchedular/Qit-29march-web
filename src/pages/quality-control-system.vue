<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
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
        Quantum QC
      </div>
      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Quantum QC" />
      </q-breadcrumbs>
    </div>

    <!--  <div class="q-pa-none">
        <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img src="~assets/abt.jpg">
            </template>
        </q-parallax>
    </div>
-->

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-mt-xl q-mb-md"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui"
    >
      <p>
        The ISO 9001 standard outlines requirements that a company’s quality management system (QM system) must satisfy to demonstrate that the company can supply products that meet customer requirements and increase customer satisfaction.
      </p>

      <p>
        The principles of quality management include customer orientation, management responsibility, involvement of stakeholders, and continuous improvement. The ISO 9001 standard gives companies the opportunity to develop a competitive edge while complying with these principles. The requirements of ISO 9001:2008 can for example be implemented as follows:
      </p>

      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md">Determining customer satisfaction</span>
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Collaboration with suitable suppliers</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md">Evaluations of quality goals</span>
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md">Traceability</span>
      </p>
    </div>

    <div class="row items-center justify-center gt-sm bg-grey-2">
      <div class="col-12 col-md q-px-xl q-pb-xl q-pt-md q-ml-xl">
        <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">SAP Business One ADD-ON</p>
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Quantum QC</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          Go with Quality which meets the international standards using
          <span class="text-secondary text-bold" >Quantum QC.</span> SAP Business One is a comprehensive ERP system for small and medium-sized companies, but it’s not designed as quality management software. Nevertheless, thanks to the flexibility of SAP Business One and the data already present in the SAP system, quality management evaluations can still be performed effortlessly with Our Add-on.
        </p>
      </div>
      <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
        <q-img src="~assets/quality.png" style="max-width: 500px" />
      </div>
    </div>

    <div class="row items-center justify-center lt-md">
      <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
        <q-img src="~assets/quality.png" style="max-width: 400px" />
      </div>
      <div class="col-12 col-md q-pa-xl q-mx-xl">
        <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">SAP Business One ADD-ON</p>
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Quantum QC</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          Go with Quality which meets the international standards using
          <span class="text-secondary text-bold">Quantum QC.</span> SAP Business One is a comprehensive ERP system for small and medium-sized companies, but it’s not designed as quality management software. Nevertheless, thanks to the flexibility of SAP Business One and the data already present in the SAP system, quality management evaluations can still be performed effortlessly with Our Add-on.
        </p>
      </div>
    </div>

    <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs">
      <span class="q-px-xl" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">For More information, Book Your Free Demo</span>
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
</template>

<script>
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'The ISO 9001 standard outlines requirements that a company’s quality management system (QM system) must satisfy to demonstrate that the company can supply products that meet customer requirements and increase customer satisfaction.',
          title: 'Quantum | Quality Check Solution',
          keywords : 'Quality check,quality check sap addon,Quality check in business,product quality check'
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
.background {
  background: linear-gradient(132deg, #000000, #923cb5);
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
