export let wsmyheader={
    listtitle(p1){
        return `<a class = "blog-header-log text-dark" href=${p1.href}">${p1.name}</a>`;
    },
    listcompany(p1){
        let plantilla ="";
        p1.array.forEach((val, id) => {
            plantilla += `<a class = "p-2 link-secondary " href=${val.href}">${val.name}</a>`
            
        });
        return plantilla;
    }

}

self.addEventListener("message", (e)=>{
    postMessage(wsmyheader[`${e.data.module}`] (e.data.data))
});