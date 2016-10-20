const readline = require('readline');
const fs = require('fs');
const path = require('path')

var mongoose = require('./db/mongoose');

const rl = readline.createInterface({
  input: fs.createReadStream(path.resolve(__dirname, 'city.list.json'))
});

// initializeOrderedBulkOp does not work through mongoose, so use the raw connection
// for bulk insert
var mongodb = mongoose.connection.db,
  collection = mongodb.collection('cities');

collection.remove({});

var batch = collection.initializeOrderedBulkOp();

rl.on('line', function (line) {
  var city = JSON.parse(line),
  document = {
    cityId  : city._id,
    name    : city.name,
    country : city.country,
    coord   : city.coord
  }

  batch.insert(document);
});

rl.on('close', function() {
  // Execute the operations
  batch.execute(function(err, result) {
    console.dir(err);
    console.dir(result);
    mongodb.close();
  });
});
