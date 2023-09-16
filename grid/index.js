var arr=[];

var cac=[];
for(let i=1;i<10;i++){
    arr[i]=document.getElementById(i.toString());
    
   
  
    if(i==9){
        arr[i].addEventListener('click',async()=>{
            cac.push(i);
            console.log('resetting');
            arr[i].style.backgroundColor='red';
            await resetAll();
        })
    }
    else{
        arr[i].addEventListener('click',()=>{
           cac.push(i);
            arr[i].style.backgroundColor='red';
        })
    }
}

function resetAll(){
    for(let i=0;i<cac.length;i++){
        setTimeout(()=>{ 
           
            arr[cac[i]].style.backgroundColor='blueviolet'
        },500*(i+1))
       
    }
    setTimeout(()=>{
        cac=[]
    },500*(cac.length)+1);

}
