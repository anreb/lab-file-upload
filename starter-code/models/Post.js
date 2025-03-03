const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
	{
		content: String,
		creatorId: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		picPath: String,
		picName: String,
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment'
			}
		]
	},
	{ timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
