import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'ok' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
