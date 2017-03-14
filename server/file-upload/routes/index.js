const express = require('express');
const router = express.Router();
const multer = require('multer');
const UploadDir = './uploads/';
const upload = multer({dest: UploadDir}).single('photo');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  let path = '';
  upload(req, res, err => {
    if(err) {
      console.error(err);
      return res.status(422).send('an Error occured');
    }
    path = req.file.path;
    return res.send(`Upload completed for ${path}`);
  })
})

module.exports = router;
