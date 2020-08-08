const CommentModel = require('../models/comments')
const MemberService = {
    create: createComment,
    deleteAllComment: deleteAllComment,
    getComments: getComments
}

async function createComment(request) {
    if (request === undefined || request.message === '') {
        throw new Error('comment must not empty');
    }
    return CommentModel.create(buildComment(request))
}

async function getComments(organization) {
    if (organization === undefined) {
        throw new Error('organization must not empty');
    }
    return CommentModel.find({organization: organization, isDeleted: false})
}

async function deleteAllComment(organization) {
    return CommentModel.update({organization: organization}, {"$set":{isDeleted: true}}, {"multi": true});
}

function buildComment(request) {
    return {
        message: request.message,
        organization: request.organization
    };
}

module.exports = MemberService