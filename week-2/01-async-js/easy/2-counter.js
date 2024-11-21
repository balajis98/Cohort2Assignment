/*## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

function counter(count){
    console.log(count++)
    if(count<=5){
    setTimeout(()=>{
        counter(count)
    },1000);
}
}

counter(1);
