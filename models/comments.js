//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    organization: String,
    message: String,
    createdDate: {type: Date, default: Date.now},
    isDeleted: {type: Boolean, default: false}
});

const MemberModel = mongoose.model('comment', CommentSchema);

module.exports = MemberModel;