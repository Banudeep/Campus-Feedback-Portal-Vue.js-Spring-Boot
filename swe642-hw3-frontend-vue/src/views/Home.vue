<template>
  <div class="jumbotron gmu-jumbotron">
    <h2 class="display-4">Welcome to our Student Survey System</h2>
    <p class="lead">This application allows prospective students to provide feedback about their campus visit and view all surveys recorded to date.</p>
    
    <h3>Features:</h3>
    <ul class="list-group">
      <li class="list-group-item gmu-list-item">Fill out a survey form with acknowledgement</li>
      <li class="list-group-item gmu-list-item">View all surveys done to date</li>
      <li class="list-group-item gmu-list-item">Update and delete individual surveys</li>
    </ul>

    <div class="mt-4">
      <router-link to="/survey" class="btn btn-gmu me-2">Fill Out Survey</router-link>
      <router-link to="/list" class="btn btn-outline-success">View All Surveys</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'  // Changed name to a multi-word name
}
</script>
