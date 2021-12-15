const db  = require('./index.js');
const user = require('./schemas.js');

const samplePosts =  [{
    userName: 'a',
    password: '123456',
    salt: 'thgsrghryhry',
   balance: 10000,
  },]
 



const insertSampleBlogs = function() {
  user.create(samplePosts)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleBlogs();