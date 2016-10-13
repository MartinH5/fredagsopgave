/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function isItFridag(){
//    
//    var date = new Date();
//    var answer = document.getElementById("answer");
//        if (date.getDate() === 5){
//                answer = "Yay :^)";
//        }else{
//                answer = "Nay ;(";
//        }
//}



    $( document ).ready(function() {
        var date = new Date();
        var answer;
        if (date.getDate() === 5){
                answer = "Yay :^)";
                document.getElementById("day").innerHTML = answer;
        }else{
                answer = "Nay :(";
                document.getElementById("day").innerHTML = answer;
        }
});  