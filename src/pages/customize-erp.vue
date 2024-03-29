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
        Customized ERP Developent
      </div>

      <q-breadcrumbs
        class="q-pt-md q-pb-sm text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Customized ERP Developent" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Customized ERP Developent</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            Properly chosen ERP (Enterprise Resource Planning) software can help
            you to organize, automate and improve your business. Custom ERP
            software can increase efficiency and maintain continuous growth.
            Unfortunately, choosing such kind of software randomly, you risk
            wasting money without boosting your business. In this article, we’ll
            consider the main benefits of using customized ERP solutions and
            share with you some tips that’ll help you to choose the right ERP
            solution.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/erp.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/erp.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7"  style="font-family:  system-ui;">IT Solution</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Customized ERP Developent</p>
          <p class="text-subtitle1 text-blue-grey-9"  style="font-family:  system-ui;">
            Properly chosen ERP (Enterprise Resource Planning) software can help
            you to organize, automate and improve your business. Custom ERP
            software can increase efficiency and maintain continuous growth.
            Unfortunately, choosing such kind of software randomly, you risk
            wasting money without boosting your business. In this article, we’ll
            consider the main benefits of using customized ERP solutions and
            share with you some tips that’ll help you to choose the right ERP
            solution.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2 q-pt-xl q-pb-sm">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
          The Key Modules in ERP Software
        </p>
        <p
          class="text-blue-grey-9 text-subtitle1 q-mx-xl"
          v-bind:class="{ 'q-px-xl': mobile, 'text-center': mobile }"  style="font-family:  system-ui;"
        >
          ERP is not the need in a specific industry. There are multiple
          industries which have implemented or are looking for dedicated ERP
          software, systems and solutions to fulfil their needs and make the
          process flow smooth. each industry can have different needs for
          modules, some of such are mentioned below.
        </p>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly"  style="font-family:  system-ui;">
        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md"
          data-aos="fade-right"
        >
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-users"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Sales & Purchase
          </q-card-section>
          <q-card-section class="text-justify" >
            Sales and Purchasing enable Users to manage both Customer Sales
            Orders and Supplier Purchase Orders as well as their associated
            functionalities such as Customer and Supplier Management.
          </q-card-section>
        </q-card>

        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md active"
          data-aos="fade-right"
        >
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-boxes"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Inventory Managment
          </q-card-section>
          <q-card-section class="text-justify">
            This module generates data-based reports about non-capitalized
            assets and stock.
          </q-card-section>
        </q-card>

        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md"
          data-aos="fade-left"
        >
          <q-card-section class="text-center">
            <q-icon
              name="far fa-money-bill-alt"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Finance
          </q-card-section>
          <q-card-section class="text-justify">
            It collects financial data and generates reports based on it. These
            reports include ledgers, trial balance data, overall balance sheets
            and quarterly financial statements.
          </q-card-section>
        </q-card>

        <q-card
          class="my-cardc q-my-md text-blue-grey-9 q-pa-md"
          data-aos="fade-left"
        >
          <q-card-section class="text-center">
            <q-icon
              name="fas fa-plane-departure"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary">
            Supplychain Managment
          </q-card-section>
          <q-card-section class="text-justify">
            This part of an ERP system generates reports about materials and
            finances as they keep moving from supplier to manufacturers to
            wholesaler to retailer to consumer.
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pt-xl">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
          Customize Your ERP Based On Industry
        </p>
        <p
          class="text-blue-grey-9 text-subtitle1 q-mx-xl"
          v-bind:class="{ 'q-px-xl': mobile, 'text-center': mobile }"  style="font-family:  system-ui;"
        >
          At Quantum, our engineers know that ERP software development depends
          upon the organization's unique processes and they want it to improve
          the manufacturing process, better sales and constant growth support.
        </p>
      </div>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl q-pt-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary"  style="font-family:  system-ui;">
          <q-timeline-entry title="Manufacturing">
            <div>
              Comprehensive and specific to your manufacturing industry, Quantum
              works manufacturing ERP software solution continues to develop
              based on an innovative shop-floor first vision, with a single
              database that eliminates data silos and costly third-party
              integration. A complete manufacturing ERP solution that will
              prevent unnecessary downtime, while increasing manufacturing
              efficiency, quality, and profit margins In manufacturing, your
              money is made on the shop floor. That is why real-time visibility
              of every detail involved in the entire manufacturing operation is
              crucial to the continued growth, success, and profitability of
              your manufacturing business.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Construction">
            <div>
              A solid ERP solution is a ‘must-have’ tool for the businesses in
              the construction industry as they have to deal with a variety of
              materials, inventories, equipment rentals, trades & traders,
              cost-control, and other critical parties, processes, and
              procedures. With an ERP system, all the operations in a
              construction company can be streamlined and automated to make
              smoother execution of the workflow.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Automobile">
            <div>
              Automobile and automotive companies pursue fast-paced work
              processes to stay in the competition. Of course, they need a
              system that can take care of everything these companies do and of
              everyone, who is their employee, customer and partner. This is why
              automobile and automotive companies heavily rely on ERP systems to
              thrive and succeed in the global economy. A dedicatedly designed
              ERP system for companies in the automobile / automotive industry
              increases flexibility and scalability. It also accelerates
              deployment, business continuity, and usability.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Pharmaceutical">
            <div>
              Managing a pharmaceutical company is far from an easy task,
              especially as it’s one of the most complex and highly regulated
              industries of today. In this article, we will take a closer look
              at how to choose the best ERP for anyone operating in the
              pharmaceutical industry.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Textile">
            <div>
              Seek to integrate the business processes involving eight critical
              areas in the textile production planning which include raw
              material, finance, payroll, inventory, quality, sales and plant
              maintenance.
            </div>
          </q-timeline-entry>
        </q-timeline>
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
          "Properly chosen ERP (Enterprise Resource Planning) software can help you to organize, automate and improve your business. ",
        title: "Quantum | Customized ERP",
        keywords:
          "Customized ERP, Finance ERP Module,inventory managment,finance,supply chain managment",
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
.cardx {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14),
    0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;
}

.cardx:hover {
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14),
    0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;
}

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

.background {
  background: linear-gradient(132deg, #f53844, #42378f);
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
