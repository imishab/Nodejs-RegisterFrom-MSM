const mongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};

module.exports.connect = function (done) {
  const url =
    "mongodb+srv://thevectorcrop:msb.com001@msm-north.wdg9p9h.mongodb.net/?retryWrites=true&w=majority";
  const dbname = "msmregfrom";

  mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) {
      return done(err);
    }
    state.db = data.db(dbname);

    done();
  });
};

module.exports.get = function () {
  return state.db;
};
