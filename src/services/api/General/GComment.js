import Service from '@/services/api/Service'
import GCommentModel from '@/models/General/GComment'

export default class GCommentService extends Service {

  static getByPostId(gPostId) {
    return this.query().param('postId', gPostId).get()
  }

  static model() {
    return GCommentModel
  }
}