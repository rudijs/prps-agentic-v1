
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

/**
 * @function formatTime
 * @description Formats a time value.
 * @param {Date} date
 * @param {string} format
 * @param {string} timezone
 * @returns {string}
 */
export function formatTime(date: Date, formatStr?: string, timezone?: string): string {
  if (timezone) {
    try {
      return formatInTimeZone(date, timezone, formatStr || 'HH:mm:ssXXX');
    } catch {
      console.warn(`Unsupported timezone: ${timezone}. Falling back to ISO string.`);
      return date.toISOString();
    }
  }
  return format(date, formatStr || 'HH:mm:ss');
}

/**
 * @function formatDate
 * @description Formats a date value.
 * @param {Date} date
 * @param {string} format
 * @returns {string}
 */
export function formatDate(date: Date, formatStr?: string): string {
  // date-fns does not directly support locale in the same way as Intl.DateTimeFormat.
  // The locale is loaded globally. For this implementation, we will not use the locale parameter.
  return format(date, formatStr || 'yyyy-MM-dd');
}
