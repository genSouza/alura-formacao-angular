import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedId = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) throw Error('Prefix can not be empty');

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedId++;

    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedId;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
