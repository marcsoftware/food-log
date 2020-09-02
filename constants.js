var callback_url = `http://localhost:8080`;  // from fitbit.com app setting page

var database_url='http://localhost:5000/demo'; // endpoint of java database


function drawHeader(){
    var handle=document.getElementById('header');

    if(handle){
        handle.innerHTML='<a href="/report.html">report</a> <a href="/foodlog.html">food log</a> <a href="/fitbit.html">fitbit</a> <a href="/scale.html">scale</a>'
    }
}
//---------------------------------

/*
var database_url="http://pantry-env.7zyk5zdmpf.us-east-1.elasticbeanstalk.com";
var callback_url =`http://hostreactapp.s3-website-us-east-1.amazonaws.com/`;
*/