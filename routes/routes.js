const router = require('express').Router();
const path = require('path');
const fs = require('fs');
// const data = require('../data/data');
const reservation = require('../data/reservation.json');
const waitlist = require('../data/waitlist.json');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/waitlist', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
});

router.get('/reservations', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

router.get('/api/reservations', (req, res) => {
    res.end(JSON.stringify(reservation));
});

router.get('/api/waitlist', (req, res) => {
    res.end(JSON.stringify(waitlist));
});

router.post('/api/waitlist', (req, res) => {
    reservation = req.body;
    // console.log(reservation);
    waitlist.push(reservation);
    console.log(waitlist);
    fs.writeFile("./data/waitlist.json", JSON.stringify(waitlist), err => {
        err ? console.log(err) : console.log("Successfully written to waitlist.json");
    });
    res.end("Sucessfully added to waitlist");
});

// Code "adapted" from FinalStarWarsrouter
if (reservation.length < 5) {
    router.post('/api/reservations', (req, res) => {
        reservation.push(req.body);
    
        // reservation.customerName = reservation.name.replace(/\s+/g, '').toLowerCase();
        // console.log(reservation);
    
        // reservation.push(newReservation);
        fs.writeFile("./data/reservation.json", JSON.stringify(reservation), err => {
            err ? console.log(err) : console.log("Successfully written to reservation.json");
        });
        res.json(reservation);
    });
} else {
    router.post('/api/waitlist', (req, res) => {
        waitlist.push(JSON.stringify(req.body));

        // waitlist.customerName = waitlist.name.replace(/\s+/g, '').toLowerCase();
        // console.log(waitlist);

        // waitlist.push(newWaitlist);
        fs.writeFile("./data/waitlist.json", JSON.stringify(waitlist), err => {
            err ? console.log(err) : console.log("Successfully written to waitlist.json");
        });
        res.json(waitlist);
    });
};
module.exports = router;