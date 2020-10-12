const express = require('express')
const router =  express.Router()
const urlsController = require('../app/controllers/urlsController')

router.get('/links',urlsController.list)
router.post('/links',urlsController.create)
router.get('/links/:id',urlsController.show)
router.put('/links/:id',urlsController.update)
router.delete('/links/:id',urlsController.destroy)

router.get('/:hash',urlsController.redirect)
module.exports= router