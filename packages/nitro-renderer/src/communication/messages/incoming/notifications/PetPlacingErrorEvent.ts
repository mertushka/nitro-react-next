import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { PetPlacingErrorEventParser } from '../../parser';

export class PetPlacingErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetPlacingErrorEventParser);
    }

    public getParser(): PetPlacingErrorEventParser
    {
        return this.parser as PetPlacingErrorEventParser;
    }
}
