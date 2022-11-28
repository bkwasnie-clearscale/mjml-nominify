import { HeadComponent } from 'mjml-core-cs-nominify'

export default class MjHead extends HeadComponent {
  static componentName = 'mj-head'

  handler() {
    return this.handlerChildren()
  }
}
