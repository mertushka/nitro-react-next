import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { TalentTrackParser } from '../../parser';

export class TalentTrackMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TalentTrackParser);
    }

    public getParser(): TalentTrackParser
    {
        return this.parser as TalentTrackParser;
    }
}
