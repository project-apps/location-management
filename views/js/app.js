var hostPort = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
$(document).ready(function(){
    $('#link1').text(hostPort+'/db/pincode/1/122001');
    $('#link2').text(hostPort+'/db/pincode/0/122001');
    
    $('#link1').click(function(){
    $('#link1').prop('href',hostPort+'/db/pincode/1/122001');
    });
    $('#link2').click(function(){
        $('#link2').prop('href',hostPort+'/db/pincode/0/122001');
       
    });
});