import { IMessageEvent } from '#renderer/api';
import { MessageEvent } from '#renderer/events';
import { VoucherRedeemErrorMessageParser } from '../../parser';

export class VoucherRedeemErrorMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, VoucherRedeemErrorMessageParser);
    }

    public getParser(): VoucherRedeemErrorMessageParser
    {
        return this.parser as VoucherRedeemErrorMessageParser;
    }
}
