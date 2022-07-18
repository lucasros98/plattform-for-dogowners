const ForumPost = require('../models/forum');

exports.createPost = async (req, res, next) => {
    const { title, body, category } = req.body;
    if (!title || title.length == 0) {
        return res.status(200).send("A title is required.");

    }
    if (!body || body.length == 0) {
        return res.status(200).send("A body is required.");

    }
    //get user id
    const author = req.user.user._id;
    try {
        const newPost = await ForumPost.create({ title, body, author, category });
        res.json({
            success: true,
            message: 'ForumPost created!',
            post: newPost
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

exports.getPosts = async (req, res, next) => {
    //get search 
    const { category } = req.query;
    let search = {}

    //add search query params
    if (category || category.length > 0) search.category = category;

    const posts = await ForumPost.find(search);

    res.json({
        success: true,
        message: 'Success!',
        posts: posts
    });
}

exports.getSpecificPost = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return res.json({
            success: false,
            message: 'Missing id!',
            post: null
        });
    }
    const post = await ForumPost.findById(id);
    res.json({
        success: true,
        message: 'Success!',
        post: post
    });
}

exports.addComment = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return res.json({
            success: false,
            message: 'Missing id!',
            post: null
        });
    }
    const { body } = req.body;
    const author = req.user.user._id;

    if (!body) return res.status(400).send("Text is required")

    const comment = {body,author}

    try {
        const post = await ForumPost.findOneAndUpdate({ _id:id }, { $addToSet: { comments: comment } }, { new: true }).sort({ "updates.date": "desc" });
        return res.send({ success: true, post: post })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }

}

exports.deletePost = async (req, res, next) => {

}

exports.editComment = async (req, res, next) => {

}

exports.editPost = async (req, res, next) => {

}