/**
 * @flow
 */

const EventEmitter = require('EventEmitter');

const EmitterSubscription = require('EmitterSubscription');

class EventHandler {
  _eventEmitter: EventEmitter = new EventEmitter();

  addListener(eventName: string, foobar: () => void): EmitterSubscription {
    return this._eventEmitter.addListener(eventName, foobar);
  }

  emitEvent(eventName: string) {
    this._eventEmitter.emit(eventName);
  }
}

export default new EventHandler();
