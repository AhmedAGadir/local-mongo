// not needed 
// const mocha = require('mocha');
const assert = require('assert');

const MarioChar = require('../models/mariochar');

describe('Saving records', () => {

    it('Saves a record to the database', done => {

        // new instance of MarioChar model 
        var char = new MarioChar({
            name: 'Bowser',
            weight: 95
        });

        char.save()
            .then(() => {
                // isNew === false when the instance has been created and saved to the db
                assert(char.isNew === false);
                done();
            });

    });

});
