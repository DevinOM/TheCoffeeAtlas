const express = require('express');
const blog = require('./models/blog');
const router = express.Router();
const Contact = require('./models/contact');
const Blog = require('./models/blog');
const app = express()

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/roasts', (req, res) => {
    res.render('roasts')
});

router.get('/beans', (req, res) => {
    res.render('beans')
});

router.post('/submitContact', (req, res) => {
    const contact = new Contact ( {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact).then(result => {
        res.render('index')
    })
    .catch(err => console.log(err));
});


router.get('/coffeetalk', async (req, res) => {
    const blogs = await Blog.find()
    res.render('coffeetalk', { blogs: blogs })
});

router.post('/submitBlog', async (req, res) => {
    const blog = new Blog ( {
        title: req.body.title,
        description: req.body.description,
        message: req.body.message
    })

    Blog.collection.insertOne(blog).then(result => {
        res.render('index')
    })
    .catch(err => console.log(err));
})

module.exports = router;