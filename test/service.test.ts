import { describe, expect, it, vi } from 'vitest';
import { Database, Service } from '../src/database';

describe('Service', () => {
  it('should return processed data from the mocked database', () => {
    // Create a mock for the Database class
    const mockDatabase: Database = {
      getData: vi.fn(() => 'Mocked data from the database'),
    };

    // Inject the mock database into the Service
    const service = new Service(mockDatabase);

    // Call the method that uses the injected dependency
    const result = service.getProcessedData();

    // Assertions
    expect(result).toBe('Processed: Mocked data from the database');
    expect(mockDatabase.getData).toHaveBeenCalledTimes(1);
  });
});
