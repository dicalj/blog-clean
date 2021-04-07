import List from '@/presenters/List'
import GPostEntity from '@/entities/General/GPost'
import GPostService from '@/services/api/General/GPost'

export default class GPostList extends List {
  getAll() {
    GPostService.getAll().then(gPostArray => {
      this.data = gPostArray.map(gPostModel => {
        return new GPostEntity({
          body : gPostModel.data.body,
          id   : gPostModel.key,
          title: gPostModel.data.title,
        })
      })
    })
  }
}