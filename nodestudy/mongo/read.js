const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'studydb';

MongoClient.connect(url, function (err, client){
    assert.equal(null,err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection("studydb_collection", function (err, collection){
        collection.find({tag:"game"}).toArray(function (err,docs) {
            assert.equal(null,err);
            console.log(docs);
            client.close();
        });
    });
});