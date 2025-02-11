import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { PetBreedingResultParser } from '../../../parser';

export class PetBreedingResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetBreedingResultParser);
    }

    public getParser(): PetBreedingResultParser
    {
        return this.parser as PetBreedingResultParser;
    }
}
