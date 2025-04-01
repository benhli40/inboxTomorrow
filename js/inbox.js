// inbox.js

import { getAllMessages } from './messages.js';

export function renderInbox() {
  const inboxContainer = document.getElementById('inbox');
  if (!inboxContainer) return;

  const messages = getAllMessages();

  inboxContainer.innerHTML = messages.map(message => `
    <div class="inbox-item" data-id="${message.id}">
      <h3>${message.subject}</h3>
      <p class="meta">From: ${message.sender}</p>
      <p class="preview">${message.body.substring(0, 60)}...</p>
    </div>
  `).join('');

  // Attach click events to open message
  const items = inboxContainer.querySelectorAll('.inbox-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      window.location.hash = id; // triggers viewer.js
    });
  });
}