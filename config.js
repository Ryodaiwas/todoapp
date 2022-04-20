const dbSetting = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: '8111',
  //dateStrings: process.env.dateStrings,
};

exports.dbSetting = dbSetting;
