import Service from '@/services/api/Service'
import GPostModel from '@/models/General/GPost'

export default class GPostService extends Service {
  static model() {
    return GPostModel
  }
}