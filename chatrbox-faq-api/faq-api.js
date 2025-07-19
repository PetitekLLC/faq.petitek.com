const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000; // Render uses random ports, always use process.env.PORT

const faqData = [
  { question: "How do I turn on ChatrBox?", answer: "Press and hold the power button for 2 seconds." },
  { question: "What batteries does it use?", answer: "Four AAA batteries." }
  // Add more as needed
];

app.get('/faq', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*'); // CORS so your frontend can fetch
  res.json(faqData);
});

app.get('/', (req, res) => {
  res.send('ChatrBox FAQ API is running!');
});

app.listen(PORT, () => {
  console.log(`FAQ API listening at http://localhost:${PORT}/faq`);
});
