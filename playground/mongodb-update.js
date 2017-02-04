// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58763e1c6eb8e9c7f0b6496b')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    */

     db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5895eafdd0bdc4b251218910')
    },{
        $set: {
           name: 'Andrew'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
