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
        closure(db, client);
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
const getByCollection = collection => {
    connection((db) => {
        db.collection(collection)
            .find()
            .toArray()
            .then((data) => {
                response.data = data;
                result = response;
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
}

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

//Get todos
router.get('/todos', (req, res) => {
    connection((db) => {
        db.collection('todos')
        .find()
        .toArray()
        .then((todos) => {
            response.data = todos;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });
    });
});

//Update todos
router.put('/todos', (req, res) => {
    const { id, userId, completed } = req.body;
    connection((db, client) => {
        db.collection("todos")
        .updateOne({ id, userId }, { $set: { completed } }, function(err, res) {
            if (err) throw err;
            console.log(`Todo: ${JSON.stringify({ id, userId })} is updated`);
            client.close();
        });
    });
});

//Delete todo
router.delete('/todos/:_id', (req, res) => {
    connection((db, client) => {
        db.collection("todos")
        .deleteOne({_id: ObjectID(req.params._id)},  function(err, res) {
            if (err) throw err;
            console.log(`Todo: ${req.params._id} is Deleted`);
            client.close();
        });
    });
});

module.exports = router;