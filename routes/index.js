import express from 'express';
import fs from 'fs';
import marked from 'marked';
var router = express.Router();

router.get('/', (req, res) => {
  var path = new URL('./../README.md', import.meta.url);
  var file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
});

export {
  router
};

