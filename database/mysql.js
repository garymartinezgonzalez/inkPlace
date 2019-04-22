// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
var connection = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "alumina90",
 database: "inkPlace"
});
//Example mysql query using Promises
var getStyles = function(cb) {
 connection.query('SELECT style FROM styles', (err, results)=> {
   if(err) {
     cb(err, null);
   } else {
     cb(null, results);
   }
 });
};


// const getInfoByStyle = cb => {
//   return new Promise ((resolve, reject) => {
//     connection.query("SELECT info FROM styles", (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve(results);
//     })
//   });
// };
//
//
// const imagesByStyle = cb => {
//   return new Promise ((resolve, reject) => {
//     connection.query("SELECT url FROM images", (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve(results);
//     })
//   });
// };
//
// const getUser = cb => {
//   connection.query("INSERT INTO users (email,name) VAlUES ? ",
//     (err, results,fields) => {
//       if(err){
//         throw err;
//       }else{
//         cb(results)
//       }
//     });
// };
//
// const getApp = cb => {
//   connection.query("INSERT INTO appointments (size, bodypart, apptDate) VAlUES ? ",
//     (err, results,fields) => {
//       if(err){
//         throw err;
//       }else{
//         cb(results)
//       }
//     });
// };

module.exports.connection = connection;
