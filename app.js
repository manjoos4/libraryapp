const express = require('express');
const app= express();
const port=process.env.PORT || 2000;

const bodyParser = require('body-parser'); // Middleware 

app.use(bodyParser.urlencoded({ extended: false }));

const nav= [
    {
        link:'/books',name:'Books'
    },
        {
            link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    }

];

const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorsRouter=require('./src/routes/authorRoutes')(nav)
const addbookRouter=require('./src/routes/addbookRoutes')(nav)
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

app.get('/',function(req,res){
    
    res.render("login",
    {
        title:'Login'
    })
});

// app.get('/login', (req, res) => {
    
//     res.sendFile(__dirname + '/src/views/index.ejs');
//   });
//   app.post('/login', (req, res) => {
//     res.render("index",{
//         nav,
//         title:'library'
//     });

//   });

app.get('/login',function (req,res){
    res.render("index",
    {
        nav,
        title:'library'
    });
});
// app.get('/signup',function(req,res){
//  res.render("login",{
//      nav,
//      title:'library'
//  })
// })

  app.get('/signup', (req, res) => {
    
    // res.sendFile(__dirname + '/src/views/signup.ejs');

  
    res.render("signup",{
        nav,
        title:'library'
    });

  });

app.listen(port,()=>{console.log("Server Ready at"+port)});
