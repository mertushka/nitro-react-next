import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { LoveLockFurniStartParser } from '../../../parser';

export class LoveLockFurniStartEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LoveLockFurniStartParser);
    }

    public getParser(): LoveLockFurniStartParser
    {
        return this.parser as LoveLockFurniStartParser;
    }
}
