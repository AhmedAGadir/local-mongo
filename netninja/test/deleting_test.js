const assert = require('assert');

const MarioChar = require('../models/mariochar');

describe('Deleting records', () => {

    var char;

    beforeEach(done => {
        char = new MarioChar({
            name: 'Luigi',
            weight: 70
        });

        char.save()
            .then(() => {
                done();
            });
    })

    it('Deletes one record from the database', done => {
        MarioChar
            .findOneAndRemove({ name: 'Luigi' })
            .then(() => {
                MarioChar
                    .findOne({ name: 'Luigi' })
                    .then(result => {
                        assert(result === null);
                        done();
                    });
            })
    });

});
