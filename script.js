let userInput = document.querySelector("#date")
let btn = document.querySelector("button");
let result = document.querySelector("#result")
userInput.max = new  Date().toISOString().split('T')[0];  // Get today's date and set as max value for input field
btn.addEventListener("click",()=>{
    let birthdate=new Date(userInput.value);
    let d1 = birthdate.getDate()
    let m1 = birthdate.getMonth() + 1; //January is  0!
    let y1 =  birthdate.getFullYear();
    let  today = new Date();
    let  d2 = today.getDate();//Get the current day
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear(); // Get the current year

    let d3, m3, y3 ;
    y3 = y2-y1 ;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 =  12 + m2 - m1;

    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = cuurentdate(y1,m1) + d2 - d1;
    }
    if(m3<0){
        m3 = 11 
        y3-- ;
    }
result.innerHTML =  `You age is ${y3} <span>year<span/> ${m3} <span>month<span/> and ${d3} <span>day<span/> ` ;
})
function cuurentdate(year,month){
    return new Date(year , month ,0).getDate();
}