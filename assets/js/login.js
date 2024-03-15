// function myname()
// {
//     var chinna=document.myform.name.value;
//     var chinna1=document.myform.number.value;
//     var chinna2=document.myform.mail.value;
//     var chinna3=document.myform.pass.value;
//     var chinna4=document.myform.confirm.value;

//     if(chinna==null || chinna=="")
//     {
//         alert("correct the name")
//         return false;
//     }
//     elseif(chinna1<=10)
//     {
//         alert("Please enter ten numbers")
//         return false;
//     }
//     elseif(chinna2==null || chinna2=="")
//     {
//         alert("please enter password")
//         return false;
//     }
//     elseif(chinna3==null || chinna3=="")
//     {
//         alert("enter password")
//         return false;
//     }
//     elseif(chinna4==null || chinna4=="")
//     {
//         alert("enteerd")
//         return false;
//     }
// }

function myname() {
    var chinna = document.myform.name.value;
    var chinna1 = document.myform.number.value;
    var chinna2 = document.myform.mail.value;
    var chinna3 = document.myform.pass.value;
    var chinna4 = document.myform.confirm.value;


    if (chinna == null || chinna == "") {
      alert("enter your name")
      return false;
    }


    if (chinna1.length !== 10) {
      alert("Please enter ten numbers")
      return false;
    }


    if (chinna2 == null || chinna2 == "") {
      alert("please enter mail")
      return false;
    }


    if (chinna3 == null || chinna3 == "" || chinna3.length < 8) {
      alert("enter password  Atleast 8 characters")
      return false;
    }


    if (chinna4 == null || chinna4 == "") {
      alert("Re-enter your password")
      return false;
    }


    if (chinna3.length !== chinna4.length) {
      alert("Not matched your password")
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