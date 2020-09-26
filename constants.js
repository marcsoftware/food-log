var callback_url = ``;  // from fitbit.com app setting page

var database_url=''; // endpoint of java database

var client_id='';

var basic='';
function drawHeader(){
    var handle=document.getElementById('header');

    if(handle){
        handle.innerHTML='<meta charset="utf-8"/><a href="/index.html">food log</a> <a href="/report.html">report</a>  <a href="/fitbit.html">fitbit</a> <a  href="" id="hyperlink">login</a> <a href="/scale.html">scale</a> <a href="/food.html">food</a>'
    }

        setConfig();
}





function setConfig(){
     

     var pageURL = window.location;
     
          
          

     if(!pageURL.toString().includes('poundreport')){
            // if not deployed on poundreport. 

            callback_url = `https://localhost:8080/login.html`;  // from fitbit.com app setting page
            database_url='https://localhost:5000/demo'; // endpoint of java database
            client_id='22BVZC';
            basic='MjJCVlpDOmRjMTFjNzYwNTA4MjRmYjUwMWRjODhmNWRjYzRlOWE0';
            console.log('localhost constansts chosen');

     }else{
            database_url="https://pantry-env.7zyk5zdmpf.us-east-1.elasticbeanstalk.com";
            callback_url =`https://poundreport.com/login.html`;
            client_id='22BWQ4';
            basic='MjJCV1E0OmY0NmYxZGQwYTMwNzcyMzFiNmY2YmZhY2UyMDMwNjVh'; //
            console.log('deployed constansts chosen');
     }


     document.getElementById('hyperlink').href=getUrl();

}



//--------------------------------------------------------------------------------------------------------------------------------
// this get the CODE from fitbit
//--------------------------------------------------------------------------------------------------------------------------------

function getUrl(){
  
  return `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${callback_url}&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight`
  
}




//---------------------------------


