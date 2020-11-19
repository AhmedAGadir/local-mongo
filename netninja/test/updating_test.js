const assert = require('assert');

const MarioChar = require('../models/mariochar');

describe('Updating records', () => {

    var char;

    beforeEach(done => {
        char = new MarioChar({
            name: 'Princess Peach',
            weight: 50
        });

        char.save()
            .then(() => {
                done();
            });
    })

    it('Updates one record from the database', done => {
        MarioChar
            .findOneAndUpdate({ name: 'Princess Peach' }, { weight: 65 })
            .then(() => {
                MarioChar
                    .findOne({ _id: char._id })
                    .then(result => {
                        assert(result.weight === 65);
                        done();
                    });
            })
    });

    it('Increments all char weights by 1', done => {
        MarioChar.update({}, { $inc: { weight: 1 } })
            .then(() => {
                MarioChar
                    .findOne({ name: 'Princess Peach' })
                    .then(record => {
                        assert(record.weight === 51);
                        done();
                    });
            })
    })

});
