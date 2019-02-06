$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery has been loaded');
    addQuote();
}

function addQuote() {
    $('#quotetableBody').append(`   
             <tr>
                <td>"Remember there's no such thing as a small act of kindness. Every act creates a ripple with no
                    logical end."</td>
                <td>Scott Adams</td>
            </tr>
`);
}
