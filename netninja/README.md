Download mongodb locally

https://www.mongodb.com/try/download/community

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/


To have launchd start mongodb/brew/mongodb-community now and restart at login:

brew services start mongodb/brew/mongodb-community

Or, if you don't want/need a background service you can just run:

mongod --config /usr/local/etc/mongod.conf


To run MongoDB (i.e. the mongod process) as a macOS service, issue the following:

`$ brew services start mongodb-community@4.4`

To stop a mongod running as a macOS service, use the following command as needed:

`$ brew services stop mongodb-community@4.4`

If you started MongoDB as a macOS service:

`$ brew services list`
You should see the service mongodb-community listed as started.


----

run
`$ node test/connection.js`

for tests:
`$ npm run tests`


--- 

for GUI:
- open robomongo (https://robomongo.org/)
- and create a new connection


