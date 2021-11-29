
function submitfunction(){
    var username = document.getElementById("name");
    var userinvalid=document.getElementById("invaliduser");
    var fathername=document.getElementById("fathername");
    var lastname=document.getElementById("lastname");
    var email=document.getElementById("email");
    var emailvalid=document.getElementById("emailvalid");
    var dob=document.getElementById("dob");
    var dobvalid=document.getElementById("dobvalid");
    var mobilenumber=document.getElementById("mobilenumber");
    var mobilenumbervalid=document.getElementById("mobilenumbervalid");
    var address1=document.getElementById("address1");
    var addressvalid=document.getElementById("addressvalid");
    var city=document.getElementById("city");
    var cityvalid=document.getElementById("cityvalid");
    var zip1=document.getElementById("zip1");
    var zip1valid=document.getElementById("zip1valid")
    if(username.value.trim()==""){
        username.style="border:2px solid red";
        userinvalid.style.visibility="visible";

    }
    else{
        username.style="border:2px solid black";
        userinvalid.style.visibility="hidden";
    }
    if(username.value.trim()==""){
        fathername.style="border:2px solid red";
        lastname.style.visibility="visible";

    }
    else{
        fathername.style="border:2px solid black";
        lastname.style.visibility="hidden";

    }
    if(email.value.trim()==""){
        email.style="border:2px solid red";
        emailvalid.style.visibility="visible";

    }
    else{
        email.style="border:2px solid black";
        emailvalid.style.visibility="hidden";
    }
    if(dob.value.trim()==""){
        dob.style="border:2px solid red";
        dobvalid.style.visibility="visible";

    }
    else{
        dob.style="border:2px solid black";
        dobvalid.style.visibility="hidden";
    }
    if(mobilenumber.value.trim()==""){
        mobilenumber.style="border:2px solid red";
        mobilenumbervalid.style.visibility="visible";

    }
    else{
        mobilenumber.style="border:2px solid black";
        mobilenumbervalid.style.visibility="hidden";
    }
    if(address1.value.trim()==""){
        address1.style="border:2px solid red";
        addressvalid.style.visibility="visible";

    }
    else{
        address1.style="border:2px solid black";
        addressvalid.style.visibility="hidden";
    }
    if(city.value.trim()==""){
        city.style="border:2px solid red";
        cityvalid.style.visibility="visible";

    }
    else{
        city.style="border:2px solid black";
        cityvalid.style.visibility="hidden";
    }
    if(zip1.value.trim()==""){
        zip1.style="border:2px solid red";
        zip1valid.style.visibility="visible";

    }
    else{
        zip1.style="border:2px solid black";
        zip1valid.style.visibility="hidden";
    }
    
    
}
/**---------------------Name------------------------------- */
function namefunction(){
    var u_name = document.getElementById("name");
    var userinvalid=document.getElementById("invaliduser");
    var nameregx=/^([a-zA-Z]{2,20})$/;
    if(nameregx.test(u_name.value)==false){
        u_name.style.border="1px solid red";
        userinvalid.innerHTML="Username is not in correct format";
        userinvalid.style.visibility="visible";
    }
    else{
        userinvalid.innerHTML=""
        userinvalid.style.visibility="hidden";
        u_name.style.border="1px solid black";
    }
    
    
}

function fatherfunction(){
    var fathername=document.getElementById("fathername");
    var lastname=document.getElementById("lastname");
    var nameregx=/^([a-zA-Z]{1,20})$/;
    if(nameregx.test(fathername.value)==false){
        fathername.style.border="1px solid red";
        lastname.innerHTML="lastname is not in correct format";
        lastname.style.visibility="visible";
        fatherfunction();
    }
    else{
        lastname.innerHTML=""
        lastname.style.visibility="hidden";
        fathername.style.border="1px solid black";
    }
}
function emailfunction(){
    var email=document.getElementById("email");
    var emailvalid=document.getElementById("emailvalid");
    var emailregx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
    if(emailregx.test(email.value)==false){
        emailvalid.innerHTML="email is not in correct format";
        emailvalid.style.visibility="visible";
        email.style.border="1px solid red";
        emailfunction();
    }
    else{
        emailvalid.innerHTML=""
        emailvalid.style.visibility="hidden";
        email.style.border="1px solid black";
    }
}
function dobfunction(){
    var dob=document.getElementById("dob");
    var dobvalid=document.getElementById("dobvalid");
    var dobregx=/^([0-9]{2})-([0-1][0-9])-([0-9]{4})$/;
    if(dobregx.test(dob.value)==false){
        dobvalid.innerHTML="dob is not a correct format";
        dobvalid.style.visibility="visible";
        dob.style.border="1px solid red";
        dobfunction();
    }
    else{
        dobvalid.innerHTML=""
        dobvalid.style.visibility="hidden";
        dob.style.border="1px solid black";
    }
}
function mobilenumberfunction(){
    var mobilenumber=document.getElementById("mobilenumber");
    var mobilenumbervalid=document.getElementById("mobilenumbervalid");
    var mobileregx=/^[7-9]([0-9]{9})$/;
    if(mobileregx.test(mobilenumber.value)==false){
        mobilenumbervalid.innerHTML="Mobile number should be 10 numbers"
        mobilenumbervalid.style.visibility="visible";
        mobilenumber.style.border="1px solid red";
        mobilenumberfunction();
    }
    else{
        mobilenumbervalid.innerHTML="";
        mobilenumbervalid.style.visibility="hidden";
        mobilenumber.style.border="1px solid black";
    }
}
function checkedfunction(){
    var address=document.getElementById("address").value;
    var addressln2=document.getElementById("addressln2").value;
    var city1=document.getElementById("city1").value;
    var state=document.getElementById("state").value;
    var zip=document.getElementById("zip").value;

    /**Permanant Address */
    var address1=document.getElementById("address1");
    var address1ln2=document.getElementById("address1ln2");
    var city=document.getElementById("city");
    var state1=document.getElementById("state1");
    var zip1=document.getElementById("zip1");
    var check=document.getElementById("check");
    if(check.checked==true){
        address1.value=address;
        address1ln2.value=addressln2;
        city.value=city1;
        zip1.value=zip;
        state1.value=state;
    }
    else{
        address1.value="";
        address1ln2.value="";
        city.value="";
        zip1.value="";
        state1.value=state1[0].value;
    }
    
    
}
function zipfunction(){
    var zipregx=/^[6]([0-9]{5})$/
    var zip=document.getElementById("zip");
    var zip_valid=document.getElementById("zip_valid");
    
    if(zipregx.test(zip.value)==false){
        zip_valid.innerHTML="enter correct zipcode";
        zip_valid.style.visibility="visible";
        zip.style.border="1px solid red";
    }
    else{
        zip_valid.innerHTML="";
        zip_valid.style.visibility="hidden";
        zip.style.border="1px solid black";
    }
}
function zip1function(){
    var zipregx=/^[6]([0-9]{5})$/
    var zip1=document.getElementById("zip1");
    var zip1valid=document.getElementById("zip1valid")
    if(zipregx.test(zip1.value)==false){
        zip1valid.innerHTML="enter correct zipcode";
        zip1valid.style.visibility="visible";
        zip1.style.border="1px solid red";
    }
    else{
        zip1valid.innerHTML="";
        zip1valid.style.visibility="hidden";
        zip1.style.border="1px solid black";
    }
}

function selectPhoto(){
    var photo=document.getElementById("photo");
    console.log(photo.value);
    if(!(photo.value=="")){
        document.getElementById("photovalid").innerHTML="Successfully added"
    }
    
}