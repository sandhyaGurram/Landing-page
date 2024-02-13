function  contactvalid() {
    const name=document.getElementById("name").value;
    const mail=document.getElementById("mail").value;
    const phone=document.getElementById("phone").value;
    const nameExp=/^[a-zA-Z]+$/;
    const mailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneExp=/^[0-9]+$/;
    let ns=false;
    let ms=false;
    let ps=false;

    if(name===""){
        document.getElementById("n-note").innerHTML="Please enter name";
    }
    else{
        if(name.match(nameExp)){
            document.getElementById("n-note").innerHTML="";
            ns=true;
        }
        else{
            document.getElementById("n-note").innerHTML="Enter only characters";
        }
    }

    if(mail===""){
        document.getElementById("m-note").innerHTML="Please enter mail";
    }
    else{
        if(mail.match(mailExp)){
            document.getElementById("m-note").innerHTML="";
            ms=true;
        }
        else{
            document.getElementById("m-note").innerHTML="Invalid email Ex: abcd@gmail.com";
        }
    }

    if(phone===""){
        document.getElementById("p-note").innerHTML="Please enter phone number";
    }
    else{
        if(phone.match(phoneExp)){
            if(phone.length===10){
                document.getElementById("p-note").innerHTML="";
                ps=true;
            }
            else{
                document.getElementById("p-note").innerHTML="Enter 10 digits only";
            }
        }
        else{
            document.getElementById("p-note").innerHTML="Enter digits only";
        }
    }


    if(ns===true && ms===true && ps===true){
        return true;
    }
    else{
        return false;
    }
}