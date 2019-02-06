$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery has been loaded');

    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).then(function (response){
        console.log('the quotes get request worked', response);
        
    });

    $('#quotetableBody').append(`   
             <tr>
                <td>"Remember there's no such thing as a small act of kindness. Every act creates a ripple with no
                    logical end."</td>
                <td>Scott Adams</td>
            </tr>
    `);

}