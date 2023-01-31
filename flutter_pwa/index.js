const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const helmet = require("helmet");
const cors = require('cors')
const server = express();
const router = express.Router();
server.use(helmet());
const PORT = process.env.PORT || 3030;

let corsOptions = {
  origin: ['http://localhost:8100','http://localhost'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

server.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));
server.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);
server.use(
    helmet.contentSecurityPolicy({
      
        directives: {
          //  ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            'default-src': ["'self'" ,"unsafe-inline", "https://www.kotakcherry.com" , 'https://unpkg.com/','https://fonts.gstatic.com','https://apis.google.com','https://iecouat.kotakcherry.com','https://d2gqvd232id77.cloudfront.net'],
            'script-src': ["'self'","'unsafe-inline'","'unsafe-eval'",'https://unpkg.com/' ,'https://fonts.gstatic.com','https://apis.google.com','https://iecouat.kotakcherry.com','https://d2gqvd232id77.cloudfront.net'],
            'img-src': ["'self'", 'https://unpkg.com/','https://cherry-ipo.s3.ap-south-1.amazonaws.com' , '*.s3.amazonaws.com' , 'https://us-central1-cherry-native.cloudfunctions.net','https://d2gqvd232id77.cloudfront.net',
            'img-src blob:'],
            'frameAncestors': ['http://localhost', 'http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:8080']
        },
        frameguard: false,
    }),
);

server.use('/',express.static(process.cwd()+"/web"));
server.use('/yearwrapup',express.static(process.cwd()+"/web9"));
server.use('/pollease',express.static(process.cwd()+"/web1"));
server.get("/testJSON", function (req, res) {

  


  server.get('*', function(req, res){
    res.status(404).send('what???');
  });
  res.send("Hello World");
});

server.use(
  "/ieco/mf/*",
  createProxyMiddleware({
    target: "https://iecouat.kotakcherry.com/",
    changeOrigin: true,
  })
);




server.use(
  "/ns/*",
  createProxyMiddleware({
    target: "http://localhost:3004/",
    changeOrigin: true,
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
  })
);


server.use(
  "/ieco/api/*",
  createProxyMiddleware({
    target: "https://iecouat.kotakcherry.com/",
    changeOrigin: true,
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
  })
);

server.use(
  "/ieco/ieco-customer/*",
  createProxyMiddleware({
    target: "https://iecouat.kotakcherry.com/",
    changeOrigin: true,
  })
);
server.use(
  "/ieco/ieco-content/*",
  createProxyMiddleware({
    target: "https://iecouat.kotakcherry.com/",
    changeOrigin: true,
  })
);
server.use(
  "/oauth/*",
  createProxyMiddleware({
    target: "https://iecouat.kotakcherry.com/",
    changeOrigin: true,
  })
);

server.use(
  "/secret/*",
  cors(corsOptions),
  createProxyMiddleware({
    target: "http://hackthonkartik-env.eba-bgimppdr.ap-south-1.elasticbeanstalk.com/",
    changeOrigin: true,
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
  })
);

server.use(
  "/users/*",
  cors(corsOptions),
  createProxyMiddleware({
    target: "http://hackthonkartik-env.eba-bgimppdr.ap-south-1.elasticbeanstalk.com/",
    changeOrigin: true,
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
  })
);

server.listen(3006, () => {
    console.log(`server started on port ${PORT}`);
  });
