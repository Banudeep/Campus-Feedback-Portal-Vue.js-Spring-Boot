import { createStore } from 'vuex'

export default createStore({
  state: {
    surveys: [],
    nextId: 1
  },
  mutations: {
    SET_SURVEYS(state, surveys) {
      state.surveys = surveys
      state.nextId = Math.max(...surveys.map(s => s.id), 0) + 1
    },
    ADD_SURVEY(state, survey) {
      const newSurvey = {
        ...survey,
        id: state.nextId++
      }
      state.surveys.push(newSurvey)
    },
    UPDATE_SURVEY(state, updatedSurvey) {
      const index = state.surveys.findIndex(s => s.id === updatedSurvey.id)
      if (index !== -1) {
        state.surveys.splice(index, 1, updatedSurvey)
      }
    },
    DELETE_SURVEY(state, id) {
      state.surveys = state.surveys.filter(s => s.id !== id)
    }
  },
  actions: {
    fetchSurveys({ commit }) {
      const surveys = JSON.parse(localStorage.getItem('surveys')) || []
      commit('SET_SURVEYS', surveys)
    },
    submitSurvey({ commit, state }, survey) {
      commit('ADD_SURVEY', survey)
      localStorage.setItem('surveys', JSON.stringify(state.surveys))
    },
    updateSurvey({ commit, state }, { id, survey }) {
      commit('UPDATE_SURVEY', { ...survey, id })
      localStorage.setItem('surveys', JSON.stringify(state.surveys))
    },
    deleteSurvey({ commit, state }, id) {
      commit('DELETE_SURVEY', id)
      localStorage.setItem('surveys', JSON.stringify(state.surveys))
    }
  },
  getters: {
    allSurveys: state => state.surveys,
    getSurveyById: (state) => (id) => {
      return state.surveys.find(survey => survey.id === parseInt(id))
    }
  }
})