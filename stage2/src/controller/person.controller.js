const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const Person = require('../model/Person');

// Create a new person
const createPerson = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ status: false, message: 'Please provide a name' });
        }
        const person = await Person.create({ name });
        if (!person) {
            return res.status(500).json({ status: false,message: 'Error creating person' });
        }
        res.status(201).json({ 
            status: true,
            message: 'Person created successfully', 
            data: {
                person 
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating person', error });
    }
};

// Get Person By Id
const getPersonById = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;

        // validate if the id is a valid mongoose id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: false,message: 'Invalid id' });
        }
        const person = await Person.findById(id);
        if (!person) {
            return res.status(404).json({ status: false, message: 'Person not found' });
        }
        res.status(200).json({ 
            status: true,
            message: 'Person found', 
            data: {
                person 
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error getting person', error });
    }
}

// Update User
const updatePerson = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: false, message: 'Invalid id or name' });
        };

        const person = await Person.findByIdAndUpdate(id, { name }, { new: true });

        if (!person) {
            return res.status(404).json({ status: false, message: 'Person not found' });
        }
        res.status(200).json({ 
            status: true, 
            message: 'Person updated successfully', 
            data: {
                person 
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating person', error });
    }
}

// Delete User
const deletePerson = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: false, message: 'Invalid id' });
        }

        const person = await Person.findByIdAndDelete(id);
        if (!person) {
            return res.status(404).json({ status: false, message: 'Person not found' });
        }
        res.status(204).json({ 
            status: true, 
            message: 'Person deleted successfully', 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting person', error });
    }
}

module.exports = {
    createPerson,
    getPersonById,
    updatePerson,
    deletePerson
}