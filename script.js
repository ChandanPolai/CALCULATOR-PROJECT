 function clearbox(){
        box=document.getElementById("box");
        box.value='';
    }
    function clearOne(){
        box=document.getElementById("box");
        bVal=box.value;
        var newNum = Number(bVal.toString().slice(0, -1))
        box.value=newNum;
        console.log(newNum);

        if(box.value == 0){
            box.value='';
        }
    }
    function printNum(n){
        box=document.getElementById("box");
        box.value+=n;
    }
    // var num=0;
    function addNum(num){
        var number = num;

        if(num==0){
            printNum(number)
        }    
        if(num==1){
            printNum(number)
        }    
        if(num==2){
            printNum(num)
        }    
        if(num==3){
            printNum(num)
        }    
        if(num==4){
            printNum(num)
        }    
        if(num==5){
            printNum(num)
        }    
        if(num==6){
            printNum(num)
        }    
        if(num==7){
            printNum(num)
        }    
        if(num==8){
            printNum(num)
        }    
        if(num==9){
            printNum(num)
        }    
        if(num=='.'){
            box=document.getElementById("box").value;
                printNum(num)
        }    
        if(num=='+'){
            printNum(num)
        }    
        if(num=='-'){
            printNum(num)
        }    
        if(num=='x'){
            printNum('*')
        }    
        if(num=='/'){
            printNum(num)
        }    
        if(num=='%'){
            printNum(num)
        }    
        if(num=='='){
            box=document.getElementById("box");
            box.value = eval(box.value);    
        }
    }