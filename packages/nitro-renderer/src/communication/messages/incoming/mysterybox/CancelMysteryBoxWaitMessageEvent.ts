import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { CancelMysteryBoxWaitMessageParser } from '../../parser/mysterybox';

export class CancelMysteryBoxWaitMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CancelMysteryBoxWaitMessageParser);
    }

    public getParser(): CancelMysteryBoxWaitMessageParser
    {
        return this.parser as CancelMysteryBoxWaitMessageParser;
    }
}
