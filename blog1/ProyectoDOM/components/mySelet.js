import confi from "../../storge/confi.js";
export default{
    showSelet(){
        confi.datamySelet();
        Object.assign(this,JSON.parse(localStorage.getItem("mySelet")));

        const ws = new Worker("storage/wsmySelet", {type: "module"});

        ws.postMessage({module:"displaySelet", data: this.Selet});

        ws.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data, "text/xml");

            document.querySelector("#Selet").append(...doc.body.children);
            ws.terminate();
        })
    }
};
