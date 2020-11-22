mongodb cheat sheet: https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

- open compass application

- open terminal

to start:

`$ brew services start mongodb-community@4.4`

to stop:

`$ brew services stop mongodb-community@4.4`

to start mongo shell:

`$ mongo`


`$ show dbs`

to switch to an existing db /create a new db:

`$ use test1`

to drop a db, enter it first then run: 

`$ db.dropDatabase()`

to show what database youre in:

`$ db`

* note: if you're in a database and you run `$ show dbs`, the one you're in won't come up:

===

to create a collection in a db run:

`$ db.createCollection('posts')`

to show collections:

`$ show collections`

to insert a record: 

`$ db.posts.insert({
    title: 'Post One',
    body: 'Body of post one',
    category: 'News',
    likes: 4,
    tags: ['news', 'events'],
    user: {
        name: 'John Doe',
        status: 'Author'
    },
    date: Date()
})`


`insertMany` to insert an array of posts:

`$ db.posts.insertMany([
    {
        title: 'Post Two',
        body: 'Body of post two',
        category: 'Sport',
        likes: 2,
        tags: ['sport', 'events'],
        user: {
            name: 'Jane Doe',
            status: 'Author'
        },
        date: Date()
    },
    {
        title: 'Post Three',
        body: 'Body of post three',
        category: 'Art',
        likes: 4,
        tags: ['art', 'events'],
        user: {
            name: 'Fulan',
            status: 'Author'
        },
        date: Date()
    },
    {
        title: 'Post Four',
        body: 'Body of post four',
        category: 'News',
        likes: 4,
        tags: ['news', 'events'],
        user: {
            name: 'Abdullah',
            status: 'Author'
        },
        date: Date()
    }
])`


to find:

`$ db.posts.find()`

`$ db.posts.find().pretty()`

`$ db.posts.find({ category: 'News'})`

`$ db.posts.findOne({ category: 'News'})`


to sort:

`$ db.posts.find().sort({title: 1}).pretty()`


to count: 

`$ db.posts.find({category: 'News'}).count()`

to limit:

`$ db.posts.find({category: 'News'}).sort({title: -1}).limit(2)`


for Each

`$ db.posts.find().forEach(function(doc) { print('Blog Post: ' + doc.title ) })`


update: 

// this will replace the entire thing

`$ db.posts.update({ title: 'Post Two' }, 
{
    title: 'Post Two',
    body: 'New post 2 body',
    date: Date()
},
{
    upsert: true
})`

// to update 1 or two fields and keep the rest

`$ db.posts.update(
    { title: 'Post Two' }, 
    {
        $set: {
            body: 'New post 2 body',
            category: 'Technology'
        }
    }
)`

// increment

`$ db.posts.update(
    {title: 'Post One'}, 
    {
        $inc: {likes: 1}
    }
)`

// rename

`$ db.posts.update(
    {title: 'Post One'}, 
    {
        $rename: {likes: 'views'}
    }
)`

// delete

`$ db.posts.remove({title: 'Post Four'})`


// adding comments

`$ db.posts.update(
    { title: 'Post Two' }, 
    {
        $set: {
            comments: [
                {
                    user: 'Mary Williams',
                    body: 'Comment One',
                    date: Date()                                   
                },
                {
                    user: 'Mohamed White',
                    body: 'Comment Two',
                    date: Date()                                   
                },
            ]
        }
    }
)`


// to find all posts where mary williams commented

`$ 
    db.posts.find({
        comments: { 
            $elemMatch: {
                user: 'Mary Williams'
            }  
        } 
    }).pretty()
`

// text search

`$ db.posts.createIndex({ title: 'text' })`

`$ db.posts.find({ 
    $text: {
        $search: "\"Post O\""
    }
    })`


// to exit shell

`$ exit`
