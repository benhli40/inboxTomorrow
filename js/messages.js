// messages.js

const messages = [
  {
    id: 'msg001',
    sender: 'Echo Node 7B',
    subject: 'Your future is folding in',
    timestamp: '2049-11-03 14:22',
    body: `This is not the first time you've read this message. 
You are approaching a convergence. Pack light. Trust the red door.`
  },
  {
    id: 'msg002',
    sender: 'Dream Agent 6',
    subject: 'You almost woke up',
    timestamp: '2049-11-04 03:12',
    body: `You were close, very close. The glass cracked but didn’t shatter. 
Next time, remember the code word: "lighthouse".`
  },
  {
    id: 'msg003',
    sender: 'Archive Omega',
    subject: 'Unauthorized memory retrieval detected',
    timestamp: '2049-11-05 20:47',
    body: `Your request to access forbidden memory sectors has been logged.
Continue at your own risk. Curiosity has consequences.`
  }, 
  {
    id: 'msg004',
    sender: 'Quantum Relay 9',
    subject: 'Time is a loop',
    timestamp: '2049-11-06 11:15',
    body: `You are not where you think you are.'
The past and future are converging.
You must find the Nexus Point to stabilize your timeline.`
  },
  {
    id: 'msg005',
    sender: 'Echo Node 7B',
    subject: 'The key is in the shadows',
    timestamp: '2049-11-07 09:30',
    body: `The answer lies in the darkness. The shadows hold the key to your past.
Follow the whispers and you will find the truth.`
  },
  {
    id: 'msg006',
    sender: 'Dream Agent 6',
    subject: 'The lighthouse is a trap',
    timestamp: '2049-11-08 02:45',
    body: `You were warned. The lighthouse is not what it seems.
It is a beacon for the lost. It is a prison for the damned.
The code word is a lie.`
  }
];

export function getMessageById(id) {
  return messages.find(msg => msg.id === id);
}

export function getAllMessages() {
  return messages;
}