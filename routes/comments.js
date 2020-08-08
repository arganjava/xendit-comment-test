const express = require('express');
const router = express.Router();
const commentService = require('../services/comments')

router.post('/', async function (req, res, next) {
    return commentService.create(req.body)
        .then(value => res.json(value))
        .catch(reason => {
            console.error(reason.message);
            res.status(422).send(reason.message);
        })
});

router.get('/:organization', async function (req, res, next) {
    return commentService.getComments(req.params.organization)
        .then(value => res.json(value))
        .catch(reason => {
            console.error(reason.message);
            res.status(422).send(reason.message);
        })
});

router.delete('/deleteAllComments/:organization', async function (req, res, next) {
    return commentService.deleteAllComment(req.params.organization)
        .then(value => res.json(value))
        .catch(reason => {
            console.error(reason.message);
            res.status(422).send(reason.message);
        })
});

module.exports = router;
