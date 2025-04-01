// viewer.js

import { getMessageById } from './messages.js';

export function renderMessageViewer(messageId) {
  const message = getMessageById(messageId);

  const viewer = document.getElementById('message-viewer');
  if (!viewer) return;

  if (!message) {
    viewer.innerHTML = `<p class="not-found">Message not found.</p>`;
    return;
  }

  viewer.innerHTML = `
    <div class="message-header">
      <h2>${message.subject}</h2>
      <p class="meta">From: ${message.sender} | ${message.timestamp}</p>
    </div>
    <div class="message-body">
      <p>${message.body}</p>
    </div>
  `;
}