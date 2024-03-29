<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li>
          <q-icon
            name="dynamic_form"
            size="xl"
            class="absolute-center"
            color="green-13"
            style="opacity: 0.7"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-icon
            name="track_changes"
            size="xl"
            class="absolute-center"
            color="blue"
            style="opacity: 0.7"
          />
        </li>
        <li></li>
        <li>
          <q-icon
            name="verified_user"
            size="xl"
            class="absolute-center"
            color="dark"
            style="opacity: 0.7"
          />
        </li>
        <li>
          <q-icon
            name="insights"
            size="xl"
            class="absolute-center"
            color="light-green-11"
            style="opacity: 0.7"
          />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-icon
            name="stacked_bar_chart"
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
        SAP S/4 HANA On Cloud
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="SAP S/4 HANA On Cloud" />
      </q-breadcrumbs>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-mt-xl q-mb-sm"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui;"
    >
      <p>
        Gain the ultimate business advantage with the intelligent, next-generation Cloud
        ERP business suite SAP S/4HANA Cloud. It integrates every business process, turns
        real time data into actions, and increases employee productivity with the security
        you expect from SAP enabling you to innovate, transform and run ahead.
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Make data-driven decisions with predictive analytics.</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Improve automation, efficiency, and agility through machine learning.</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Simplify consolidation and integration between headquarters and subsidiaries
          with 2-tier deployment.</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Extend easily with native integration to other SAP solutions and open
          interfaces.</span
        >
      </p>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">SAP Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">SAP S/4 HANA On Cloud</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            Enterprises are now considering moving their S/4 HANA workloads to cloud to be
            future-ready. The Quantum's roadmap to cloud goes beyond cost advantage for
            peak performance and improved employee efficiency. The argument over cost as
            the major focus of cloud migration is not the only focus, anymore.
            Organizations only need to keep three mantras in mind, Clarity on
            Requirements, Focus on Function and Attention to Performance to carry out a
            successful migration.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/hanacloud.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center" data-aos="zoom-in">
          <q-img src="~assets/hanacloud.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">SAP Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">SAP S/4 HANA</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            Enterprises are now considering moving their S/4 HANA workloads to cloud to be
            future-ready. The Quantum's roadmap to cloud goes beyond cost advantage for
            peak performance and improved employee efficiency. The argument over cost as
            the major focus of cloud migration is not the only focus, anymore.
            Organizations only need to keep three mantras in mind, Clarity on
            Requirements, Focus on Function and Attention to Performance to carry out a
            successful migration.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-center text-h4 text-primary q-ma-none q-pt-xl" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        Why SAP S/4 HANA on Cloud?
      </p>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary" style="font-family:  system-ui;">
          <q-timeline-entry title="Finance">
            <div>
              Consolidate financial, managerial, and operational data into a single source
              and accelerate performance with real-time processes and analytics.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Procurement">
            <div>
              Innovate procurement processes to reduce manual tasks and increase
              efficiency, while improving contract renegotiation and compliance processes
              with predictive analytics.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Enterprise Portfolio and Project Management">
            <div>
              Manage projects more efficiently with accurate reporting of cost
              forecasting, status and timelines using SAP CoPilot as an Intelligent
              Project assistant.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Sales">
            <div>
              Give your marketing and sales teams the insights they need to accelerate
              productivity and sales performance, and have relevant conversations and
              interactions from anywhere.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Professional Services">
            <div>
              Improve performance with real-time financial management, and increase
              efficiency with end-to-end global project control and operational
              visibility.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Component Manufacturing">
            <div>
              Build world class customer centricity, production excellence, and manage
              supply chains based on real- time customer demand.
            </div>
          </q-timeline-entry>
        </q-timeline>
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
          description: 'Gain the ultimate business advantage with the intelligent, next-generation Cloud ERP business suite SAP S/4HANA Cloud.',
          title:'Quantum | SAP S/4 HANA On Cloud',
          keywords : 'SAP Solution on cloud,SAP Implementation,SAP S/4 HANA on cloud, SAP Solution in India, SAP S/4 HANA,SAP, ERP Solution'
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
  background: linear-gradient(132deg, #fc575e, #360033, #0b8793);
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
