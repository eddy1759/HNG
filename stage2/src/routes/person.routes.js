const express = require('express');
const validatePerson = require('../middleware/validation');
const personController = require('../controller/person.controller');

const router = express.Router();

router.post('/', validatePerson, personController.createPerson);
router.get('/:id', personController.getPersonById);
router.put('/:id', validatePerson, personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;