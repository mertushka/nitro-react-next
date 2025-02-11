import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { BannedUsersFromRoomParser } from '../../parser';

export class BannedUsersFromRoomEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BannedUsersFromRoomParser);
    }

    public getParser(): BannedUsersFromRoomParser
    {
        return this.parser as BannedUsersFromRoomParser;
    }
}
