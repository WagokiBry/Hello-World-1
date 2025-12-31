function delay(ms){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
res("good")
        },ms)
    })
}

console.log(delay(1000).then(() => alert('runs after 3 seconds')));