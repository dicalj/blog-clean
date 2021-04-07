export default class EntityBase {
  static of(data) {
    return new this(data)
  }
}