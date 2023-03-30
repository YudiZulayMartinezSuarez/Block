export let  wsmyFirehose = {
    displayFirehose(Firehoses){
        let plantilla ="";
        Firehoses.forEach((val,id) => {
            plantilla+= `
            <h3 class="pb-4 mb fst-italic border-bottom">${this.title}</h3>
            `
            
        });
        return plantilla;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsmyPost[`${e.data.module}`] (e.data.data));
});