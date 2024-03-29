<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quantum Dashboard </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <p class="text-h6 text-center q-my-md">Nevigation</p>
       <q-separator dark />
      <q-list>
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section class="text-subtitle1">Enquiry Data</q-item-section>
        </q-item>
        
        <q-item clickable v-ripple to="/jobpost">
          <q-item-section avatar>
            <q-icon name="work_outline" />
          </q-item-section>
          <q-item-section class="text-subtitle1">Job Post</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="signOut">
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section class="text-subtitle1">Logout</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import firebase from "firebase";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods:{
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
    },
  }
};
</script>
