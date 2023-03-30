import confi  from "../../storge/confi.js";
export default{
  showHeader(){
    confi.datamyHeader();
    
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));

    const ws = new Worker("storage/wsmyHeader.js",{type:"module"});
    
    let id = [];
    let count = 0;
    
    ws.postMessage({module: "displaytitle", data: Object.title});
    ws.postMessage({module: "displaycompany", data: Object.company});
    id = ["#title","#company"];

    ws.addEventListener("message", (e)=>{
      let doc = new DOMParser().parseFromString(e.data,"text/xml");

      document.querySelector(id[count].appendChild(...doc.body.children));

      (id.length-1==count)? ws.terminate(): count++;
    }) 
  }
}