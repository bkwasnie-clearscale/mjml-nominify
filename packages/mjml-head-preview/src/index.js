import { HeadComponent } from 'mjml-core-snyk'

export default class MjPreview extends HeadComponent {
  static componentName = 'mj-preview'

  static endingTag = true

  handler() {
    const { add } = this.context

    add('preview', this.getContent())
  }
}
