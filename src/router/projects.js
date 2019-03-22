const express = require('express');
const router = express.Router();
const db = require('../../data/helpers/projectModel');

router.route('/')
    .get(async (req, res) => {
        try {
            const projects = await db.get();
            return res.json(projects);
        } catch(e) {
            return res.status(500).json({ error: "Projects could not be retrieved." });
        }
    })
    .post(async (req, res) => {
        try {
            const name = req.body.name;
            const description = req.body.description;
            const completed = req.body.completed || false;
            if(!name || !description) return res.status(400).json({ errorMessage: "Please provide all the data for the project." });
            const newProject = await db.insert({
                name,
                description,
                completed
            })
            return res.status(201).json(newProject);
        } catch(e) {
            return res.status(500).json({ error: "There was an error while saving the project to the database" })
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const project = await db.get(req.params.id);
            if(project.length === 0) return res.status(404).json({ message: "The project with the specified ID does not exist." });
            return res.status(200).json(project);
        } catch(e) {
            return res.status(500).json({ error: "The project information could not be retrieved." });
        }
    })
    .put(async (req, res) => {
        try {
            const name = req.body.name;
            const description = req.body.description;
            const completed = req.body.completed || false;

            if(!name || !description || !completed) return res.status(400).json({ errorMessage: "Please provide all the data for the project." });
            const projectUpdated = await db.update(req.params.id, { name, description, completed })
            if(project === null) return res.status(404).json({ message: "The project with the specified ID does not exist." });
            return res.status(200).json(projectUpdated);
        } catch(e) {
            return res.status(500).json({ error: "The project information could not be modified." });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedProject = await db.remove(req.params.id);
            if(deletedProject === 0) return res.status(404).json({ message: "The project with the specified ID does not exist." });
            return res.status(200).json({...deletedProject, removed: true});
        } catch(e) {
            return res.status(500).json({ error: "The project could not be removed" })
        }
    });

router.route('/:id/actions')
    .get(async (req, res) => {
        try {
            const actions = await db.getProjectActions(req.params.id);
            return res.status(200).json(actions);
        } catch(e) {
            return res.status(500).json({ error: "Cannot get actions for this project" });
        }
    });

module.exports = router;