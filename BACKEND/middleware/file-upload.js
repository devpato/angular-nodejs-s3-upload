const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  accessKeyId: 'XXXXXXXXXXXXX',
  region: 'us-east-1'
});

const fileFilterFunction = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, use JPEG or PNG'), false);
  }
};

const upload = multer({
  fileFilter: fileFilterFunction,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'porellas',
    key: function(req, file, cb) {
      req.file = file;
      cb(null, file.originalname + Date.now());
    }
  })
});

module.exports = upload;
