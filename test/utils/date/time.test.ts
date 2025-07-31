
import { describe, it, expect } from 'vitest';
import { getCurrentTime } from '../../../src/utils/date';

describe('getCurrentTime', () => {
  it('should return the current time in the default format', () => {
    const time = getCurrentTime();
    expect(time).toMatch(/\d{2}:\d{2}:\d{2}/);
  });

  it('should return the current time in the specified format', () => {
    const time = getCurrentTime({ format: 'hh:mm a' });
    expect(time).toMatch(/\d{2}:\d{2} (AM|PM)/);
  });

  it('should return the current time in the specified timezone', () => {
    const time = getCurrentTime({ timezone: 'America/New_York' });
    expect(time).toMatch(/\d{2}:\d{2}:\d{2}-\d{2}:\d{2}/);
  });
});
