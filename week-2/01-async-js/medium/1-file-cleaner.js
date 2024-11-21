/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```*/
const fs = require("fs")

function readAndWrite(){
    fs.readFile('file.txt','utf-8',(err,data)=>{
        let readData=data.trim().replace(/\s+/g,' ');
            fs.writeFile('file.txt',readData,()=>{
                console.log('data is cleaned')
            })
    })
        
}

readAndWrite();
