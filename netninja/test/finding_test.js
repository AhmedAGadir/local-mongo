const assert = require('assert');

const MarioChar = require('../models/mariochar');

describe('Finding records', () => {

    var char;

    beforeEach(done => {
        // new instance of MarioChar model 
        char = new MarioChar({
            name: 'Toad',
        });

        char.save()
            .then(() => {
                done();
            });
    })

    it('Finds one record from the database', done => {
        // gets all records
        // MarioChar.find({})

        MarioChar
            .findOne({ name: 'Toad' })
            .then(result => {
                assert(result.name === 'Toad');
                done();
            });
    });

    it('Finds one record by ID from the database', done => {
        MarioChar
            .findOne({ _id: char._id })
            .then(result => {
                assert(result._id.toString() === char._id.toString());
                done();
            });
    });

});
