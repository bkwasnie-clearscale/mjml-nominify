import { HeadComponent } from 'mjml-core-cs-nominify'

export default class MjTitle extends HeadComponent {
  static componentName = 'mj-title'

  static endingTag = true

  handler() {
    const { add } = this.context

    add('title', this.getContent())
  }
}
