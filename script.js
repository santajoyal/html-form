function foo(){
    let fn=document.getElementById("fn").value;
    let ln=document.getElementById("ln").value;
    let address=document.getElementById("address").value;
    let pincode=document.getElementById("pincode").value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let food=document.querySelectorAll('input[name="food"]:checked').value;
    let state=document.getElementById("state").value;
    let country=document.getElementById("country").value;
    
    let tablebody=document.getElementById("tbody");
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerHTML=`${fn}`;
    let td2=document.createElement("td");
    td2.innerHTML=`${ln}`;
    let td3=document.createElement("td");
    td3.innerHTML=`${address}`;
    let td4=document.createElement("td");
    td4.innerHTML=`${pincode}`;
    let td5=document.createElement("td");
    td5.innerHTML=`${gender}`;
    let td6 =document.createElement("td");
    td6.innerHTML=`${food}`;
    let td7 =document.createElement("td");
    td7.innerHTML=`${state}`;
    let td8 =document.createElement("td");
    td8.innerHTML=`${country}`;

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tablebody.append(tr);

    document.getElementById("fn").value="";
    document.getElementById("ln").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    document.getElementById("female").value.checked=false;
    document.getElementById("male").value.checked=false;
    document.querySelector('input[name="gender"]:checked').value.checked=false;
    document.querySelectorAll('input[name="food"]:checked').value.checked=false;
    document.getElementById("state").value="";
    document.getElementById("country").value="";
}