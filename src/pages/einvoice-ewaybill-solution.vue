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
        E-Invoice & E-waybill Solution
      </div>
      <q-breadcrumbs
        class="q-pt-md q-pb-sm text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="E-Invoice & E-waybill Solution" />
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
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-my-xl"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui"
    >
      <p>
        To digitise the business practices, e-Invoicing and e-way billing have become the core of the business today. The electronic invoicing process has taken quick strides to bring down the share of the traditional paper-based invoicing. It has helped both the corporates as well as the public sector businesses to benefit from the features and intelligence of the e-invoicing services; especially the tax department which has shown increased interest in this service.
      </p>

      <p>
        Streamlined & simple e-invoice management and compliance documentation work together to eliminate invoice error risks& exceptions, auto validation of the document content and thereby helping to make vendor or customer payments. As digital information can be easily viewed across various landscapes &systems than manual documents residing on the manager’s desk, the e-invoicing process makes it easier by:
      </p>

      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Agile Management of cumbersome compliance tasks</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Act a Facilitator to collaborate within the business and as well as with the
          trading business partners</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Maximization of early-payment discounts & optimization of the working
          capital</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Reduction in the overpayment risk, fraud and statutory regulations
          violations</span
        >
      </p>
      <p>
        <q-icon name="done_all" color="secondary" />
        <span class="text-blue-grey-9 q-pl-md"
          >Improved cash flow for suppliers and buyers</span
        >
      </p>
    </div>

    <div class="row items-center justify-center gt-sm bg-grey-2">
      <div class="col-12 col-md q-px-xl q-pb-xl q-pt-lg q-ml-xl">
        <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">SAP Business One ADD-ON</p>
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">E-Poratal Plus</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          <span class="text-secondary text-bold">Quantum</span> e-invoicing solution enables automation of both of the invoicing processes. Sales Invoice circulation, or purchase invoices gathering can be done electronically as pdf files, but this is not a true e-invoice because it may need additional data re-entry which is cumbersome and error-prone and does not support automated processing. Our smart e-invoicing solution and network business guidelines help & alert the vendors & suppliers about errors or flaws in the invoice thereby preventing incorrect invoices from being uploaded onto the process workflow or back-end system. Additionally, the solution can capture and automate the invoice processing of all types of invoices, whether PDF invoices or non-PO invoices and invoices for complex services.
        </p>
      </div>
      <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
        <q-img src="~assets/einvoice.png" style="max-width: 500px" />
      </div>
    </div>

    <div class="row items-center justify-center lt-md">
      <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
        <q-img src="~assets/einvoice.png" style="max-width: 400px" />
      </div>
      <div class="col-12 col-md q-pa-xl q-mx-xl">
        <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">SAP Business One ADD-ON</p>
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">E-Poratal Plus</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          <span class="text-secondary text-bold">Quantum</span> e-invoicing solution enables automation of both of the invoicing processes. Sales Invoice circulation, or purchase invoices gathering can be done electronically as pdf files, but this is not a true e-invoice because it may need additional data re-entry which is cumbersome and error-prone and does not support automated processing. Our smart e-invoicing solution and network business guidelines help & alert the vendors & suppliers about errors or flaws in the invoice thereby preventing incorrect invoices from being uploaded onto the process workflow or back-end system. Additionally, the solution can capture and automate the invoice processing of all types of invoices, whether PDF invoices or non-PO invoices and invoices for complex services.
        </p>
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
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'To digitise the business practices, e-Invoicing and e-way billing has become the core of the business today. Electronic invoicing process has taken quick strides to bring down the share of the traditional paper-based invoicing.',
          title: 'Quantum | E-Invoice & E-waybill Solution',
          keywords : 'eway bill,e-invoive,ewaybill integration sap,einvoice integration sap,sap addon,goverment einvoice ewaybill rule'
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
  background: linear-gradient(132deg, #434343, #000000);
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
