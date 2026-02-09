import{d as r,R as S,r as m,u as A,j as e,B as x}from"./index-DkhDkyY3.js";import{F as T}from"./index-DO-C1C9S.js";import{R as u,C as p,F as k,T as w,a as g}from"./Choices-Cx1ybjWY.js";const B=r("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;r("p")`
  margin: 1.5rem 0 2rem 0;
`;r(S)`
  display: flex;
  flex-direction: ${({direction:t})=>t==="left"?"row":"row-reverse"};
`;r("div")`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;r("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;const C=r("h1")`
  font-size: clamp(24px, 4vw, 40px);
  line-height: 1.5rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #3c0058;
  font-family: "Motiva Sans Light", sans-serif;
`;r("h2")`
  font-size: clamp(24px, 4vw, 30px); 
  line-height: 1.2;
  padding: 0.5rem 0;
  margin-top: 2rem;
  text-transform: uppercase;
  color: #17007e;
  font-family: "Motiva Sans Light", sans-serif;
`;r("h6")`
   font-size: clamp(14px, 4vw, 18px); 
  line-height: 1.2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  text-align: left; 
  margin: 0; 
`;r("p")`
  font-size: 13px;
`;const E=r("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,N=r(p)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,F=r(u.Button)`

  background: #f5f3ff;
  border-color: #4c13a8;
  color: #4c13a8;


  &:hover {
    color: #4c13a8;
  }

  &.ant-radio-button-wrapper-checked {
    background: #4c13a8 !important;
    border-color: #4c13a8 !important;
    color: #ffffff !important;
  }

`,L=r(u.Group)`
  optionType : button
  buttonStyle : solid
  background: #f5f3ff;
  border-color: #4c13a8;
   display: flex;
  width: 100%;
  .ant-radio-button-wrapper {
    flex: 1;  
    text-align: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    .ant-radio-button-wrapper {
      width: 100%;
    }
  }
`,{Title:H,Text:J}=w,z=[{title:"ไม่เคย",desc:"ไม่เคยรู้สึกชอบ"},{title:"น้อยครั้ง",desc:"นาน ๆ จึงจะรู้สึกชอบสักครั้งหนึ่ง"},{title:"บางครั้ง",desc:"รู้สึกชอบเป็นบางครั้ง"},{title:"บ่อยครั้ง",desc:"รู้สึกชอบเกือบทุกครั้ง"},{title:"ทุกครั้ง",desc:"รู้สึกชอบทุกครั้ง"}],h=t=>{document.getElementById(t).scrollIntoView({behavior:"smooth"})},I=({value:t,scaleReversed:n,onChange:d})=>e.jsx(L,{value:t,onChange:s=>d(s.target.value),children:(n===!0?g.low:g.high).map(s=>e.jsx(F,{value:s.value,children:s.text},s.text))}),O=({question:t,savedData:n,onChange:d})=>e.jsxs(p,{id:t.id,style:{marginBottom:16},children:[e.jsx(w.Text,{strong:!0,children:t.text}),e.jsx(I,{value:n?.[t.id],scaleReversed:t.scaleReversed,onChange:d})]}),K=({survey:t})=>{const[n,d]=m.useState({}),s=t.id;m.useEffect(()=>{const a=localStorage.getItem(s);if(a)try{d(JSON.parse(a))}catch(o){console.error("Failed to parse saved answers",o)}},[]),m.useEffect(()=>{localStorage.setItem(s,JSON.stringify(n))},[n]);const b=(a,o,i,l)=>{d(c=>({...c,[a]:{...c[a],[o]:{...c[a]?.[o],[i]:l}}}))},j=()=>{localStorage.removeItem(s),d({}),h("intro")},v=(a,o)=>a.Assessment.every(i=>i.children.every(l=>l.questions.every(c=>{var f=o?.[i.id]?.[l.id]?.[c.id]!=null;return f||(console.log("missing answer at",i.id,l.id,c.id),h(c.id)),f}))),y=A(),R=()=>{console.log("Assessment Result",n),v(t,n)?y("/result",{state:{survey:t,key:t.id}}):alert("Please complete all assessment!")};return e.jsx(B,{children:e.jsxs(T,{triggerOnce:!0,children:[e.jsx(C,{children:"แบบประเมินความต้องการรับรู้ประสาทสัมผัส"}),e.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",t.targetAge]}),e.jsx(p,{title:"เกณฑ์การให้คะแนน",style:{borderRadius:16,marginTop:24,marginBottom:24},children:e.jsx(k,{dataSource:z,pagination:!1,showHeader:!1,bordered:!1,rowKey:"score",columns:[{dataIndex:"title",width:120,render:a=>e.jsx("strong",{children:a})},{dataIndex:"desc"}]})}),t.Assessment.map(a=>e.jsx("div",{className:"mb-10",children:e.jsx(N,{title:a.title,style:{marginBottom:36},children:a.children.map(o=>e.jsx("div",{className:"mb-8",children:o.questions.map(i=>e.jsx(O,{question:i,savedData:n?.[a.id]?.[o.id],onChange:l=>b(a.id,o.id,i.id,l)},i.id))},o.id))})},a.id)),e.jsxs(E,{children:[e.jsx(x,{color:"#ff0037",onClick:j,children:"Reset"}),e.jsx(x,{onClick:R,children:"Next"})]})]})})};export{K as default};
