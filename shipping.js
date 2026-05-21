function insertPSC(){

const delivery=document.querySelector(".co-delivery-method");

if(!delivery) return;

if(document.querySelector("#psc-box")) return;

const div=document.createElement("div");

div.id="psc-box";

div.innerHTML=`
<div style="margin:15px 0">
<input 
id="psc"
type="text"
placeholder="Zadejte PSČ pro automatický rozvoz"
style="
width:100%;
padding:15px;
background:#111;
color:#fff;
border:2px solid #444;
border-radius:10px;
font-size:16px;
box-sizing:border-box;
"
>
</div>
`;

delivery.prepend(div);

}

function lockAll(){

const ids=["64","100","109","110"];

ids.forEach(id=>{

const el=document.querySelector('input[value="'+id+'"]');

if(!el) return;

el.disabled=true;

const row=el.closest("tr,.co-box,.delivery-option,.radio-wrapper,li,div");

if(row){
row.style.pointerEvents="none";
row.style.opacity=".35";
}

});

}

function unlockPersonal(){

const osobni=document.querySelector('input[value="63"]');

if(!osobni) return;

osobni.disabled=false;

const row=osobni.closest("tr,.co-box,.delivery-option,.radio-wrapper,li,div");

if(row){
row.style.pointerEvents="auto";
row.style.opacity="1";
}

osobni.checked=true;

}

function enableShipping(id){

const el=document.querySelector('input[value="'+id+'"]');

if(!el) return;

el.disabled=false;
el.checked=true;

const row=el.closest("tr,.co-box,.delivery-option,.radio-wrapper,li,div");

if(row){
row.style.pointerEvents="none";
row.style.opacity="1";
}

}

function autoShipping(){

insertPSC();

lockAll();

unlockPersonal();

const psc=document.querySelector("#psc")?.value.replace(/\s/g,"");

if(!psc) return;

// JAROMER
if(["55101"].includes(psc)){

enableShipping("64");

}

// DO 5KM
else if([
"55102",
"55103",
"55203",
"55204"
].includes(psc)){

enableShipping("109");

}

// DO 10KM
else if([
"54901",
"55205",
"55224",
"55225",
"55104"
].includes(psc)){

enableShipping("100");

}

// DO 15KM
else if([
"54701",
"54932",
"54941",
"54401",
"55221"
].includes(psc)){

enableShipping("110");

}

}

setInterval(autoShipping,500);
