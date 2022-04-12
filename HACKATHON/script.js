var label=document.createElement("label");
label.innerHTML="SEARCH BY NAME"
label.setAttribute("class","max");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.setAttribute("id","btn");
button.innerHTML="Search";


document.body.append(label,br,input,br1,button);




async function foo(){
    try{
        let names=document.getElementById("text").value;
        let something=await fetch(`https://api.nationalize.io?name=${names}`);
        let nothing=await something.json();
        console.log(nothing);
        
        
let div1=document.createElement("div");
div1.innerHTML="HERE IS YOUR SEARCH RESULT";
div1.setAttribute("id","main")
div1.setAttribute("class","card text-white bg-primary mb-2");


// div2.innerHTML=`${nothing.country[0].country_id}`;



let div2=document.createElement("div");
div2.innerHTML=`Name :  ${nothing.name}`;
div2.setAttribute("class","card-header");


// let div3=document.createElement("p");
// div3.innerHTML=`Country ID :  ${nothing.country[0].country_id}`;
// div3.setAttribute("class","card-header");

let div3=document.createElement("p");
div3.innerHTML=`Probability  : ${nothing.country[0].probability}`;
div3.setAttribute("class","card-header");

let h5=document.createElement("p");
h5.innerHTML=`Country ID :  ${nothing.country[0].country_id}`;
h5.setAttribute("class","card-header");

let p=document.createElement("p");
p.innerHTML=`Country ID :  ${nothing.country[1].country_id}`;
p.setAttribute("class","card-header");

div3.append(h5,p);

div1.append(div2);

div1.append(div3);

document.body.append(div1);


        

    }catch(error){
        console.log(error);
    }
}


