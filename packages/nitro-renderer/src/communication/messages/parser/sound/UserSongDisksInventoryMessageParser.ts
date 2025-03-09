import { IAdvancedMap, IMessageDataWrapper, IMessageParser } from '#renderer/api';
import { AdvancedMap } from '#renderer/utils';

export class UserSongDisksInventoryMessageParser implements IMessageParser
{
    private _songDiskInventory: IAdvancedMap<number, number> = new AdvancedMap();

    public flush(): boolean
    {
        this._songDiskInventory.reset();
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        const count = wrapper.readInt();

        for (let i = 0; i < count; i++)
        {
            this._songDiskInventory.add(wrapper.readInt(), wrapper.readInt());
        }
        return true;
    }

    public getDiskId(k: number): number
    {
        if (((k >= 0) && (k < this._songDiskInventory.length)))
        {
            return this._songDiskInventory.getKey(k);
        }
        return -1;
    }

    public getSongId(k: number): number
    {
        if (((k >= 0) && (k < this._songDiskInventory.length)))
        {
            return this._songDiskInventory.getWithIndex(k);
        }
        return -1;
    }

    public get songDiskCount(): number
    {
        return this._songDiskInventory.length;
    }
}
