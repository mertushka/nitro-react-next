import { IMessageDataWrapper, IMessageParser } from '#renderer/api';
import { PlayListEntry } from './PlayListEntry';

export class PlayListSongAddedMessageParser implements IMessageParser
{
    private _entry: PlayListEntry;

    public flush(): boolean
    {
        this._entry = null;
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        this._entry = new PlayListEntry(wrapper.readInt(), wrapper.readInt(), wrapper.readString(), wrapper.readString());
        return true;
    }

    public get entry(): PlayListEntry
    {
        return this._entry;
    }
}
