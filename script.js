// script.js
const events = [
  "Music Fest 2025",
  "Tech Conference 2025",
  "Food Carnival",
  "Art & Culture Expo",
  "Startup Pitch Day"
];

function addRandomEvent() {
  const eventList = document.getElementById('eventList');
  const random = events[Math.floor(Math.random() * events.length)];
  const div = document.createElement('div');
  div.textContent = `🎉 ${random}`;
  div.style.margin = '10px 0';
  div.style.fontWeight = 'bold';
  div.style.color = '#e91e63';
  eventList.appendChild(div);
}
