import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { RoomUnitDanceParser } from '../../../parser';

export class RoomUnitDanceEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitDanceParser);
    }

    public getParser(): RoomUnitDanceParser
    {
        return this.parser as RoomUnitDanceParser;
    }
}
