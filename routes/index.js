const express = require('express')

const {
  consoleLog
} = require('../controllers')

const router = express.Router()

router.get('*', consoleLog.log)


module.exports = router
