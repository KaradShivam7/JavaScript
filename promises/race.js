


const P1= new Promise((RES,REJ)=>{

    setTimeout(()=>{
        return RES("pass")
    },5000)
})




const P2=new Promise((RES,REJ)=>{
     setTimeout(()=>{
        return REJ("fail")
    },6500)
})


Promise.race([P1,P2])
.then((v)=>{
    console.log(v);
    
}).catch((e)=>{
    console.log(e);
    
})
