import { MouseEventType } from '@nitrodevco/nitro-renderer';

let canPlaySound = false;

export const PlaySound = (sampleCode: string) =>
{
    if (!canPlaySound) return;

    //DispatchMainEvent(new NitroSoundEvent(NitroSoundEvent.PLAY_SOUND, sampleCode));
};

const eventTypes = [MouseEventType.MOUSE_CLICK];

const startListening = () =>
{
    const stopListening = () => eventTypes.forEach(type => window.removeEventListener(type, onEvent));

    const onEvent = (event: Event) =>
    {
        canPlaySound = true;

        stopListening();
    };

    eventTypes.forEach(type => window.addEventListener(type, onEvent));
};

startListening();
