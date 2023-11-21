<script>
import axios from "axios";

export default {
  name: 'HomeView',

  data(){
    return{
      token: localStorage.getItem('access_token'),
      isAuth: false,
      userData: '',
      tokenData: '',

    }
  },

  methods: {
    getUserData(){
      axios.get(`http://127.0.0.1:8000/user/${this.tokenData['sub']}/`, {headers:{
        'Authorization': `Bearer ${this.token}`}})
          .then(response => this.userData = response.data);
    },

    parseToken(){
      this.tokenData = JSON.parse(atob(this.token.split('.')[1]));
    }
  },

  mounted() {
    if (localStorage.getItem('access_token')){
      this.parseToken();
      this.getUserData();
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
};
</script>

<template>
  <div v-if="isAuth === false">
    <h3 class="text-center mt-3">Welcome! You need to log in.</h3>
  </div>

  <div v-if="isAuth === true">
    <h3  class="text-center mt-3">Welcome, {{ userData.username }}!</h3>
    <h3>User data:</h3>
    <ul>
      <li>Username: {{ userData.username }}</li>
      <li>First name: {{ userData.first_name }}</li>
      <li>Last name: {{ userData.last_name }}</li>
      <li>Birthday: {{ userData.birthday }}</li>
      <li>Gender: {{ userData.gender }}</li>
    </ul>
  </div>
</template>
