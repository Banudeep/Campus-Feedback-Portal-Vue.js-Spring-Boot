<template>
  <div class="container">
    <h2 class="text-center mb-4">All Surveys</h2>
    <div class="mb-3 text-end">
      <button @click="viewMode = 'list'" class="btn btn-gmu me-2" :class="{ active: viewMode === 'list' }">List View</button>
      <button @click="viewMode = 'grid'" class="btn btn-gmu" :class="{ active: viewMode === 'grid' }">Grid View</button>
    </div>
    <div v-if="viewMode === 'list'">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Survey</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="survey in surveys" :key="survey.id">
            <td>{{ survey.firstName }} {{ survey.lastName }}</td>
            <td>{{ survey.email }}</td>
            <td>{{ survey.dateOfSurvey }}</td>
            <td>
              <router-link :to="{ name: 'EditSurvey', params: { id: survey.id } }" class="btn btn-sm btn-gmu me-2">Edit</router-link>
              <button @click="deleteSurvey(survey.id)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="row">
      <div v-for="survey in surveys" :key="survey.id" class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ survey.firstName }} {{ survey.lastName }}</h5>
            <p class="card-text">Email: {{ survey.email }}</p>
            <p class="card-text">Date: {{ survey.dateOfSurvey }}</p>
            <router-link :to="{ name: 'EditSurvey', params: { id: survey.id } }" class="btn btn-sm btn-gmu me-2">Edit</router-link>
            <button @click="deleteSurvey(survey.id)" class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'SurveyList',
  setup() {
    const store = useStore()
    const viewMode = ref('list')

    const surveys = computed(() => store.getters.allSurveys)

    onMounted(() => {
      store.dispatch('fetchSurveys')
    })

    const deleteSurvey = (id) => {
      if (confirm('Are you sure you want to delete this survey?')) {
        store.dispatch('deleteSurvey', id)
      }
    }

    return {
      surveys,
      viewMode,
      deleteSurvey
    }
  }
}
</script>

<style scoped>
.btn-gmu {
  background-color: var(--gmu-green);
  color: var(--gmu-yellow);
  border-color: var(--gmu-yellow);
}
.btn-gmu:hover, .btn-gmu.active {
  background-color: var(--gmu-yellow);
  color: var(--gmu-green);
  border-color: var(--gmu-green);
}
</style>

