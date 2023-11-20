<script>
import axios from "axios";

export default {
  name: 'HomeView',

  data(){
    return{
      isAuth: false,
      userData: ''
    }
  },

  methods: {
    getUserData(){
      axios.get('http://127.0.0.1:8000/user/1', {headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`}})
          .then(response => this.userData = response.data)
    }
  },

  mounted() {
    if (localStorage.getItem('access_token')){
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
