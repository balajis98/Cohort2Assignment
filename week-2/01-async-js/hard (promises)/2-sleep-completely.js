/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((res,rej)=>{
    let timer=0;
    const busyOp = setInterval(()=>{
        timer+=1000;
        if(timer==milliseconds){
            clearInterval(busyOp)
            res()
        }
    },1000)
})
}

module.exports = sleep;
