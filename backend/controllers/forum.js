const ForumPost = require('../models/forumPost');
const ForumComment = require('../models/forumComment');


exports.createPost = async (req, res, next) => {
    console.log(req.body)
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
    if (category && category.length > 0) search.category = category;

    const posts = await ForumPost.find(search);

    //count by categories
    //const categories = await ForumPost.count()

    res.json({
        success: true,
        message: 'Success!',
        posts: posts,
        categories:[]
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
    let post = await ForumPost.findById(id).populate({path:"author comments",populate: {path:"author",select:"username",strictPopulate:false}})
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

    const newComment = {body,author}

    try {
        const comment = await ForumComment.create(newComment)
        const post = await ForumPost.findOneAndUpdate({ _id:id }, { $addToSet: { comments: comment._id } }, { new: true }).populate({path:"author comments",populate: {path:"author",select:"username",strictPopulate:false}})
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
    console.log("in delete")
    const id = req.params.id;
    const author = req.user.user._id;
    const post = await ForumPost.findById(id);

    if (!post) return res.send({ message: "Could not find post", success: false })
    else if(author.toString() === post.author.toString()) {
        console.log("in else")

        //remove comments
        await ForumComment.remove({ "_id": { "$in": post.comments } })

        //user is owner of the post
        await post.remove()
        res.send({message:"Removed",success:true})
    }
    else {
        res.send({ message: "Could not remove post, you need to be the owner.", success: false })
    }
}

exports.hideComment = async (req, res, next) => {
    const id = req.params.id;
    const author = req.user.user._id;
    const comment = await ForumComment.findById(id);

    if (!comment) return res.send({ message: "Could not find comment", success: false })
    else if(author.toString() === comment.author.toString()) {
        //user is owner of the comment
        const updateFields = {hidden:true,body:""}

        const updated = await ForumComment.findOneAndUpdate({_id:id},updateFields,{new: true})
        res.send({message:"Updated",comment:updated,success:true})
    }
    else {
        res.send({ message: "Could not edit comment, you need to be the owner.", success: false })
    }
}

exports.editPost = async (req, res, next) => {
    const id = req.params.id;
    const author = req.user.user._id;
    const {body} = req.body
    const post = await ForumPost.findById(id);

    if (!post) return res.send({ message: "Could not find post", success: false })
    else if(author.toString() === post.author.toString()) {
        //user is owner of the post
        const updateFields = {body:body,edited:true}

        const updated = await ForumPost.findOneAndUpdate({_id:id},updateFields,{new: true})
        res.send({message:"Updated",post:updated,success:true})
    }
    else {
        res.send({ message: "Could not edit post, you need to be the owner.", success: false })
    }
}