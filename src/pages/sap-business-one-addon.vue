<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <ul class="circles q-pa-none q-ma-none">
          <li>
            <q-icon
              name="addchart"
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
              name="check_circle"
              size="xl"
              class="absolute-center"
              color="blue"
              style="opacity: 0.7"
            />
          </li>
          <li></li>
          <li>
            <q-icon
              name="backup_table"
              size="xl"
              class="absolute-center"
              color="dark"
              style="opacity: 0.7"
            />
          </li>
          <li>
            <q-icon
              name="add_task"
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
              name="extension"
              size="xl"
              class="absolute-center"
              color="yellow-12"
              style="opacity: 0.7"
            />
          </li>
        </ul>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        SAP ADD-ON(s)
      </div>
      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="SAP ADD-Ons" />
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
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui;"
    >
      <p>
        Our SAP Integrated Add-Ons are trusted by thousands of SAP Business One customers across the INDIA, who are looking to further enhance the functionality of SAP Business One within specific industries. extend your core functionality with sap business one certified add-ons. Once implemented, this SAP Integrated Add-On will help cut the downtime in your organisation, saving you and your customer time and money.
      </p>
    </div>

    <p class="text-center text-h4 text-primary q-ma-none" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
      Explore the Range of Add-On(s) by Quantum
    </p>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">SAP Business One ADD-ON</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >E-Portal Plus</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            To digitise the business practices, e-Invoicing and e-way billing has become
            the core of the business today. Electronic invoicing process has taken quick
            strides to bring down the share of the traditional paper-based invoicing. It
            has helped both the corporates as well as the public sector businesses to
            benefit from the features and intelligence of the e-invoicing services;
            especially the tax department which has shown increased interest in this
            service.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/einvoice.png" style="max-width: 500px" />
        </div>
      </div>
      

      <div class="row items-center justify-center bg-grey-2">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="zoom-in">
          <q-img src="~assets/signature.png" style="max-width: 500px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="fade-left">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">Digital Signature</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >QD-Signature</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            Standards-Based Signatures enable you to automate and manage cloud and mobile
            digital processes using DocuSign’s powerful business capabilities—all while
            staying compliant with local eSignature standards. DocuSign offers cloud-based
            digital certificates to your signers in real time at the time of signing,
            improving signer experience while reducing the IT complexity and cost
            associated with in-house digital certificate management.
          </p>
        </div>
      </div>

      <div class="row items-center justify-center gt-sm" style="margin-top: 5px;">
      <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
        <q-img src="~assets/pdf_signer.png" style="max-width: 500px" />
      </div>
      <div class="col-12 col-md q-px-xl q-pb-xl q-pt-lg q-ml-xl">
        <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">Sign PDF documents</p>
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">QD eSign</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          Go digital with
          <span class="text-bold" ><a class="text-secondary" target="_blank" style="text-decoration: none; color: #B799FF !important; font-size: 22px;" href="/qit_digi_signer">Quantum's PDF-Signer.</a></span>
          Our innovative online PDF signing application revolutionizes document workflows within organizations. 
          Streamline contract management with digital signatures, eliminating printing and scanning. Ensure data integrity and security with encrypted signatures and tamper-proof audit trails.
           Collaborate seamlessly across locations, accelerating approvals and decision-making. 
           Integrate with existing systems for efficient workflow management. Experience the future of secure and efficient document signing with our cutting-edge solution.
        </p>
      </div>
    </div>

      <div class="row items-center justify-center bg-grey-2">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">SAP Business One ADD-ON</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >Quantum QC</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            SAP Business One is a comprehensive ERP system for small and medium-sized
            companies, but it’s not designed as quality management software. Nevertheless,
            thanks to the flexibility of SAP Business One and the data already present in
            the SAP system, quality management evaluations can still be performed
            effortlessly with Our Add-on
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/quality.png" style="max-width: 500px" />
        </div>
      </div>
    </div>


    <!-- Mobile View -->
    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center" data-aos="zoom-in">
          <q-img src="~assets/einvoice.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">SAP Business One ADD-ON</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >E-Portal Plus</p>
          <p class="text-subtitle1 text-blue-grey-9">
            To digitise the business practices, e-Invoicing and e-way billing has become
            the core of the business today. Electronic invoicing process has taken quick
            strides to bring down the share of the traditional paper-based invoicing. It
            has helped both the corporates as well as the public sector businesses to
            benefit from the features and intelligence of the e-invoicing services;
            especially the tax department which has shown increased interest in this
            service.
          </p>
        </div>
      </div>

      <div class="row items-center justify-center bg-grey-2">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center" data-aos="fzoom-in">
          <q-img src="~assets/signature.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-left">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">Digital Signature</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >QD-signature</p>
          <p class="text-subtitle1 text-blue-grey-9">
            Standards-Based Signatures enable you to automate and manage cloud and mobile
            digital processes using DocuSign’s powerful business capabilities—all while
            staying compliant with local eSignature standards. DocuSign offers cloud-based
            digital certificates to your signers in real time at the time of signing,
            improving signer experience while reducing the IT complexity and cost
            associated with in-house digital certificate management.
          </p>
        </div>
      </div>

      <!-- pdf signer -->
      <div class="row items-center justify-center lt-md">
      <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
        <q-img src="~assets/pdf_signer.png" style="max-width: 400px" />
      </div>
      <div class="col-12 col-md q-pa-xl q-mx-xl">
        <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">SAP Business One ADD-ON</p>
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">QD PDF-Signer</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          Go digital with
          <span class="text-secondary text-bold"><a class="text-secondary text-bold" target="_blank" style="text-decoration: none;" href="https://www.w3schools.com">Quantum's PDF-Signer.</a></span>
          Our innovative online PDF signing application revolutionizes document workflows within organizations. 
          Streamline contract management with digital signatures, eliminating printing and scanning. Ensure data integrity and security with encrypted signatures and tamper-proof audit trails.
           Collaborate seamlessly across locations, accelerating approvals and decision-making. 
           Integrate with existing systems for efficient workflow management. Experience the future of secure and efficient document signing with our cutting-edge solution.
        </p>
      </div>
    </div>
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center" data-aos="zoom-in">
          <q-img src="~assets/quality.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui;">SAP Business One ADD-ON</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >Quantum-QC</p>
          <p class="text-subtitle1 text-blue-grey-9">
            SAP Business One is a comprehensive ERP system for small and medium-sized
            companies, but it’s not designed as quality management software. Nevertheless,
            thanks to the flexibility of SAP Business One and the data already present in
            the SAP system, quality management evaluations can still be performed
            effortlessly with Our Add-on
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
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
          description: 'Our SAP Integrated Add-Ons are trusted by thousands of SAP Business One customers across the INDIA, who are looking to further enhance the functionality of SAP Business One within specific industries',
          title: 'Quantum | SAP Business One ADD-Ons',
          keywords :'SAP Add-Ons, Quality Check,Digital Signature,E-invoice,E-waybill,ERP Add-Ons,addons, SAP'
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
  background: linear-gradient(132deg, #0d324d, #7f5a83);
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

