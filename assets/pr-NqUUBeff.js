import{d as a,i as r,r as c,j as t}from"./vendor-eWlS8ss3.js";import"./animations-CtgFUxyq.js";function u(){const{scene:i,animations:n}=a("/space_station_3.glb"),{actions:s}=r(n,i);return c.useEffect(()=>{if(i&&n&&n.length>0&&s){const o=n[0].name,e=s[o];e&&e.play()}},[s,n,i]),i?t.jsxs(t.Fragment,{children:[t.jsx("ambientLight",{intensity:1.5}),t.jsx("directionalLight",{position:[5,5,5],intensity:.5,castShadow:!0}),t.jsx("directionalLight",{position:[-5,5,5],intensity:.5,castShadow:!0}),t.jsx("directionalLight",{position:[0,10,5],intensity:.5,castShadow:!0}),t.jsx("primitive",{object:i,scale:20})]}):null}export{u as default};
