const Comment = require('../models/Comment.js');

// Controller function to handle getSites route
const createComment = async (req, res) => {
    const {content, site_id} = req.body;
        const me = req.user._id;


        
    try {

        const newComment = new Comment({
            content: req.body.content,
            user: me,
            site_id: req.body.site_id,
           
        })

        console.log(content);
        console.log(user);
        console.log(site_id);
        

        
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const likeComment = async (req, res) => {
    try {
        

        
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getComment = async (req, res) => {
    try {
    
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {
    createComment,
    likeComment,
    getComment
};
