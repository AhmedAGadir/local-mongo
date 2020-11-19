const mongoose = require('mongoose');

// ES6 Promises
// mongoose.Promise = global.promise // not needed

before(done => {
    // Connect to mongodb
    // database named testaroo
    mongoose.connect("mongodb://localhost/testaroo", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => {
        console.log('Connected to mongodb database "testaroo"');
        done();
    }).on('error', err => {
        console.log('Connection error', err);
    });
});

// drop the char collection before each test
beforeEach(function (done) {
    // drop the collection
    mongoose
        .connection
        .collections
        .mariochars
        .drop(() => {
            done();
        });

})
