const express = require('express');

const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
        
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"jbarbera.jpg"
        
        },
        {
            
            author:'J K Rowling',
            genre:'Fantasy',
            img:'rowling.jfif'
        },
        {
            
            author:'Basheer',
            genre:'Drama',
            img:'Basheer.jpg'
        }
    ]
    
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Authors',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('author',{
            nav,
            title:'author',
            author:authors[id]
        });
    });
return authorsRouter;
}

module.exports=router;