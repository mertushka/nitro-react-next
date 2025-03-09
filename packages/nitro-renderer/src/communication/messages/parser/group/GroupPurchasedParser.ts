import { IMessageDataWrapper, IMessageParser } from '#renderer/api';

export class GroupPurchasedParser implements IMessageParser
{
    private _roomId: number;
    private _groupId: number;

    public flush(): boolean
    {
        this._roomId = 0;
        this._groupId = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if (!wrapper) return false;

        this._roomId = wrapper.readInt();
        this._groupId = wrapper.readInt();

        return true;
    }

    public get roomId(): number
    {
        return this._roomId;
    }

    public get guildId(): number
    {
        return this._groupId;
    }
}
