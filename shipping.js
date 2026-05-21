document.addEventListener("DOMContentLoaded",()=>{

function initShipping(){

const wrap=document.querySelector("#order-shipping-methods");
if(!wrap)return;

// vlozeni PSC
if(!document.querySelector("#psc-box")){

const title=wrap.querySelector("h4");

if(title){

title.insertAdjacentHTML("afterend",`
<div id="psc-box" style="margin:15px 0">
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

const zones={
jaromer:["55101"],
km5:["55102","55103","55203","55204"],
km10:["54901","55205","55224","55225","55104"],
km15:["54701","54932","54941","54401","55221"]
};

const psc=document.querySelector("#psc")?.value.replace(/\s/g,"");

const osobni=document.querySelector('input[value="63"]');
const jaromer=document.querySelector('input[value="64"]');
const km5=document.querySelector('input[value="65"]');
const km10=document.querySelector('input[value="66"]');
const km15=document.querySelector('input[value="67"]');

[jaromer,km5,km10,km15].forEach(el=>{

if(!el)return;

el.disabled=true;

const row=el.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="none";
row.style.opacity=".35";
}

});

if(osobni){

osobni.disabled=false;

const row=osobni.closest(".radio-wrapper");

if(row){
row.style.pointerEvents="auto";
row.style.opacity="1";
}

osobni.checked=true;

}

if(!psc)return;

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

}

setInterval(initShipping,500);

});
