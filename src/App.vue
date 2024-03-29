<template>
  <div id="q-app">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import firebase from "firebase";
import 'firebase/auth';
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  created() {},
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
        }
      });
    },
    handler: function handler(event) {
      firebase.auth().signOut();
    },
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {


    window.addEventListener("beforeunload", this.handler);
    this.setupFirebase();
    firebase.auth().signOut();

    this.$q.loading.show({
      spinnerColor: "amber",
    });

    // hiding in 2s
    this.timer = setTimeout(() => {
      this.$q.loading.hide();
      this.timer = void 0;
    }, 2000);
  },
};
</script>

<style></style>
