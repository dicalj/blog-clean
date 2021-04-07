import axios from 'axios'
import { Model } from 'mopper'

export default class BaseModel extends Model {
  static get adapter() {
    return axios
  }
  static get baseURL() {
    return process.env.VUE_APP_API_ROUTE
  }
}