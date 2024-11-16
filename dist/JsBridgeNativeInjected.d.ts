import { IJsBridgeMessagePayload } from '@chargerwallet/cross-inpage-provider-types';
import { JsBridgeBase } from '@chargerwallet/cross-inpage-provider-core';
declare class JsBridgeNativeInjected extends JsBridgeBase {
    sendAsString: boolean;
    isInjected: boolean;
    sendPayload(payload: IJsBridgeMessagePayload | string): void;
}
export { JsBridgeNativeInjected };
