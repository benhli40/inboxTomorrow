// script.js

import { renderInbox } from './inbox.js';
import { renderMessageViewer } from './viewer.js';

// Initial render on page load
window.addEventListener('DOMContentLoaded', () => {
  renderInbox();

  const currentId = window.location.hash.substring(1);
  if (currentId) {
    renderMessageViewer(currentId);
  }
});

// Re-render viewer when a different message is selected
window.addEventListener('hashchange', () => {
  const messageId = window.location.hash.substring(1);
  renderMessageViewer(messageId);
});