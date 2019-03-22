const express = require('express');
const router = express.Router();
const db = require('../../data/helpers/actionModel');

router.route('/')
    .get(async (req, res) => {
        try {
            const actions = await db.get();
            return res.json(actions);
        } catch(e) {
            return res.status(500).json({ error: "Actions could not be retrieved." });
        }
    })
    .post(async (req, res) => {
        try {
            const project_id = req.body.project_id;
            const description = req.body.description;
            const notes = req.body.notes;
            const completed = req.body.completed || false;
            if(!project_id || !description || !notes) return res.status(400).json({ errorMessage: "Please provide all the data for the action." });
            const newAction = await db.insert({
                project_id,
                description,
                notes,
                completed
            })
            return res.status(201).json(newAction);
        } catch(e) {
            return res.status(500).json({ error: "There was an error while saving the action to the database" })
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const action = await db.get(req.params.id);
            if(action.length === 0) return res.status(404).json({ message: "The action with the specified ID does not exist." });
            return res.status(200).json(action);
        } catch(e) {
            return res.status(500).json({ error: "The action information could not be retrieved." });
        }
    })
    .put(async (req, res) => {
        try {
            const project_id = req.body.project_id;
            const description = req.body.description;
            const notes = req.body.notes;
            const completed = req.body.completed || false;

            if(!project_id || !description || !notes || !completed) return res.status(400).json({ errorMessage: "Please provide all the data for the action." });
            const actionUpdated = await db.update(req.params.id, { project_id, description, notes, completed })
            if(action === null) return res.status(404).json({ message: "The action with the specified ID does not exist." });
            return res.status(200).json(actionUpdated);
        } catch(e) {
            return res.status(500).json({ error: "The action information could not be modified." });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedAction = await db.remove(req.params.id);
            if(deletedAction === 0) return res.status(404).json({ message: "The action with the specified ID does not exist." });
            return res.status(200).json({...deletedAction, removed: true});
        } catch(e) {
            return res.status(500).json({ error: "The action could not be removed" })
        }
    });

module.exports = router;