import api from './api';

export default {
  getAllSurveys() {
    return api.get('/survey');
  },
  getSurvey(id) {
    return api.get(`/survey/${id}`);
  },
  submitSurvey(survey) {
    return api.post('/survey', survey);
  },
  updateSurvey(id, survey) {
    return api.put(`/survey/${id}`, survey);
  },
  deleteSurvey(id) {
    return api.delete(`/survey/${id}`);
  }
};
