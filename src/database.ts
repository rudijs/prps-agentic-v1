export class Database {
  getData(): string {
    return "Real data from the database";
  }
}

export class Service {
  private db: Database;

  constructor(database: Database) {
    this.db = database;
  }

  getProcessedData(): string {
    const data = this.db.getData();
    return `Processed: ${data}`;
  }
}
