import { action, observable } from 'mobx'


class AppStore {
  @observable public selectTabbarIndex = -1

  @action.bound
  public setSelectTabbarIndex(v: number) {
    this.selectTabbarIndex = v
  }
}

export default new AppStore()
