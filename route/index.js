const express = require('express');
const router = express.Router();
const { postData, getData, patchData, deleteData } = require('../controller/data.controller');

router.route('/test')
.get(getData)
.post(postData)
.put(patchData)
.delete(deleteData);

module.exports = router;