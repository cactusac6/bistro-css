document.addEventListener("DOMContentLoaded",()=>{

function initShipping(){

const methods=document.querySelector("#order-shipping-methods");
if(!methods)return;

// PSC BOX
if(!document.querySelector("#psc-box")){

const first=document.querySelector(".shipping-billing-table");

if(first){
first.insertAdjacentHTML("afterbegin",`
<div id="psc-box" style="margin-bottom:15px">
<input id="psc" placeholder="Zadejte PSČ pro výpočet dopravy"
style="
width:100%;
padding:14px;
background:#111;
color:#fff;
border:1px solid #444;
border-radius:10px;
font-size:16px;
box-sizing:border-box;
">
</div>
`);
}

}

// ZONY
const zones={
jaromer:["55101"],
km5:["55102","55103","55203","55204"],
km10:["54901","55205","55224","55225","55104"],
km15:["54701","54932","54941","54401","55221"]
};

// INPUT PSC
const psc=document.querySelector("#psc")?.value.replace(/\s/g,"");

// DOPRAVY
const osobni=document.querySelector('input[value="63"]');
const jaromer=document.querySelector('input[value="64"]');
const km5=document.querySelector('input[value="65"]');
const km10=document.querySelector('input[value="66"]');
const km15=document.querySelector('input[value="67"]');

// ZAMKNOUT ROZVOZY
[jaromer,km5,km10,km15].forEach(el=>{

if(!el)return;

el.disabled=true;

const row=el.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="none";
row.style.opacity=".35";
}

});

// OSOBNI POVOLIT
if(osobni){

osobni.disabled=false;

const row=osobni.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="auto";
row.style.opacity="1";
}

osobni.checked=true;

}

// NIC NEZADANO
if(!psc)return;

// FUNKCE
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

// AUTO DOPRAVA
if(zones.jaromer.includes(psc)) enable(jaromer);
else if(zones.km5.includes(psc)) enable(km5);
else if(zones.km10.includes(psc)) enable(km10);
else if(zones.km15.includes(psc)) enable(km15);

}

setInterval(initShipping,500);

});
