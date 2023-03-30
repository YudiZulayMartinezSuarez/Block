import confi from "../../storge/confi.js";
export default{
    showBanner(){
        confi.datamyBanner();
        Object.assign(this,JSON.parse(localStorage.getItem("myBanner")));

        const ws = new Worker("storage/wsmyBanner", {type: "module"});

        ws.postMessage({module:"displayBanner", data: this.Banner});

        ws.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data, "text/xml");

            document.querySelector("#Banner").append(...doc.body.children);
            ws.terminate();
        })
    }
};


