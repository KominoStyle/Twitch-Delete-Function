// ==UserScript==
// @name         Remove HypeChat button
// @author       !♥Koͨmͧiͭnͥoͤ Style♥!
// @version      1.0.0
// @description  Free Twitch from Money Grab: Removing the HypeChat Button and Console Logging
// @match        https://www.twitch.tv/*
// @grant        none
// @license      MIT
// @updateURL    https://github.com/KominoStyle/Twitch-Delete-Function/raw/main/Delete-HypeChat.user.js
// @downloadURL  https://github.com/KominoStyle/Twitch-Delete-Function/raw/main/Delete-HypeChat.user.js
// ==/UserScript==

(function () {
  'use strict';

  function removeHypeChat(button) {
    if (button) {
      button.remove();
      console.log('%cHype-Chat deleted', 'color: #cc1141');
    }
  }

  const observer = new MutationObserver(function (mutationsList) {
    const twitchHypeChat = document.querySelector("button[aria-label='Hype Chat']");
    removeHypeChat(twitchHypeChat);
  });

  function observeDOM() {
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  window.onload = function () {
    removeHypeChat(document.querySelector("button[aria-label='Hype Chat']"));
    observeDOM();
  };
    
})();
