const mongoose = require("mongoose")

//const MONGO_URL = process.env.MONGO_URL
//const MONGO_DB = process.env.MONGO_DB

function mongoConnect(mongo_url = null, mongo_db = null ) {

    //let url = mongo_url ? mongo_url: MONGO_URL 
    //let db = mongo_db ? mongo_db:  MONGO_DB
    //console.log(`Connecting MongoDB: ${url}${db}`)
    //mongoose.connect(url + db, { useNewUrlParser: true })

    const url = "mongodb://localhost:27017/"
    const db = "recipes" 
    mongoose.connect(url + db, { useNewUrlParser: true }) //"mongodb+srv://recipesAdmin:recipes@recipesclust.kxz84eq.mongodb.net/?retryWrites=true&w=majority"
    .then(()=>console.log(`Connecting MongoDB: ${url}${db}`))
    .catch((error)=>console.log(error));

    return mongoose.connection
}

function mongoDisconnect() {
    console.log(`Closing connection`)
    return mongoose.disconnect();
}

function dropCollection(collectionName) {
    console.log(`Dropping collection: ${collectionName}`)
    mongoose.connection.db.listCollections({name: collectionName})
    .next((error, collection => {
        if (collection) {
            mongoose.connection.db.dropCollection(collectionName)
            .then(() => {
                console.log(`Collection: ${collectionName} was dropped successfully`)
            })
            .catch((err) => {
                console.log(`Error while trying to drop collection: ${collectionName}. Error: ${err}`)
            })
        } else {
            console.log(`Collection: ${collectionName} does not exist`)
            throw "Collection: ${collectionName} does not exist"
        }
    }))
}

async function create(schemaObject) {
    try {
        let response = await schemaObject.save()
        return response
    } catch (error) {
        throw error
    }
}

async function update(schemaObject) {}

async function get(schemaObject, id) {
    try {
        let response = await schemaObject.findOne({ _id: id })
        return response
    } catch (error) {
        throw error
    }
}


async function list(schemaObject) {
    try {
        let response = await schemaObject.find()
        return response
    } catch (error) {
        throw error
    }
}

async function drop(schemaObject, id) {
    try {
        let response = await schemaObject.deleteOne({ _id: id })
        return response
    } catch (error) {
        throw error
    }
}

module.exports = {
    create,
    update,
    get,
    list,
    drop,
    mongoConnect,
    mongoDisconnect,
    dropCollection
}