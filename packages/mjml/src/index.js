import mjml2html, { components, assignComponents } from 'mjml-core-snyk'
import { dependencies, assignDependencies } from 'mjml-validator-snyk'
import presetCore from 'mjml-preset-core-snyk'

assignComponents(components, presetCore.components)
assignDependencies(dependencies, presetCore.dependencies)

export default mjml2html
