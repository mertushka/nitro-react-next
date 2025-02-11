import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { PetReceivedMessageParser } from '../../../parser';

export class PetReceivedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetReceivedMessageParser);
    }

    public getParser(): PetReceivedMessageParser
    {
        return this.parser as PetReceivedMessageParser;
    }
}
