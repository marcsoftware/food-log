var callback_url = ``;  // from fitbit.com app setting page

var database_url=''; // endpoint of java database

var client_id='';

function drawHeader(){
    var handle=document.getElementById('header');

    if(handle){
        handle.innerHTML='<a href="/index.html">food log</a> <a href="/report.html">report</a>  <a href="/fitbit.html">fitbit</a> <a id="hyperlink">login</a> <a href="/scale.html">scale</a>'
    }
}





function setConfig(){
     

     var pageURL = window.location;
     
          
          

     if(pageURL.toString().includes('localhost')){
            callback_url = `http://localhost:8080/login.html`;  // from fitbit.com app setting page
            database_url='http://localhost:5000/demo'; // endpoint of java database
            client_id='22BVZC';

     }else{
            database_url="http://pantry-env.7zyk5zdmpf.us-east-1.elasticbeanstalk.com";
            callback_url =`https://poundreport.com/login.html`;
            client_id='22BWQ4';
     }


     document.getElementById('hyperlink').href=getUrl();

}



//--------------------------------------------------------------------------------------------------------------------------------
// this get the CODE from fitbit
//--------------------------------------------------------------------------------------------------------------------------------

function getUrl(){
  
  return `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${callback_url}&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight`
  
}


setConfig();

//---------------------------------


