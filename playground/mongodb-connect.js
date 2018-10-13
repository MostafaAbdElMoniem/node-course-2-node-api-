// let MongoClient = require('mongodb').MongoClient;
let { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/',
    {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return console.log('Unable to Connect Mongo serve');
        }
        console.log('Connected Mongo serve');

        // var todoDB = client.db('TodoApp');
        // todoDB.collection('Todos').find().count().then((count) => {
        //     console.log(count);
        // }, (err) => {
        //     console.log('unable to connect DB:', err)
        // });

        let todoDB = client.db('TodoApp');
        todoDB.collection('Users').find().toArray().then((count) => console.log(count), (err) => console.log(err));
        //client.close();
    });