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
        Customize CRM Development
      </div>

      <q-breadcrumbs
        class="q-pt-md q-pb-sm text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Customize CRM Development" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">CRM Development</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Quantum recognizes that the customer is the MOST key factor of any
            business, and relationships with new and prospective customers are
            vital to your business.
          </p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            CRM Development & CRM Software Solutions – Companies rely heavily on
            customer relationship management (CRM) technology tools to manage
            interactions with current and future customers. CRM software deploys
            technology to organize, automate, and synchronize sales, marketing,
            customer service, and technical support plus manage customers,
            records, and surveys.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/crm.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/crm.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">CRM Development</p>
          <p class="text-subtitle1 text-blue-grey-9">
            Quantum recognizes that the customer is the MOST key factor of any
            business, and relationships with new and prospective customers are
            vital to your business.
          </p>
          <p class="text-subtitle1 text-blue-grey-9">
            CRM Development & CRM Software Solutions – Companies rely heavily on
            customer relationship management (CRM) technology tools to manage
            interactions with current and future customers. CRM software deploys
            technology to organize, automate, and synchronize sales, marketing,
            customer service, and technical support plus manage customers,
            records, and their surveys.
          </p>
        </div>
      </div>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui"
    >
      <p class="text-subtitle1 text-blue-grey-9">
        That is why the main objectives of Quantum’s innovative CRM strategy and expertise for you work to:
      </p>

      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >increase your business efficiency</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >effectively distribute the workload</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >increase your return on investment and profit margins</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >retain existing customers and induct new ones</span
        >
      </p>
    </div>

    <div class="bg-grey-2">
      <p class="text-center text-h5 text-primary q-ma-none q-py-xl" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        Benefits of CRM Development Services
      </p>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary" style="font-family:  system-ui">
          <q-timeline-entry>
            <div>CRM can track customer activity at each endpoint.</div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>CRM tracks customers’ Purchase and Sales habits.</div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              CRM can generate and record the history of Purchase Orders, Sales Orders, and Invoices.
            </div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              CRM enables Cross selling or Upselling by providing historical data.
            </div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              CRM aids executive leadership in identifying, preventing and effectively addressing recurrent obstacles in business processes allowing for smooth functioning.
            </div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              CRM helps the organization prevent gaps in customer service due to attrition as your business has historical data of all customers.
            </div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              CRM helps to generate sales forecasts based on Customer Feedback and Communication.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>

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
</template>

<script>
import meta from "../utils/meta.js";

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
        description:
          "Quantum recognizes that the customer is the MOST key factor of any business, and relationships with new and prospective customers are vital to your business.",
        title: "Quantum | CRM Development",
        keywords:
          "CRM Development,customer relationship managment,CRM,customer relation",
      },
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
  background: linear-gradient(132deg, #09203f, #537895);
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
