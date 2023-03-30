import confi from "../../storge/confi.js";
export default{
    showAside(){
        confi.datamyAside();
        Object.assign(this,JSON.parse(localStorage.getItem("myAside")));

        const ws = new Worker("storage/wsmyAside", {type: "module"});

        ws.postMessage({module:"displayAside", data: this.nav});

        ws.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data, "text/xml");

            document.querySelector("#nav").append(...doc.body.children);
            ws.terminate();
        })
    }
};