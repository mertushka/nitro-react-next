import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { NotEnoughBalanceMessageParser } from '../../parser';

export class NotEnoughBalanceMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NotEnoughBalanceMessageParser);
    }

    public getParser(): NotEnoughBalanceMessageParser
    {
        return this.parser as NotEnoughBalanceMessageParser;
    }
}
