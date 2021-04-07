import GPostEntity from '@/entities/General/GPost'
import GPostService from '@/services/api/General/GPost'
import GCommentList from './GCommentList'

export default class GPostDetail extends GPostEntity {
  constructor(payload) {
    super(payload)
    this.comments = new GCommentList()
  }
  get(id) {
    GPostService.getByKey(id).then(gPostModel => {
      this.body   = gPostModel.data.body
      this.id     = gPostModel.key
      this.title  = gPostModel.data.title
      this.comments.getByPostId(id)
    })
  }
}