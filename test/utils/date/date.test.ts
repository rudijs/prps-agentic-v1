
import { describe, it, expect } from 'vitest';
import { getCurrentDate } from '../../../src/utils/date';

describe('getCurrentDate', () => {
  it('should return the current date in the default format', () => {
    const date = getCurrentDate();
    expect(date).toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it('should return the current date in the specified format', () => {
    const date = getCurrentDate({ format: 'MM/dd/yyyy' });
    expect(date).toMatch(/\d{2}\/\d{2}\/\d{4}/);
  });
});
