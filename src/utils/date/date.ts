
import { DateOptions } from './types';
import { formatDate } from './format';

/**
 * @function getCurrentDate
 * @description Gets the current date.
 * @param {DateOptions} options
 * @returns {string}
 */
export function getCurrentDate(options: DateOptions = {}): string {
  const today = new Date();
  return formatDate(today, options.format, options.locale);
}
