import { DOMMessage, DOMMessageResponse } from "../types";
import isTextInput from "./DOMEDetectLogInPage";

const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log("[content.js]. Message received", msg);

  const inputDom = document.getElementsByTagName<"input">("input");
  const isContainPasswordInput = document.getElementById("password");

  if (inputDom) {
    const outPutArr = Array.from(inputDom).map((dom) => {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (regex.test(dom.value)) {
        return dom.value;
      }
    });
    const filterArr = outPutArr.filter((item) => item);
    const response: DOMMessageResponse = {
      title: document.title,
      headlines: filterArr,
    };

    console.log("[content.js]. Message response", response);
    sendResponse(response);
  }
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
