var express = require('express');
var router = express.Router();


var homeCTR = require('../controlerss/sanpham.ctl');


router.get('/', homeCTR.SPADd);




module.exports = router;