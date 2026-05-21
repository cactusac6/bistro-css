
document.addEventListener("DOMContentLoaded",()=>{

const box=document.querySelector("#shipping-methods");

if(box&&!document.querySelector("#psc-box")){
box.insertAdjacentHTML("afterbegin",`
<div id="psc-box" style="margin-bottom:15px">
<input id="psc" placeholder="Zadejte PSČ"
style="width:100%;padding:14px;background:#111;color:#fff;border:1px solid #444;border-radius:10px">
</div>
`);
}

const zones={
jaromer:["55101"],
km5:["55102","55103","55203","55204"],
km10:["54901","55205","55224","55225","55104"],
km15:["54701","54932","54941","54401","55221"]
};

function setShip(){

const psc=document.querySelector("#psc")?.value.replace(/\s/g,"");

const osobni=document.querySelector('input[value="63"]');
const jaromer=document.querySelector('input[value="64"]');
const km5=document.querySelector('input[value="65"]');
const km10=document.querySelector('input[value="66"]');
const km15=document.querySelector('input[value="67"]');

[jaromer,km5,km10,km15].forEach(el=>{
if(!el)return;
el.disabled=true;
el.closest(".radio-wrapper").style.cssText="pointer-events:none;opacity:.35";
});

if(osobni){
osobni.disabled=false;
osobni.closest(".radio-wrapper").style.cssText="pointer-events:auto;opacity:1";
osobni.checked=true;
}

if(!psc)return;

function enable(el){
if(!el)return;
el.disabled=false;
el.checked=true;
el.closest(".radio-wrapper").style.cssText="pointer-events:none;opacity:1";
}

if(zones.jaromer.includes(psc)) enable(jaromer);
else if(zones.km5.includes(psc)) enable(km5);
else if(zones.km10.includes(psc)) enable(km10);
else if(zones.km15.includes(psc)) enable(km15);

}

setInterval(setShip,500);

});
