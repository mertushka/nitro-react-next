import { IMessageDataWrapper } from '#shared/api';
import { IRoomObjectModel } from '../../IRoomObjectModel';
import { RoomObjectVariableEnum } from '../../RoomObjectVariableEnum';
import { IObjectData } from '../IObjectData';
import { ObjectDataBase } from '../ObjectDataBase';
import { ObjectDataFlagsEnum } from '../ObjectDataFlagsEnum';

export class CrackableDataType extends ObjectDataBase implements IObjectData
{
    private _state: string = '';
    private _hits: number = 0;
    private _target: number = 0;

    public parseWrapper(wrapper: IMessageDataWrapper): void
    {
        this._state = wrapper.readString();
        this._hits = wrapper.readInt();
        this._target = wrapper.readInt();

        super.parseWrapper(wrapper);
    }

    public initializeFromRoomObjectModel(model: IRoomObjectModel): void
    {
        super.initializeFromRoomObjectModel(model);

        this._state = model.getValue<string>(RoomObjectVariableEnum.FurnitureCrackableState);
        this._hits = model.getValue<number>(RoomObjectVariableEnum.FurnitureCrackableHits);
        this._target = model.getValue<number>(RoomObjectVariableEnum.FurnitureCrackableTarget);
    }

    public writeRoomObjectModel(model: IRoomObjectModel): void
    {
        super.writeRoomObjectModel(model);

        model.setValue(RoomObjectVariableEnum.FurnitureDataFormat, ObjectDataFlagsEnum.Crackable);
        model.setValue(RoomObjectVariableEnum.FurnitureCrackableState, this._state);
        model.setValue(RoomObjectVariableEnum.FurnitureCrackableHits, this._hits);
        model.setValue(RoomObjectVariableEnum.FurnitureCrackableTarget, this._target);
    }

    public getLegacyString(): string
    {
        return this._state;
    }

    public compare(data: IObjectData): boolean
    {
        return true;
    }

    public get hits(): number
    {
        return this._hits;
    }

    public get target(): number
    {
        return this._target;
    }
}
