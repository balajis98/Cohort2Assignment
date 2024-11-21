try{
    console.log(eval('5/0'))
    if(Infinity){
    throw new Error}
}
catch(error){
    console.log(error)
}