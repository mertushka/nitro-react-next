import { AvatarAction, RoomObjectVariable } from '@nitrodevco/nitro-renderer';
import { GetOwnRoomObject } from '../room';

export function GetOwnPosture(): string
{
    const roomObject = GetOwnRoomObject();

    if (!roomObject) return AvatarAction.POSTURE_STAND;

    const model = roomObject.model;

    return model.getValue<string>(RoomObjectVariable.FIGURE_POSTURE);
}
