// 'use strict'

chrome.action.onClicked.addListener(() => {
    // Установите поведение панели, чтобы она открывалась при нажатии
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  });