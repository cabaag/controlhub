import express from 'express';
import fibonacci from '../src/fibonacci.js';
var router = express.Router();

router.get('/fibonacci', (req, res, next) => {
  const {iterations} = req.query
  if (iterations) {
    const value = fibonacci(iterations)
    res.send(`${value}`)
    return next()
  }
  res.send('Please enter *iterations* in query params')
});

export {
  router
};

