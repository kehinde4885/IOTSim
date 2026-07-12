import {EventEmitter} from 'node:events'

export class MyEmitter extends EventEmitter{} 


export const EventBus = new MyEmitter()
