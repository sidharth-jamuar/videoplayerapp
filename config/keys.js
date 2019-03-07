// const keys={
//     production:{
//         mongoDBURI:"mongodb://sidharth:vinsmoke21.@ds361085.mlab.com:61085/videoplayer"
//     },
//     default:{
//         mongoDBURI:"mongodb://sidharth:vinsmoke21.@ds161345.mlab.com:61345/heroku_67lwhzt2"
//     }
// }
// exports.getKeys=(ENVIRONMENT)=>{
//     if(ENVIRONMENT==="production"){
//         return keys.production
//     }
//     else{
//         return keys.default
//     }
// }
// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
  } else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
  }
  