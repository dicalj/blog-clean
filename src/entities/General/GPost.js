import EntityBase from '@/entities/Entity'

export default class GPostEntity extends EntityBase {
  constructor(payload = {}) {
    super()
    this.id    = payload.id||null
    this.title = payload.title||''
    this.body  = payload.body||''
  }
}