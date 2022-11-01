//  Add your code here
const { Schema, model } = require("mongoose");
const CelebritySchema = new Schema({
  name: { String },
  occupation: { String },
  catchPhrase: { String },
});

// const data = { name: 'Brad Pitt', occupation: 'ironhack2018'};
 
// The same code as above but with a Promise version
// User.create(data)
//   .then(user => console.log('The user is saved and its value is: ', user))
//   .catch(error => console.log('An error happened while saving a new user:', error));

// const celebrity = model("celebrity", CelebritySchema);
// celebrity.create(celebrities)
//   .then((booksFromDB) => {
//     console.log(`Created ${booksFromDB.length} books`);

//     // Once created, close the DB connection
//     mongoose.connection.close();
//   })
//   .catch((err) =>
//     console.log(`An error occurred while creating books from the DB: ${err}`)
//   );
module.exports = model('Celebrity', CelebritySchema);
