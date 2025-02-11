import{j as e,u as a,o as t,p as s,q as i,r,M as o}from"./react-GwzQ9Qa2.js";import{O as l}from"./index-CCC7kA1I.js";import"./vendor-DLtdiVw5.js";const n=()=>e.jsx("section",{id:"sobre",className:"py-10 px-6 md:px-12 lg:px-24 text-center mt-20 mb-12 scroll-mt-20",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Sobre Nós"}),e.jsxs("p",{className:"text-gray-600 text-lg",children:["A ",e.jsx("span",{className:"font-semibold",children:"Bem Receptivo"})," é uma agência especializada em turismo receptivo, oferecendo experiências personalizadas e atendimento de qualidade em Fortaleza, Ceará. Nossa missão é tornar sua viagem inesquecível."]})]})}),c=({text:a,onClick:t,className:s})=>e.jsx("button",{onClick:t,className:`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ${s}`,children:a}),d=({image:t,title:s,description:i,buttonText:r,onButtonClick:o,alt:n})=>{const{ref:d,inView:m}=a({triggerOnce:!0,threshold:.2});return e.jsxs("div",{ref:d,className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[m&&e.jsx("div",{className:"flex-1 flex justify-center items-center p-4",children:e.jsx(l,{avifSrc:t.avif,webpSrc:t.webp,svgSrc:t.svg,pngSrc:t.png,alt:n,className:"rounded-xl object-cover shadow-2xl transition-transform duration-300 ease-in-out \n                       hover:scale-105 hover:shadow-3xl \n                       w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] \n                       lg:w-[460px] lg:h-[460px]"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:s}),e.jsx("p",{className:"text-gray-600 mb-4",children:i}),e.jsx(c,{text:r,onClick:o})]})]})},m=()=>{const a=[{title:"Jericoacoara",description:"Conheça as incríveis lagoas de águas cristalinas e praias paradisíacas de Jericoacoara.",image:{avif:"/images/avif/bem-receptivo-jeri-1.avif",webp:"/images/webp/bem-receptivo-jeri-1.webp",svg:"/images/svg/bem-receptivo-jeri-1.svg",png:"/images/png/bem-receptivo-jeri-1.png"},alt:"Vista das dunas, lagoas cristalinas e praias de Jericoacoara, Ceará",buttonText:"Ver Mais",onButtonClick:()=>alert("Mais informações sobre Jericoacoara")},{title:"Lagoinha",description:"Paisagem deslumbrante da Praia de Lagoinha, com falésias avermelhadas contrastando com o verde mar, coqueiros balançando ao vento e jangadas coloridas ancoradas na areia dourada",image:{avif:"/images/avif/bem-receptivo-lagoinha.avif",webp:"/images/webp/bem-receptivo-lagoinha.webp",svg:"/images/svg/bem-receptivo-lagoinha.svg",png:"/images/png/bem-receptivo-lagoinha.png"},alt:"Praia de Lagoinha, com mar azul e coqueiros ao fundo",buttonText:"Ver Mais",onButtonClick:()=>alert("Mais informações sobre Lagoinha")},{title:"Fortaleza",description:"Explore a capital cearense, famosa por suas belas praias e rica cultura.",image:{avif:"/images/avif/bem-receptivo-fortaleza-1.avif",webp:"/images/webp/bem-receptivo-fortaleza-1.webp",svg:"/images/svg/bem-receptivo-fortaleza-1.svg",png:"/images/png/bem-receptivo-fortaleza-1.png"},alt:"Praia do Futuro em Fortaleza, conhecida por suas barracas e águas cristalinas",buttonText:"Ver Mais",onButtonClick:()=>alert("Mais informações sobre Praia do Futuro")}];return e.jsxs("div",{className:"min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-300 via-yellow-400 to-orange-500 py-20 px-4",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white text-center mb-12",children:"Conheça nossos principais destinos no Ceará"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl",children:a.map(((a,t)=>e.jsx(d,{image:a.image,title:a.title,description:a.description,buttonText:a.buttonText,onButtonClick:a.onButtonClick,alt:a.alt,className:"w-[90%] sm:w-[80%] h-[400px] mx-auto shadow-lg shadow-black/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"},t)))})]})},g=()=>{const a=[{title:"Transfers",description:"Realizamos transferências seguras e confortáveis entre o aeroporto e seu hotel.",icon:e.jsx(t,{size:40}),bgColor:"bg-blue-500"},{title:"City Tours",description:"Conheça os principais pontos turísticos de Fortaleza e arredores com guias experientes.",icon:e.jsx(s,{size:40}),bgColor:"bg-green-500"},{title:"Passeios Personalizados",description:"Planejamos roteiros exclusivos para você e sua família.",icon:e.jsx(i,{size:40}),bgColor:"bg-orange-500"}];return e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"servicos",className:"py-14 px-6 md:px-12 lg:px-24 bg-gray-100",children:e.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[e.jsx("h2",{className:"text-4xl font-bold text-gray-800 mb-12",children:"Nossos Serviços"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10",children:a.map(((a,t)=>e.jsxs("div",{className:`p-8 rounded-xl shadow-lg text-white flex flex-col items-center transform transition-all duration-300 hover:scale-105 ${a.bgColor}`,children:[e.jsx("div",{className:"mb-4",children:a.icon}),e.jsx("h3",{className:"text-2xl font-semibold",children:a.title}),e.jsx("p",{className:"text-lg mt-2 text-center",children:a.description})]},t)))})]})}),e.jsx("section",{children:e.jsx(m,{})})]})},p=()=>{const a=[{title:"Fortaleza",image:{avif:"/images/avif/bem-receptivo-fortaleza-1.avif",webp:"/images/webp/bem-receptivo-fortaleza-1.webp",svg:"/images/svg/bem-receptivo-fortaleza-1.svg",png:"/images/png/bem-receptivo-fortaleza-1.png"},description:"O coração vibrante do Ceará, onde cultura e mar se encontram."},{title:"Jericoacoara",image:{avif:"/images/avif/bem-receptivo-jeri-1.avif",webp:"/images/webp/bem-receptivo-jeri-1.webp",svg:"/images/svg/bem-receptivo-jeri-1.svg",png:"/images/png/bem-receptivo-jeri-1.png"},description:"Um paraíso escondido entre dunas e lagoas cristalinas."},{title:"Lagoinha",image:{avif:"/images/avif/bem-receptivo-lagoinha.avif",webp:"/images/webp/bem-receptivo-lagoinha.webp",svg:"/images/svg/bem-receptivo-lagoinha.svg",png:"/images/png/bem-receptivo-lagoinha.png"},description:"Um refúgio paradisíaco com mar verde e coqueiros dançantes ao vento."}],[t,s]=r.useState(0);return r.useEffect((()=>{const e=setInterval((()=>{s((e=>(e+1)%a.length))}),2e3);return()=>clearInterval(e)}),[a.length]),e.jsx("div",{id:"home",className:"relative w-full min-h-screen flex items-center justify-center \n                 bg-gradient-to-l from-green-500 to-blue-600 shadow-lg rounded-lg px-8\n                 pt-[120px] lg:pt-[100px]",children:e.jsxs("section",{className:"flex flex-col-reverse lg:flex-row w-full max-w-6xl items-center justify-between gap-8",children:[e.jsxs("div",{className:"flex-1 text-white text-center lg:text-left",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Bem Receptivo Passeios em Fortaleza/Ceará"}),e.jsx("h2",{className:"text-xl font-light mb-4",children:"Realizamos Serviços de Receptivo (Transfer IN/OUT) em Fortaleza e Passeios no Ceará para: Jericoacoara, Canoa Quebrada, Cumbuco, Beach Park, Lagoinha, Mundaú, Morro Branco, Praia das Fontes, Águas Belas e City Tour."}),e.jsx("button",{className:"bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300 mb-6",children:"Saiba Mais"})]}),e.jsx("div",{className:"flex-1 flex justify-center items-center p-4",children:e.jsx(l,{avifSrc:a[t].image.avif,webpSrc:a[t].image.webp,svgSrc:a[t].image.svg,pngSrc:a[t].image.png,alt:`${a[t].title} - ${a[t].description}`,className:"rounded-full object-cover shadow-lg \n                       w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] \n                       lg:w-[460px] lg:h-[460px]",loading:0===t?"eager":"lazy",fetchpriority:0===t?"high":"auto"})})]})})},x=r.memo((({title:a,videoId:t})=>{const[s,i]=r.useState(!1),[o,l]=r.useState("");return r.useEffect((()=>{l(`https://img.youtube.com/vi/${t}/hqdefault.jpg`)}),[t]),e.jsxs("div",{className:"bg-white shadow-md rounded-lg overflow-hidden w-full",children:[e.jsx("div",{className:"relative w-full aspect-[9/16] cursor-pointer p-1 border-4 border-white shadow-lg rounded-2xl",onClick:()=>i(!0),children:s?e.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-2xl",src:`https://www.youtube.com/embed/${t}?autoplay=1&rel=0`,title:a,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):e.jsx("img",{src:o,alt:a,className:"absolute top-0 left-0 w-full h-full object-cover rounded-2xl",loading:"lazy"})}),e.jsx("div",{className:"p-4",children:e.jsx("h2",{className:"text-lg font-semibold text-gray-800 text-center",children:a})})]})})),u=()=>{const a=r.useMemo((()=>[{title:"Litoral Leste",videoId:"NDVaQ3yWsgY"},{title:"Litoral Oeste",videoId:"ybNZbaE7uSY"}]),[]);return e.jsxs("div",{className:"min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16 px-4",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-white text-center mb-10",children:"Veja nossos passeios pelo Litoral Leste e Oeste do Ceará"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl",children:a.map((a=>e.jsx(x,{title:a.title,videoId:a.videoId},a.videoId)))})]})},h=()=>{const[a,t]=r.useState(!1),s="reservas@bemreceptivo.com.br";return e.jsxs("div",{id:"contato",className:"bg-gradient-to-b from-blue-500 to-blue-300 py-16 px-6 flex flex-col items-center",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Entre em Contato"}),e.jsx("p",{className:"text-lg text-white mb-4",children:"Clique no botão abaixo para ver o e-mail:"}),a?e.jsxs("a",{href:`mailto:${s}`,className:"flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition",children:[e.jsx(o,{className:"w-5 h-5"}),s]}):e.jsxs("button",{onClick:e=>{e.preventDefault(),t(!0)},className:"flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition",children:[e.jsx(o,{className:"w-5 h-5"}),"Mostrar E-mail"]})]})},b=r.memo((({url:a,title:t})=>{const[s,i]=r.useState(!1),[o,l]=r.useState("");return r.useEffect((()=>{const e=a.split("/embed/")[1];l(`https://img.youtube.com/vi/${e}/hqdefault.jpg`)}),[a]),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"relative w-[560px] h-[315px] p-2 bg-white border-4 border-white shadow-xl rounded-2xl",children:s?e.jsx("iframe",{src:`${a}?autoplay=1`,title:t,allowFullScreen:!0,className:"w-full h-full rounded-xl shadow-lg"}):e.jsx("img",{src:o,alt:t,className:"w-full h-full object-cover rounded-xl cursor-pointer",loading:"eager",fetchpriority:"high",referrerPolicy:"no-referrer",onClick:()=>i(!0)})})})})),v=r.memo((({url:a,title:t})=>{const[s,i]=r.useState(!1),[o,l]=r.useState("");return r.useEffect((()=>{const e=a.split("/embed/")[1];l(`https://img.youtube.com/vi/${e}/hqdefault.jpg`)}),[a]),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"relative w-[320px] h-[570px] p-2 bg-white border-4 border-white shadow-xl rounded-2xl",children:s?e.jsx("iframe",{src:`${a}?autoplay=1`,title:t,allowFullScreen:!0,className:"w-full h-full rounded-xl shadow-lg"}):e.jsx("img",{src:o,alt:t,className:"w-full h-full object-cover rounded-xl cursor-pointer",loading:"eager",fetchpriority:"high",referrerPolicy:"no-referrer",onClick:()=>i(!0)})})})})),f=()=>{const a=r.useMemo((()=>[{url:"https://www.youtube.com/embed/Rh1gdxv_LVE",title:"Depoimento 1"},{url:"https://www.youtube.com/embed/op8AevAQ9NU",title:"Depoimento 2"}]),[]),t=r.useMemo((()=>[{url:"https://www.youtube.com/embed/c5WLffdjBiM",title:"Short 1"},{url:"https://www.youtube.com/embed/uRgt9ADgabg",title:"Short 2"},{url:"https://www.youtube.com/embed/duPECGqIYJ8",title:"Short 3"},{url:"https://www.youtube.com/embed/2aKZO-5jogc",title:"Short 4"},{url:"https://www.youtube.com/embed/kFMxQkyjJWU",title:"Short 5"},{url:"https://www.youtube.com/embed/nkO8NyHTnWk",title:"Short 6"}]),[]);return e.jsxs("div",{id:"depoimentos",className:"min-h-screen bg-gradient-to-b from-gray-200 to-gray-50 py-16 px-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-12",children:"O que dizem sobre nós... Assistam os depoimentos!"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12",children:a.map((a=>e.jsx(b,{url:a.url,title:a.title},a.url)))}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((a=>e.jsx(v,{url:a.url,title:a.title},a.url)))})]})},w=()=>e.jsxs("div",{children:[e.jsx(p,{}),e.jsx(g,{}),e.jsx(n,{}),e.jsx(u,{}),e.jsx(f,{}),e.jsx(h,{})]});export{w as default};
//# sourceMappingURL=Home-C-uVc-PX.js.map
