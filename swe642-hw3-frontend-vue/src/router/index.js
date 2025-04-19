import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SurveyForm from '@/components/SurveyForm/SurveyForm.vue'
import SurveyList from '@/components/SurveyList/SurveyList.vue'
import EditSurvey from '@/components/EditSurvey/EditSurvey.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/survey',
    name: 'SurveyForm',
    component: SurveyForm
  },
  {
    path: '/list',
    name: 'SurveyList',
    component: SurveyList
  },
  {
    path: '/edit-survey/:id',
    name: 'EditSurvey',
    component: EditSurvey,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

