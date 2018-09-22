// const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
//     if(err){
//         return console.log('Unable to connect')
//     }

//     console.log('Connected to the database.');
//     const db = client.db('TodoApp');

//     db.collection('Todos').find({_id: }).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err)
//     });


//     client.close();
// })

const MongoClient = require('mongodb').MongoClient;

(async function (){
    let client;

    try{
        client = await MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
        const db = client.db('TodoApp');
        console.log('Connected to the database');

         db.collection('Users').find({name: 'IdleSolution'}).toArray().then((user) => {
             if(user.length === 0){
                console.log('User not found');
             } else{
                 console.log(`Found ${user.length} user/s with the given name`)
                 console.log(user);
             }
         })

    } catch(err){
        console.log(err.stack)
    }

    if(client){
        client.close();
    }
})();