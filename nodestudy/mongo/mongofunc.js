const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'studydb';

MongoClient.connect(url, function (err, client){
    assert.equal(null,err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection("studydb_collection", function (err, collection){
        var list = [
            {title:"我爱玩马里奥",tag:"game"},
            {title:"我喜欢Nodejs编程",tag:"it"},
            {title:"我会用MongoDB",tag:"it"},
        ];
        collection.insert(list, function (err,result) {
            assert.equal(null,err);
            client.close();
        });
    });
});

