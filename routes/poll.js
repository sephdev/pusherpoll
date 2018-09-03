const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '591095',
    key: '7594afb5d69000080b54',
    secret: 'c3852b64a3c78c7c7061',
    cluster: 'ap1',
    encrypted: true
  });

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
      });
    
      return res.json({success: true, message: 'Thank you for voting'});    
});

module.exports = router;