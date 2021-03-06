import { action, observable } from 'mobx'

class CounterStore {
  @observable counter = 0

  @action.bound
  counterStore() {
    this.counter++
  }

  @action.bound
  increment() {
    this.counter++
  }

  @action.bound
  decrement() {
    this.counter--
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

export default new CounterStore()
