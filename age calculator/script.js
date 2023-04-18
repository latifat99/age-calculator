const day=document.getElementById("one")
const month=document.getElementById("two")
const year=document.getElementById("three")
const date= new Date()
let currentday=date.getDate( )
let currentmonth=1+ date.getMonth()
let currentyear=date.getFullYear()
let a=document.getElementById("year")
let b=document.getElementById("month")
let c=document.getElementById("days")
let displayA=document.getElementById("errormsg1")
let displayB=document.getElementById("errormsg2")
let displayC=document.getElementById("errormsg3")

let months=[31,28, 31,30,31,30,31,31,30,31,30,31]


calculator=()=>{
    if(year===""){
  displayA.innerHTML("This field is required")
  displayA.style.color="red"
  return
    }
    else{
        displayA.innerHTML=""
    }
    
    
    if(day.value>currentday){
        currentday=currentday+months[currentmonth-1]
        currentmonth=currentmonth-1
    }
    if(month.value > currentmonth){
        currentmonth = currentmonth + 12;
        currentyear= currentyear-1;
    }
    a.innerText=currentyear-year.value;
    b.innerText=currentmonth-month.value;
    c.innerText=currentday-day.value;

    year.value=""
    month.value=""
        day.value="" 

        
              
              
        

    }



