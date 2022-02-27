import Router from 'express'
import Controller from './Controller.js'

const router = new Router()

router.get('/get-price-phone', Controller.getPriceTable)

export default router