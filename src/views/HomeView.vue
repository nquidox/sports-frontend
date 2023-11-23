<script>
import axios from "axios";

export default {
  name: 'HomeView',

  data(){
    return{
      apiPath: 'http://127.0.0.1:8000',
      token: localStorage.getItem('access_token'),
      isAuth: false,
      userData: '',
      tokenData: '',
      activityType: '',
      activitiesData: '',
      visibilities: ['Only me', 'Friends only', 'All'],
    }
  },

  computed:{
    pathUsername(){
      return this.tokenData['sub']
    }
  },

  methods: {
    getUserData(){
      axios.get(`${this.apiPath}/user/${this.pathUsername}/`, {headers:{
        'Authorization': `Bearer ${this.token}`}})
          .then(response => this.userData = response.data)
          .catch((err) => {
            if (err === '401'){
              this.isAuth = false;
            }
          });
    },

    parseToken(){
      this.tokenData = JSON.parse(atob(this.token.split('.')[1]));
    },

    getActivities(){
      axios.get(`${this.apiPath}/${this.pathUsername}/activities/${this.activityType}/`, {headers:{
          'Authorization': `Bearer ${this.token}`}})
          .then(response => this.activitiesData = response.data);

    }
  },

  mounted() {
    if (this.token){
      this.parseToken();
      this.getUserData();
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-if="isAuth === false" class="col">
        <h3 class="text-center mt-3">Welcome! You need to log in.</h3>
      </div>

      <div v-if="isAuth === true" class="col">
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
    </div>

    <div class="row" v-if="isAuth === true">
      <p>Examples: run, walk.</p>
      <input type="text" v-model="activityType" id="inp">
      <button type="button" @click="getActivities" id="inp">Get activities</button>
    </div>

    <div v-if="isAuth === true" class="row mt-3">
      <div v-for="item in activitiesData" :key="item" class = "col">
        <div class="card" style="width: 18rem;">
          <img :src="require('@/assets/images/activities/' + this.activityType + '.png')" class="card-img-top" alt="{{this.activityType}}">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Distance: {{ item.distance }}</li>
            <li class="list-group-item">Date: {{ item.date }}</li>
          </ul>
          <div class="card-footer text-center">
            <p>Published: {{ item.published ? "yes" : "no" }} | Visibility: {{ visibilities[item.visibility] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#inp {
 width: 300px;
}
</style>