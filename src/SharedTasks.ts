import { camelCase, pascalCase } from 'change-case'

/**
 * Converts the casing of a string.
 *
 * @export
 * @param {string} name The name to convert.
 * @param {string} caseType The case type to convert into.
 * @returns The converted name.
 */
export function convertCase (name: string, caseType: string) {
  /** removes any number at the beginning of the string */
  const scapedName = name.replace(/^([0-9]+)/g, "");

  switch (caseType) {
    case 'pascal':
      return pascalCase(scapedName)
    case 'camel':
      return camelCase(scapedName)
    case 'lower':
      return scapedName.toLowerCase()
    case 'upper':
      return scapedName.toUpperCase()
    default:
      return scapedName
  }
}
