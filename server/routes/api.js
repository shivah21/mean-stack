const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var assert = require('assert');

const mongodbUrl = 'mongodb://localhost:27017/';
const mongoCollection = 'meanUsers';

// Connect
const connection = (closure) => {
    return MongoClient.connect(mongodbUrl, (err, client) => {
        if (err) return console.log(err);
        const db = client.db(mongoCollection);
        closure(db);
    });
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Generic collection
// const getByCollection = collection => {
//     connection((db) => {
//         db.collection(collection)
//             .find()
//             .toArray()
//             .then((data) => {
//                 response.data = data;
//                 result = response;
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
//     return result;
// }

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Get posts
router.get('/posts', (req, res) => {
    connection((db) => {
        db.collection('posts')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;