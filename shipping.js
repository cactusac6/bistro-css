document.addEventListener("DOMContentLoaded",()=>{

setInterval(()=>{

const table=document.querySelector(".shipping-billing-table");
if(!table)return;

// PSC BOX
if(!document.querySelector("#psc-box")){

table.insertAdjacentHTML("afterbegin",`
<div id="psc-box" style="padding:15px">
<input id="psc" type="text" placeholder="Zadejte PSČ pro rozvoz"
style="
width:100%;
padding:14px;
background:#111;
color:#fff;
border:2px solid #444;
border-radius:10px;
font-size:16px;
box-sizing:border-box;
">
</div>
`);

}

// DOPRAVY
const osobni=document.querySelector('input[value="63"]');
const jaromer=document.querySelector('input[value="64"]');
const km10=document.querySelector('input[value="100"]');
const km5=document.querySelector('input[value="109"]');
const km15=document.querySelector('input[value="110"]');

// zamknout
[jaromer,km10,km5,km15].forEach(el=>{

if(!el)return;

el.disabled=true;

const row=el.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="none";
row.style.opacity=".35";
}

});

// osobni povolit
if(osobni){

osobni.disabled=false;

const row=osobni.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="auto";
row.style.opacity="1";
}

}

// PSC
const psc=document.querySelector("#psc")?.value.replace(/\s/g,"");

if(!psc)return;

// ZONY
const zones={
jaromer:["55101"],
km5:["55102","55103","55203","55204"],
km10:["54901","55205","55224","55225","55104"],
km15:["54701","54932","54941","54401","55221"]
};

function enable(el){

if(!el)return;

el.disabled=false;
el.checked=true;

const row=el.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="none";
row.style.opacity="1";
}

}

if(zones.jaromer.includes(psc)) enable(jaromer);
else if(zones.km5.includes(psc)) enable(km5);
else if(zones.km10.includes(psc)) enable(km10);
else if(zones.km15.includes(psc)) enable(km15);

},500);

});
