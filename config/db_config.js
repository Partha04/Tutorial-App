var mysql = require('mysql')
var db_config = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tutorial_app'
})
db_config.connect(
  (err)=>{
    if(err) throw err;
    console.log("database connected");
  }
);

module.exports=db_config;