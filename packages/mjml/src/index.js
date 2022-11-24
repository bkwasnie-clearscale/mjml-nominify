import mjml2html, { components, assignComponents } from 'mjml-core-nominify'
import { dependencies, assignDependencies } from 'mjml-validator-nominify'
import presetCore from 'mjml-preset-core-nominify'

assignComponents(components, presetCore.components)
assignDependencies(dependencies, presetCore.dependencies)

export default mjml2html
