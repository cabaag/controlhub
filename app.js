import express from 'express'
import cookieParser from 'cookie-parser'

import { router as indexRouter } from './routes/index.js'
import { router as apiRouter } from './routes/api.js'

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/v1', apiRouter);

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Please enter http://localhost:${PORT}` )
})
