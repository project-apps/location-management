const http = require('http'),
      express = require('express'),
      //webServerConfig = require('../config/web-server.js'),
      apiRouter = require('../router/api.router.js'),
      webRouter = require('../router/web.router.js'),
      dbRouter = require('../router/db.router.js')
      logger = require('../util/log4js.js');
const port = process.env.HTTP_PORT || process.env.PORT || 3000;
let httpServer;
exports.initialize = ()=>{
  return new Promise((resolve, reject)=>{
        let app = express();
        httpServer = http.createServer(app);
        httpServer.timeout = 900000;
        app.use(express.static('views'));
        app.set('view engine', 'ejs');
        app.use('/', webRouter);
        app.use('/api', apiRouter);
        app.use('/db', dbRouter);

        httpServer.listen(port, err=>{
            if(err){
                logger.error(err);
                reject(err);
                return;
            }
            logger.debug(`Web server listning on :${port}`);
            resolve();
        });
    });
}
function close(){
    return new Promise((resolve, reject)=>{
        httpServer.close((err)=>{
            if(err){
                reject(err);
                return;
            }
            resolve();
        });
    });
}

exports.close = close;
