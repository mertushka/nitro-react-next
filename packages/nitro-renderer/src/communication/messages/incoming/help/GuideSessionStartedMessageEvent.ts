import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { GuideSessionStartedMessageParser } from '../../parser';

export class GuideSessionStartedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionStartedMessageParser);
    }

    public getParser(): GuideSessionStartedMessageParser
    {
        return this.parser as GuideSessionStartedMessageParser;
    }
}
