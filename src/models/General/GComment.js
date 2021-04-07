import BaseModel from '../Model'

export default class GCommentModel extends BaseModel {
  static get resource() {
    return 'comments'
  }
}