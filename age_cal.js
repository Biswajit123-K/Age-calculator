document.getElementById('Todaydate').value = new Date().toISOString().split("T")
[0]
 const msgres= document.getElementById('msg');
 
function calculateAge(){
    let todayDate= new Date(document.getElementById("Todaydate").value);
    let birthDate = new Date(document.getElementById("Birthdate").value);
    if(!birthDate || birthDate>todayDate){
msgres.innerText="You entered wrong date " ;
msgres.style.color="red";
return 
    }
  
    let year = todayDate.getFullYear()-birthDate.getFullYear();
    let month = todayDate.getMonth()-birthDate.getMonth();//8-12
    let day = todayDate.getDate()-birthDate.getDate();//8-9
    if(day<0){
        month--;
        day+= new Date (todayDate.getFullYear(), todayDate.getMonth(),0). getDate();
       
    }
    if(month<0){
        year--;
        month+=12;

    }
    msgres.innerText= `Your age is : ${year} year ${month} month ${day} day`;

}