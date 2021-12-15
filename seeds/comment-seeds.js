const { Comment } = require('../models');
const commentData = [{
        comment_text: "how did it happen",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "where",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "when",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;