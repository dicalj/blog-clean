import BaseModel from '../Model'

export default class GPostModel extends BaseModel {
  static get resource() {
    return 'posts'
  }
}