function Submit(){
    var count=0;
    var qes1=document.mcq.q1.value;
    var qes2=document.mcq.q2.value;
    var qes3=document.mcq.q3.value;
    var qes4=document.mcq.q4.value;
    var qes5=document.mcq.q5.value; 
    var result=document.getElementById("result");  
    var mcq=document.getElementById("mcq"); 
    if(qes1=="Javascript")
    {
        count++;
    }
    if(qes2=="Six")
    {
        count++;
    }
    if(qes3=="clearInterval")
    {
        count++;
    }
    if(qes4=="Object-Oriented")
    {
        count++;
    }
    if(qes5=="Both")
    {
        count++;
    }
    mcq.style.display="none";

    if(count>=4){
result.textContent="Yes"+" "+"Your score is:" + count;
    }
    if(count<=3 && count>=2){
        result.textContent="Maybe"+" "+"Your score is:" + count;
    }
    if(count<=1){
        result.textContent="No"+" "+"Your score is:" + count;
    }
    
}