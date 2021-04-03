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
})

router.get('/reservations', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
})

router.get('/api/reservations', (req, res) => {
    console.log(data2[1]);
})

router.post('/api/waitlist', (req, res) => {
    reservation = req.body;
    // console.log(reservation);
    waitlist.push(reservation);
    console.log(waitlist);
    fs.writeFile("./data/waitlist.json", JSON.stringify(waitlist), err => {
        err ? console.log(err) : console.log("Successfully written to waitlist.json");
    });
    res.end("Sucessfully added to waitlist");
})

// Code "adapted" from FinalStarWarsApp
app.post('/api/reservations', (req, res) => {
    if (reservation.length > 4) {
        app.post('/api/reservations', (req, res) => {
            reservation = req.body;
          
            reservation.customerName = reservation.name.replace(/\s+/g, '').toLowerCase();
            console.log(reservation);
          
            reservation.push(newReservation);
            res.json(reservation);
        });
    } else {
        reservation = req.body;
    
        reservation.customerName = reservation.name.replace(/\s+/g, '').toLowerCase();
        console.log(reservation);
    
        reservation.push(newReservation);
        res.json(reservation);
        };
});

module.exports = router;