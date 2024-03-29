<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
      <li>
          <q-img
            src="~assets/b1hana.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-img
            src="~assets/b1hana.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li></li>
        <li>
          <q-img
            src="~assets/b1hana.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li>
          <q-img
            src="~assets/b1hana.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-img
            src="~assets/b1hana.png"
            style="max-width: 100px"
            class="absolute-center"
          />
        </li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        SAP BUSINESS ONE HANA
      </div>

      <q-breadcrumbs
        class="q-pt-md q-pb-sm text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="SAP Busienss One HANA" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >SAP Solution</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            SAP HANA is the in-memory computing platform for SAP Business One that
            supercharges the application performance for speed and allows you to analyze
            massive amounts of data in real time. SAP Business One powered by SAP HANA
            eliminates layers of complexities and unnecessary business costs found in
            legacy IT architecture so your business can run smarter, faster, and simpler.
            As the data foundation of SAP Business Technology Platform, SAP HANA provides
            advanced analytics on multimodel data, on premise and in the cloud.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/3JponDd1MlQ?rel=0"
          />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-px-xl q-pt-xl q-mx-xl">
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >SAP Solution</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            SAP HANA is the in-memory computing platform for SAP Business One that
            supercharges the application performance for speed and allows you to analyze
            massive amounts of data in real time. SAP Business One powered by SAP HANA
            eliminates layers of complexities and unnecessary business costs found in
            legacy IT architecture so your business can run smarter, faster, and simpler.
            As the data foundation of SAP Business Technology Platform, SAP HANA provides
            advanced analytics on multimodel data, on premise and in the cloud.
          </p>
        </div>
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/3JponDd1MlQ?rel=0"
          />
        </div>
      </div>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl"
      v-bind:class="{ 'q-px-xl': mobile }"
    >
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-bold q-pl-md" style="font-family:  system-ui;">Improved and additional analytical options</span>
        – Pervasive Analytics, Interactive Analysis and Analytical Portal
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-bold q-pl-md" style="font-family:  system-ui;">Additional integration options</span> – ODATA and
        Service Layer
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-bold q-pl-md" style="font-family:  system-ui;">Added functionality</span> – Intelligent
        Forecasting, Advanced Available to Promise, Delivery Schedule Management
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-bold q-pl-md" style="font-family:  system-ui;">Modern HTML cockpit interface</span>
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-bold q-pl-md" style="font-family:  system-ui;">Enterprise HANA features</span> – in-memory
        technology, real-time data modelling (aggregations)
      </p>
    </div>

    <div class="bg-grey-2">
      <p class="text-center text-h4 text-primary q-ma-none q-py-xl" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
        Benefits of using SAP Business One on HANA
      </p>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary" style="font-family:  system-ui;">
          <q-timeline-entry title="Become Agile">
            <div >
              Get real-time business information at the moment you need it so you can
              clearly define and focus on the right priorities
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Gain Insight">
            <div >
              Leverage a single platform for analytics and transactions to get
              unprecedented insight-to-action capabilities. Take advantage of real-time
              apps for cash flow and other processes to quickly solve problems.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Improve Efficiency">
            <div>
              Empower employees with lightning fast search capabilities and interactive
              analysis tools to help them become more productive and independent of IT
              staff.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Achieve Value">
            <div>
              Maintain a simplified IT landscape with a solution priced for growing small
              and midsize businesses and designed for scalability.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>

    <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
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
</template>

<script>
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'SAP HANA is the in-memory computing platform for SAP Business One that supercharges the application performance for speed and allows you to analyze massive amounts of data in real time.',
          title: 'Quantum | SAP Business One On HANA',
          keywords : 'SAP Solution on HANA,SAP Implementation,SAP business one on HANA, SAP Solution in India, SAP Business One,SAP HANA, ERP Solution'
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
}

.my-cardc:hover {
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14), 0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;
}

.background {
  background: linear-gradient(132deg, #b91372, #6b0f1a);
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
