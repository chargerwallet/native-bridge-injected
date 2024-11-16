import { JsBridgeBase } from '@chargerwallet/cross-inpage-provider-core';
class JsBridgeNativeInjected extends JsBridgeBase {
    constructor() {
        super(...arguments);
        this.sendAsString = true;
        this.isInjected = true;
    }
    sendPayload(payload) {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(payload);
        }
    }
}
export { JsBridgeNativeInjected };
