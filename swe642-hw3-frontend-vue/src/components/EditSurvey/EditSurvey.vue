<template>
  <div class="container">
    <h2 class="text-center mb-4">Edit Survey</h2>
    <form @submit.prevent="updateSurvey" v-if="survey">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName" class="form-label">First Name:</label>
          <input v-model="survey.firstName" type="text" class="form-control" id="firstName" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="lastName" class="form-label">Last Name:</label>
          <input v-model="survey.lastName" type="text" class="form-control" id="lastName" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="streetAddress" class="form-label">Street Address:</label>
        <input v-model="survey.streetAddress" type="text" class="form-control" id="streetAddress" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="city" class="form-label">City:</label>
          <input v-model="survey.city" type="text" class="form-control" id="city" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="state" class="form-label">State:</label>
          <input v-model="survey.state" type="text" class="form-control" id="state" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="zip" class="form-label">ZIP:</label>
          <input v-model="survey.zip" type="text" class="form-control" id="zip" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="telephone" class="form-label">Telephone:</label>
          <input v-model="survey.telephone" type="tel" class="form-control" id="telephone" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email:</label>
          <input v-model="survey.email" type="email" class="form-control" id="email" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="dateOfSurvey" class="form-label">Date of Survey:</label>
        <input v-model="survey.dateOfSurvey" type="date" class="form-control" id="dateOfSurvey" required>
      </div>
      <div class="mb-3">
        <label class="form-label">What did you like about the campus:</label>
        <div class="row">
          <div v-for="option in likeOptions" :key="option" class="col-md-4 mb-2">
            <div class="form-check">
              <input
                type="checkbox"
                :id="option"
                :value="option"
                v-model="survey.likes"
                class="form-check-input"
              >
              <label :for="option" class="form-check-label">{{ option }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">How did you become interested in the university?</label>
        <div class="row">
          <div v-for="option in interestOptions" :key="option" class="col-md-3 mb-2">
            <div class="form-check">
              <input
                type="radio"
                :id="option"
                :value="option"
                v-model="survey.interestSource"
                class="form-check-input"
                required
              >
              <label :for="option" class="form-check-label">{{ option }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="likelihood" class="form-label">Likelihood of recommending this school:</label>
        <select v-model="survey.likelihood" class="form-select" id="likelihood" required>
          <option value="">Select an option</option>
          <option v-for="option in likelihoodOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="comments" class="form-label">Additional Comments:</label>
        <textarea v-model="survey.comments" class="form-control" id="comments" rows="3"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-gmu me-2">Update</button>
        <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'EditSurvey',
  props: ['id'],
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const survey = ref(null)

    const likeOptions = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm Rooms', 'Sports']
    const interestOptions = ['Friends', 'Television', 'Internet', 'Other']
    const likelihoodOptions = ['Very Likely', 'Likely', 'Unlikely']

    onMounted(() => {
      const id = parseInt(props.id || route.params.id)
      survey.value = store.getters.getSurveyById(id)
    })

    const updateSurvey = () => {
      store.dispatch('updateSurvey', { id: survey.value.id, survey: survey.value })
      router.push('/list')
    }

    const cancel = () => {
      router.push('/list')
    }

    return {
      survey,
      likeOptions,
      interestOptions,
      likelihoodOptions,
      updateSurvey,
      cancel
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
.btn-gmu:hover {
  background-color: var(--gmu-yellow);
  color: var(--gmu-green);
  border-color: var(--gmu-green);
}
</style>

