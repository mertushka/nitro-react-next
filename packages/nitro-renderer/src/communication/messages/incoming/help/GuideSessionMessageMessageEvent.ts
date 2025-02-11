import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { GuideSessionMessageMessageParser } from '../../parser';

export class GuideSessionMessageMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionMessageMessageParser);
    }

    public getParser(): GuideSessionMessageMessageParser
    {
        return this.parser as GuideSessionMessageMessageParser;
    }
}
