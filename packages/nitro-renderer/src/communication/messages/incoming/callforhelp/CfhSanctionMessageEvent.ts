import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { CfhSanctionMessageParser } from '../../parser';

export class CfhSanctionMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CfhSanctionMessageParser);
    }

    public getParser(): CfhSanctionMessageParser
    {
        return this.parser as CfhSanctionMessageParser;
    }
}
