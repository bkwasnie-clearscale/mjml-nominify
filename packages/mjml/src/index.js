import mjml2html, { components, assignComponents } from 'mjml-core-cs-nominify'
import { dependencies, assignDependencies } from 'mjml-validator-cs-nominify'
import presetCore from 'mjml-preset-core-cs-nominify'

assignComponents(components, presetCore.components)
assignDependencies(dependencies, presetCore.dependencies)

export default mjml2html
