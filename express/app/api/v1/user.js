const express = require('express');
const User = require('../../model/user')

const user = new User()
var router = express.Router();

router.get('/v1/user/list', async(req, res) =>{
  let list = await user.getList()
  res.send(list)
});

module.exports = router
