const assert = require('assert');
const commentService = require('../services/comments')
const commentModel = require('../models/comments')
const sinon = require("sinon");

const request = {
    message: "test",
    organization: "xendit"
}

describe('#create comment() validate name is mandatory', function () {
    it('should return `name is mandatory` when the name is not present', async function () {
        try {
            await commentService.create();
        } catch (e) {
            assert.equal(e.message, 'comment must not empty')
        }
    });
});

describe('#create comment() create success', function () {
    before(() => {
        sinon.stub(commentModel, "create").returns(Promise.resolve(request));
    });

    after( function () {
        commentModel.create.restore(); // Unwraps the spy
    });
    it('should return `name already exist` when the name data is already exist', async function () {
        let result = await commentService.create(request);
        assert.equal(result, request)
    });
});

describe('#showComment() success', function () {
    before(() => {
        sinon.stub(commentModel, "find").returns(Promise.resolve(request));
    });

    after( function () {
        commentModel.find.restore(); // Unwraps the spy
    });
    it('should return `success with object`', async function () {
        let result =  await commentService.getComments(request);
        assert.equal(result, request)
    });
});

describe('#deleteComment() success', function () {
    before(() => {
        sinon.stub(commentModel, "update").returns(Promise.resolve([]));
    });

    after( function () {
        commentModel.update.restore(); // Unwraps the spy
    });
    it('should return `success with object`', async function () {
        let result =  await commentService.deleteAllComment(request);
        assert.deepEqual(result, [])
    });
});
