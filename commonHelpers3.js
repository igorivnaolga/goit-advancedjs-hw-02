import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as u}from"./assets/vendor-651d7991.js";const t={},m=document.querySelector(".form");m.addEventListener("input",l);m.addEventListener("submit",a);function a(e){e.preventDefault();for(let s=0;s<t.amount;s+=1){const i=t.delay+t.step*s;r(s+1,i).then(({position:o,delay:n})=>{u.success({message:`✅ Fulfilled promise ${o} in ${n}ms`})}).catch(({position:o,delay:n})=>{u.error({message:`❌ Rejected promise ${o} in ${n}ms`})})}m.reset()}function r(e,s){return new Promise((i,o)=>{setTimeout(n=>{Math.random()>.3?i({position:e,delay:n}):o({position:e,delay:n})},s)})}function l({target:e}){e.name==="delay"&&(t.delay=+e.value),e.name==="step"&&(t.step=+e.value),e.name==="amount"&&(t.amount=+e.value)}
//# sourceMappingURL=commonHelpers3.js.map
