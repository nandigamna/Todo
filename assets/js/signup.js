function mysignup(){
    var mailid=document.myform.loginemail.value;
    var password=document.myform.loginpassword.value;

    if(mailid==null || mailid=="")
    {
        alert("Enter Your Login Mailid")
        return false;
    }
    if(password==null || password=="" || password.length<8)
    {
        alert("Enter You Password min 8 character")
        return false;
    }
}






var chinnari=document.getElementById("google")
function aaradya1(){
    window.location.href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.shopper.com%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=509158777807-o6nf72tjv7q12iug3nqmet958lg3sbh9.apps.googleusercontent.com&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow";
}


var chinnari=document.getElementById("GMAIL")
function aaradya()
{
    window.location.href="https://www.facebook.com/";
}
