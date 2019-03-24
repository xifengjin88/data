import { StableRecordIdentifier } from './identifier';
import { ResourceIdentifierObject } from './json-api';

export interface RecordDataV1 {
  version?: '1';
  pushData(data: object, calculateChanges: boolean);
  unloadRecord();
  isRecordInUse();
  getAttr(propertyName: string);
  isAttrDirty(propertyName: string);
  changedAttributes();
  hasChangedAttributes(): boolean;
  rollbackAttributes();
  getBelongsTo(propertyName: string);
  getHasMany(propertyName: string);
  willCommit();
  didCommit(data: any);
  commitWasRejected();
  isEmpty();
  isNew();
  clientDidCreate();
  _initRecordCreateOptions(options: object): object;
  setDirtyBelongsTo(propertyName: string, value: RecordData | null);
  removeFromInverseRelationships(isNew: boolean);
  setDirtyAttribute(propertyName: string, value: any);
  addToHasMany(propertyName: string, value: RecordData[], idx?: number);
  removeFromHasMany(propertyName: string, value: RecordData[]);
  setDirtyHasMany(propertyName: string, value: RecordData[]);
  getHasMany(propertyName: string);
  getResourceIdentifier(): ResourceIdentifierObject;
}

export interface RecordDataV2 {
  version: '2';
  pushData(data: object, calculateChanges: boolean);
  unloadRecord(identifier: StableRecordIdentifier);
  isRecordInUse(identifier: StableRecordIdentifier);
  getAttr(identifier: StableRecordIdentifier, propertyName: string);
  isAttrDirty(identifier: StableRecordIdentifier, propertyName: string);
  changedAttributes(identifier: StableRecordIdentifier);
  hasChangedAttributes(identifier: StableRecordIdentifier);
  rollbackAttributes(identifier: StableRecordIdentifier);
  getRelationship(identifier: StableRecordIdentifier, propertyName: string);
  willCommit(identifier: StableRecordIdentifier);
  didCommit(identifier: StableRecordIdentifier, data: any);
  commitWasRejected(identifier: StableRecordIdentifier);
  isEmpty(identifier: StableRecordIdentifier);
  isNew(identifier: StableRecordIdentifier);
  clientDidCreate(identifier: StableRecordIdentifier, options: object);
  setBelongsTo(identifier: StableRecordIdentifier, propertyName: string, value: RecordData | null);
  removeFromInverseRelationships(identifier: StableRecordIdentifier, isNew: boolean);
  setAttribute(identifier: StableRecordIdentifier, propertyName: string, value: any);
  addToHasMany(identifier: StableRecordIdentifier, propertyName: string, value: RecordData[]);
  removeFromHasMany(identifier: StableRecordIdentifier, propertyName: string, value: RecordData[]);
  setHasMany(identifier: StableRecordIdentifier, propertyName: string, value: RecordData[]);
}

export interface EmberDataRecordData extends RecordDataV1 {
  _relationships: object;
}

export type RecordData = RecordDataV1 | RecordDataV2 | EmberDataRecordData;
