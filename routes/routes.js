const router = require('express').Router();
const path = require('path');
const data = require('../data/data');

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

})

router.post('/api/waitlist', (req, res) => {
    const newReservation = req.body;
})

module.exports = router;