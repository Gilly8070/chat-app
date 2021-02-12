const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.send({ response:'Server is up and running.'}).status(200);
});

// router.use(express.static('client/build'));

// router.get('*', (req,res) => 
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// )

module.exports = router;