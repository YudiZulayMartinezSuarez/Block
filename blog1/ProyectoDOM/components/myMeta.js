import confi from "../../storge/confi.js";
export default{
    showMeta(){
        confi.datamyMeta();
        Object.assign(this,JSON.parse(localStorage.getItem("myMeta")));

        const ws = new Worker("storage/wsmyMeta", {type: "module"});

        ws.postMessage({module:"displayMeta", data: this.content});

        ws.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data, "text/xml");

            document.querySelector("#content").append(...doc.body.children);
            ws.terminate();
        })
    }
};
   

