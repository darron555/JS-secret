function consoleRec(array,count){
    console.log(array[count]);
    count++;
    if(count<array.length){
        consoleRec(array,count);
    }
}



module.exports=consoleRec;