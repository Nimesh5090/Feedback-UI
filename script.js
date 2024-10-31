let send = document.querySelector(".send");
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");
let Main_Container = document.querySelector(".Main_Container");

let txt1 = document.querySelector("#txt1");
let txt2 = document.querySelector("#txt2");
let txt3 = document.querySelector("#txt3");


button1.addEventListener("click",function(){
    if(button2.style.backgroundColor != "green" && button3.style.backgroundColor != "green"){
        button1.style.backgroundColor= "green";
        txt1.style.color="white";
    }
    if(button2.style.backgroundColor === "green" || button3.style.backgroundColor === "green"){
        button2.style.backgroundColor= "#e0ffff";
        txt2.style.color="#006400";
        button3.style.backgroundColor= "#e0ffff";
        txt3.style.color="#006400";
        button1.style.backgroundColor= "green";
        txt1.style.color="white";
    }


 
    
});

button2.addEventListener("click",function(){
    if(button1.style.backgroundColor != "green" && button3.style.backgroundColor != "green"){
        button2.style.backgroundColor= "green";
        txt2.style.color="white";
    }
    if(button1.style.backgroundColor === "green" || button3.style.backgroundColor === "green"){
        button1.style.backgroundColor= "#e0ffff";
        txt1.style.color="#006400";
        button3.style.backgroundColor= "#e0ffff";
        txt3.style.color="#006400";
        button2.style.backgroundColor= "green";
        txt2.style.color="white";
    }

   
    
});

button3.addEventListener("click",function(){
    if(button1.style.backgroundColor != "green" && button2.style.backgroundColor != "green"){
        button3.style.backgroundColor= "green";
        txt3.style.color="white";
    }
    if(button2.style.backgroundColor === "green" || button1.style.backgroundColor === "green"){
        button2.style.backgroundColor= "#e0ffff";
        txt2.style.color="#006400";
        button1.style.backgroundColor= "#e0ffff";
        txt1.style.color="#006400";
        button3.style.backgroundColor= "green";
        txt3.style.color="white";
    }
   
});

send.addEventListener("click",function(){
    let br = document.createElement("br");
    if(button1.style.backgroundColor != "green" && button2.style.backgroundColor != "green" && button3.style.backgroundColor != "green"){
        alert("please select feedback")
    }
    if(button2.style.backgroundColor === "green"){
        Main_Container.innerHTML=`
        <strong>Thank you!</strong>
        <br>
        
        <strong>Feedback: Neutral </strong>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
    if(button3.style.backgroundColor === "green"){
        Main_Container.innerHTML=`
        <strong>Thank you!</strong>
        <br>
        
        <strong>Feedback: Satisfied </strong>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }    
    if(button1.style.backgroundColor === "green"){
        Main_Container.innerHTML=`
        <strong>Thank you!</strong>
        <br>
        
        <strong>Feedback: Unhappy </strong>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    } 
 });


