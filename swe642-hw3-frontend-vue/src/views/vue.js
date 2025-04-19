import axios from 'axios';

const API_URL = 'http://localhost:8080/api/survey';

export default {
  data() {
    return {
      surveys: []
    };
  },
  created() {
    this.getSurveys();
  },
  methods: {
    async getSurveys() {
      try {
        const response = await axios.get(API_URL);
        this.surveys = response.data;
      } catch (error) {
        console.error("There was an error!", error);
      }
    },
    async createSurvey(newSurvey) {
      try {
        const response = await axios.post(API_URL, newSurvey);
        this.surveys.push(response.data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  }
};
