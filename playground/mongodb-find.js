// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    /*
    db.collection('Todos').find({
        _id: new ObjectID('587555bf860e251e17867618')
    }).toArray().then( (docs) => { 
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {

    });

    db.collection('Todos').find().count().then( (count) => {
        console.log(`Todo count:${count}`); 
    },(err) => {

    });
    */

    db.collection('Todos').find({name: 'Andrew'}).toArray().then( (docs) => { 
        console.log(JSON.stringify(docs,undefined,2));
    });


    db.close();
});
