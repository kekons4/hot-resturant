const router = require('express').Router();
const path = require('path');
// const data = require('../data/data');
const data = require('../data/data.json');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/waitlist', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
})

router.get('/reservations', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
})

router.get('/api/reservations', (req, res) => {
    console.log(data2[1]);
})

router.post('/api/waitlist', (req, res) => {
    const newReservation = req.body;
})

module.exports = router;