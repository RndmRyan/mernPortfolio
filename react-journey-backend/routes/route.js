const express = require('express');
const router = express.Router();
const { selectRandomWord, isWordInList, checkLetters } = require('../models/model');

let targetWord = '';


router.get('/getword', (req, res) => {
  targetWord = selectRandomWord();
  res.json({ word: targetWord });
});



router.post('/evaluate', (req, res) => {
  const { guess } = req.body;

  if (!isWordInList(guess)) {
    res.json({ message: 'Not in list' });
  } else {
    const evaluation = checkLetters(guess, targetWord);
    res.json(evaluation);
  }
});


module.exports = router;