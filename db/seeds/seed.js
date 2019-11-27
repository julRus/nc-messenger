const { userData } = require("../data");

exports.seed = function(knex) {
  // console.log(topicData);
  // console.log(articleData);
  // console.log(commentData);
  // console.log(userData);
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("usersTable")
        .insert(userData)
        .returning("*")
        .then(userTable => {
          console.log(userTable);
        });
    });
};
