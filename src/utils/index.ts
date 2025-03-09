import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines a list of class names into a single string, merging and cleaning up any conflicts using `clsx` and `tailwind-merge`.
 * This function ensures that only valid and non-conflicting classes are returned.
 *
 * @param {ClassValue[]} inputs - The class names or objects to be combined.
 * @returns {string} The combined and cleaned class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * The root domain of the application for production environments.
 * Used to configure URLs and other domain-specific logic.
 *
 * @constant {string} ROOT_DOMAIN - The main domain for the app in production.
 */
export const ROOT_DOMAIN = 'abincii.com'

/**
 * The port on which the application is running.
 * Defaults to 3000 if no environment variable is set.
 *
 * @constant {number|string} PORT - The port number the app listens to.
 */
export const PORT = process.env.PORT || 3000

/**
 * Checks if the current environment is development.
 * Useful for conditionally applying development-specific logic.
 *
 * @returns {boolean} Returns `true` if the environment is 'development', otherwise `false`.
 */
export const inDevEnvironment =
  !!process && process.env.NODE_ENV === 'development'

/**
 * Retrieves the root domain based on the current environment.
 * In development, it returns 'localhost' with the configured port.
 * In production, it returns the value of `ROOT_DOMAIN`.
 *
 * @returns {string} The root domain, either 'localhost:{PORT}' or the value of `ROOT_DOMAIN`.
 */
export const getRootDomain = (): string => {
  return inDevEnvironment ? `localhost:${PORT}` : ROOT_DOMAIN
}

/**
 * Checks if the current device is a mobile device.
 * Uses the user agent string to determine if the device is mobile.
 *
 * @returns {boolean} Returns `true` if the device is a mobile device, otherwise `false`.
 */
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator?.userAgent
  )
}

/**
 * Encodes a string into base64 format.
 *
 * @function encryptString
 * @param {string} str - The string to encode.
 * @returns {string} The encoded string in base64 format.
 */
export const encryptString = (str: string): string => {
  const buffer = Buffer.from(str)
  return buffer.toString('base64')
}

/**
 * Decodes a base64 encoded string back into its original form.
 *
 * @function decryptString
 * @param {string} str - The base64 encoded string to decode.
 * @returns {string} The decoded string.
 */
export const decryptString = (str: string): string => {
  const buffer = Buffer.from(str, 'base64')
  return buffer.toString()
}

/**
 * Shrinks a string to a specified length and appends an ellipsis if the string is too long.
 *
 * @function shrinkString
 * @param {string} str - The string to shrink.
 * @param {number} len - The maximum length of the string.
 * @returns {string} The string truncated to the specified length, with an ellipsis if it was shortened.
 */
export const shrinkString = ({
  str,
  len,
}: {
  str: string
  len: number
}): string => {
  if (!str) return ''
  if (str.length > len) {
    return str.substring(0, len) + '...'
  }
  return str
}
