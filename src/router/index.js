const express = require('express');
const router = express.Router();

const actionsRouter = require('./actions');
const projectsRouter = require('./projects');

router.use('/actions', actionsRouter);
router.use('/projects', projectsRouter);

module.exports = router;