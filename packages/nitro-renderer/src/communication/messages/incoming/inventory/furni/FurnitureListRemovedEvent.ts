import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { FurnitureListRemovedParser } from '../../../parser';

export class FurnitureListRemovedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureListRemovedParser);
    }

    public getParser(): FurnitureListRemovedParser
    {
        return this.parser as FurnitureListRemovedParser;
    }
}
