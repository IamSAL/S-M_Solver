$(document).ready(function () {
    var tds=document.querySelectorAll('td');
    var nodes = Array.prototype.slice.call(tds,0);
    nodes.forEach(function(node){
        if(node.innerHTML=='NA'){

            node.innerHTML=`<span style='opacity: 0.1;user-select: none'>N/A</span>`
        }

    });


});

const avg_waiting_time=document.getElementById('avg_waiting_time');
const avg_service_time=document.getElementById('avg_service_time');
const avg_tba_field=document.getElementById('avg_tba');
const avg_tcs_field=document.getElementById('avg_tcs');
const probability_tcw_field=document.getElementById('probability_tcw');
const avg_waiting_of_who_waits=document.getElementById('avg_waiting_of_who_waits');
const probability_of_busy_server=document.getElementById('probability_of_busy_server');
const probability_of_idle_server=document.getElementById('probability_of_idle_server');
const time_to_execute=document.getElementById('time_to_execute');
