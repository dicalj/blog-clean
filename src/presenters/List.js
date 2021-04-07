export default class List {
  constructor() {
    this.data = []
  }
  clean() {
    this.data = []
  }
  [Symbol.iterator]() { 
    return this.data.values() 
  }
}