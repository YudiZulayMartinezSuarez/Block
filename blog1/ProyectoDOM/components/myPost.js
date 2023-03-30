import confi from "../../storge/confi.js";
export default{
    showPost(){
        confi.datamyPost();
        Object.assign(this,JSON.parse(localStorage.getItem("myPost")));

        const ws = new Worker("storage/wsmyPost", {type: "module"});

        ws.postMessage({module:"displayPost", data: this.post});

        ws.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data, "text/xml");

            document.querySelector("#post").append(...doc.body.children);
            ws.terminate();
        })
    }
};

