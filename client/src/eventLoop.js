function first(){
    console.log("a")
    }
    
    function second(){
    console.log("b")
    }
    setImmediate(()=>{console.log("d")})
    process.nextTick(()=>{
    console.log("e")
    })
    setTimeout(()=>{console.log("c")},0)
    first()
    second()
   