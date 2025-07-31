
import { TimeOptions } from './types';
import { formatTime } from './format';

/**
 * @function getCurrentTime
 * @description Gets the current time.
 * @param {TimeOptions} options
 * @returns {string}
 */
export function getCurrentTime(options: TimeOptions = {}): string {
  const now = new Date();
  return formatTime(now, options.format, options.timezone);
}
