import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { ModeratorToolPreferencesMessageParser } from '../../parser';

export class ModeratorToolPreferencesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorToolPreferencesMessageParser);
    }

    public getParser(): ModeratorToolPreferencesMessageParser
    {
        return this.parser as ModeratorToolPreferencesMessageParser;
    }
}
