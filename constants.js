var callback_url = `http://localhost:8080`;  // from fitbit.com app setting page

var database_url='http://localhost:5000/demo'; // endpoint of java database


function drawHeader(){
    var handle=document.getElementById('header');

    if(handle){
        handle.innerHTML='<a href="/report.html">report</a> <a href="/foodlog.html">food log</a> <a href="/fitbit.html">fitbit</a> <a href="/scale.html">scale</a>'
    }
}

var client_id='22BVZC';
//---------------------------------


 //database_url="http://pantry-env.7zyk5zdmpf.us-east-1.elasticbeanstalk.com";
 //callback_url =`https://poundreport.com`;

//OAuth 2.0 Client ID
//22BWQ4 
 //client_id='22BWQ4';