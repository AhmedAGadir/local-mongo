const mongoose = require('mongoose');
const Author = require('../models/authors');
const assert = require('assert');

describe('Nesting records', () => {

    beforeEach(done => {
        mongoose.connection.collections.authors.drop(() => done());
    })

    it('Creates an author with sub-documents', done => {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{ title: 'Name of the Wind', pages: 400 }]
        });

        pat.save()
            .then(() => {
                Author
                    .findOne({ name: 'Patrick Rothfuss' })
                    .then(record => {
                        assert(record.books.length === 1);
                        done();
                    });
            });
    });

    it('Adds a book to an author', done => {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{ title: 'Name of the Wind', pages: 400 }]
        });

        pat.save()
            .then(() => {
                Author
                    .findOne({ _id: pat._id })
                    .then(record => {
                        // add a book to the books collection/array
                        record.books.push({ title: "Wise Man's Fear", pages: 500 });
                        record
                            .save()
                            .then(() => {
                                Author
                                    .findOne({ _id: pat._id })
                                    .then(record => {
                                        assert(record.books.length === 2);
                                        done();
                                    })
                            })
                    });
            });
    });

});