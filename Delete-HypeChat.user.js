// ==UserScript==
// @name         Remove HypeChat button
// @author       !♥Koͨmͧiͭnͥoͤ Style♥!
// @version      1.0.1
// @description  Free Twitch from Money Grab: Removing the HypeChat Button and Console Logging
// @match        https://www.twitch.tv/*
// @grant        none
// @license      MIT
// @updateURL    https://github.com/KominoStyle/Twitch-Delete-Function/raw/main/Delete-HypeChat.user.js
// @downloadURL  https://github.com/KominoStyle/Twitch-Delete-Function/raw/main/Delete-HypeChat.user.js
// ==/UserScript==

(function () {
  'use strict'

  function removeHypeChatButton(button) {
    if (button) {
      button.remove()
      console.log('%cHype-Chat button deleted', 'color: #cc1141')
    }
  }

  function removePinnedHypeChat(div) {
    if (div) {
      div.remove()
      console.log('%cHype-Chat pinned Message deleted', 'color: #cc1141')
    }
  }

  const observer = new MutationObserver(function (mutationsList) {
    const twitchHypeChatButton = document.querySelector("button[aria-label='Hype Chat']")
	const twitchPinnedHypeChat = document.querySelector("div.paid-pinned-chat-message-list")
    removeHypeChatButton(twitchHypeChatButton)
	removePinnedHypeChat(twitchPinnedHypeChat)
  })

  function observeDOM() {
    observer.observe(document.documentElement, { childList: true, subtree: true })
  }

  window.onload = function () {
    removeHypeChatButton(document.querySelector("button[aria-label='Hype Chat']"))
    observeDOM()
  }
})()
