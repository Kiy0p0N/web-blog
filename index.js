import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import {v4 as uuidv4} from 'uuid';

const app = express();
const port = 3000;

// Config of EJS
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// Database simulations
let posts = [];

// Main route
app.get('/', (req, res)=>{
    res.render('index', { posts });
});

// Route for new post
app.post('/posts', (req, res)=>{
    // Date the post was made
    const actualDate = new Date();
    const date = actualDate.toLocaleString();
    
    const {name, content} = req.body;
    const newPost = {id: uuidv4(), name, date, content};
    posts.push(newPost);
    res.redirect('/');
});

// Delete post
app.delete('/posts/:id', (req, res)=>{
   posts = posts.filter(p => p.id != req.params.id);
   res.redirect('/'); 
});

// Edit post
app.get('/posts/:id/edit', (req, res)=>{
    const post = posts.find(p => p.id == req.params.id);
    res.render('edit', { post });
});

// Update post
app.put('/posts/:id', (req, res)=>{
    const { name, content} = req.body;
    const postIndex = posts.findIndex(p => p.id == req.params.id);

    // Date the post was made
    const actualDate = new Date();
    const date = actualDate.toLocaleString();

    if(postIndex !== -1){
        posts[postIndex] = { id: req.params.id, name, date, content };
    };
    res.redirect('/');
});


// Start server
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});