import EntityBase from '@/entities/Entity'

export default class GCommentEntity extends EntityBase {
  constructor(payload = {}) {
    super()
    this.id    = payload.id||null
    this.email = payload.email||''
    this.name  = payload.name||''
    this.body  = payload.body||''
  }
}