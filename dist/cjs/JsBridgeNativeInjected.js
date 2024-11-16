"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsBridgeNativeInjected = void 0;
const cross_inpage_provider_core_1 = require("@chargerwallet/cross-inpage-provider-core");
class JsBridgeNativeInjected extends cross_inpage_provider_core_1.JsBridgeBase {
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
exports.JsBridgeNativeInjected = JsBridgeNativeInjected;
