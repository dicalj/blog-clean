import List from '@/presenters/List'
import GCommentEntity from '@/entities/General/GComment'
import GCommentService from '@/services/api/General/GComment'

export default class GCommentList extends List {
  getByPostId(id) {
    GCommentService.getByPostId(id).then(gCommentArray => {
      this.data = gCommentArray.map(gCommentModel => {
        return new GCommentEntity({
          body : gCommentModel.data.body,
          email: gCommentModel.data.email,
          id   : gCommentModel.key,
          name : gCommentModel.data.name,
        })
      })
    })
  }
}