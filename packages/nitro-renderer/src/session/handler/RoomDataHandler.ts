import { IConnection, IRoomHandlerListener } from '#renderer/api';
import { GetGuestRoomResultEvent } from '#renderer/communication';
import { RoomSessionEvent, RoomSessionPropertyUpdateEvent } from '#renderer/events';
import { EventStore } from '@nitrodevco/nitro-shared';
import { BaseHandler } from './BaseHandler';

export class RoomDataHandler extends BaseHandler
{
    constructor(connection: IConnection, listener: IRoomHandlerListener)
    {
        super(connection, listener);

        connection.addMessageEvent(new GetGuestRoomResultEvent(this.onGetGuestRoomResultEvent.bind(this)));
    }

    private onGetGuestRoomResultEvent(event: GetGuestRoomResultEvent): void
    {
        if (!(event instanceof GetGuestRoomResultEvent)) return;

        const parser = event.getParser();

        if (!parser) return;

        if (parser.roomForward) return;

        const roomSession = this.listener.getSession(this.roomId);

        if (!roomSession) return;

        const roomData = parser.data;

        roomSession.tradeMode = roomData.tradeMode;
        roomSession.isGuildRoom = (roomData.habboGroupId !== 0);
        roomSession.doorMode = roomData.doorMode;
        roomSession.allowPets = roomData.allowPets;
        roomSession.moderationSettings = parser.moderation;

        EventStore.getState().emit(new RoomSessionPropertyUpdateEvent(RoomSessionPropertyUpdateEvent.RSDUE_ALLOW_PETS, roomSession));
        EventStore.getState().emit(new RoomSessionEvent(RoomSessionEvent.ROOM_DATA, roomSession));
    }
}
