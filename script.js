const dp= document.getElementById("display");
 function display(input){
dp.value +=input;
 }
 function cleardp(){
    dp.value = "";
    }
    
function calculate(){
try{dp.value =eval(dp.value);
}
catch(error){
    dp.value="error";

}
}
