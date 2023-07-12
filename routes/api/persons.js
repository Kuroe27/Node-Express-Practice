
import express from 'express';
import persons from '../../Persons.js';
const router = express.Router()
import { v4 as uuidv4 } from 'uuid';



// get person  
router.get('/', (req, res) => {
    res.json(persons);
});

// get persons id
router.get('/:id', (req, res) => {
    const isFound = persons.some(person => person.id === parseInt(req.params.id))

    if (isFound) {
        res.json(persons.filter(person => person.id === parseInt(req.params.id)));

    } else {
        res.status(400).json(`no person id ${req.params.id} found `)
    }
});

// create person
router.post('/', (req, res) => {
    const { name, age, sex } = req.body;

    if (!name || !age || !sex) return res.status(400).json({ msg: 'Incomplete data' });

    const newPerson = { id: uuidv4(), name, age, sex };
    persons.push(newPerson);

    res.json(persons);
});


//person update
router.put('/:id', (req, res) => {
    const isFound = persons.some(person => person.id === parseInt(req.params.id))

    if (isFound) {
        const updatePerson = req.body
        persons.filter(person => {
            if (person.id === parseInt(req.params.id)) {
                person.name = updatePerson.name || person.name
                person.age = updatePerson.age || person.age
                person.sex = updatePerson.sex || person.sex
                res.json({ msg: `Person id: ${person.id} updated `, person })

            }
        });

    } else {
        res.status(400).json(`no person id ${req.params.id} found `)
    }
});


// person delete
router.delete('/:id', (req, res) => {
    const isFound = persons.some(person => person.id === parseInt(req.params.id))

    if (isFound) {

        res.json({
            msg: 'deleted',
            persons: persons.filter(person => person.id !== parseInt(req.params.id))
        });

    } else {
        res.status(400).json(`no person id ${req.params.id} found `)
    }
});
export default router