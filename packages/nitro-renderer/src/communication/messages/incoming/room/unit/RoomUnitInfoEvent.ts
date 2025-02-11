import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { RoomUnitInfoParser } from '../../../parser';

export class RoomUnitInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitInfoParser);
    }

    public getParser(): RoomUnitInfoParser
    {
        return this.parser as RoomUnitInfoParser;
    }
}
