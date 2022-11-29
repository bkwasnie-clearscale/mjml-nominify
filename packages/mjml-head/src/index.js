import { HeadComponent } from 'mjml-core-snyk'

export default class MjHead extends HeadComponent {
  static componentName = 'mj-head'

  handler() {
    return this.handlerChildren()
  }
}
