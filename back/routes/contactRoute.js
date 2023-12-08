
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const {createContact} = require("../controllers/contactController");
const Contact = require("../models/Contact");
// const { storage } = require('../controllers/menuController');



// router.post('/', menuController.createMenuItem);

router.post('/', contactController.createContact);
router.get('/', contactController.getAllContact);
// router.get('/:id', menuController.getMenuItemById);
// router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', contactController.deleteContact);
// router.post('/:id/upload', menuController.uploadImage);


module.exports = router;