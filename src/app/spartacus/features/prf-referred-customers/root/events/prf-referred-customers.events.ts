import { CxEvent } from '@spartacus/core';

export abstract class ReferredCustomersEvent extends CxEvent {
  userId?: string;
}

export class DeleteReferredCustomersEvent extends ReferredCustomersEvent {
  email?: string;
  static readonly type = 'DeleteReferredCustomersEvent';
}

export class LoadReferredCustomersEvent extends ReferredCustomersEvent {
  static readonly type = 'LoadReferredCustomersEvent';
}
