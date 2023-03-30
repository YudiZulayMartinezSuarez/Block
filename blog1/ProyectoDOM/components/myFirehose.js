export  default{
     title: "Formacion",



//js vercion2 
showFirehose(){
   // cramos el worker
   const ws = new Worker("strge/wsmyFirehose.js",{type:
  "module"});
  //enviamos un mensaje al worker

  let id = [];
  

  //id.push("#title");
  ws.postMessage({module: "listtitle", data: this.title});

 
  //esto lo que llega al worked

  ws.addEventListener("message", (e)=>{
    //estamos parseando lo que trae el evento (mensaje)
    let doc = new DOMParser().parseFromString(e.data,"text/xml");

    //insertamos en nuestro index, en el selector  #company
    document.querySelector(id[count]).append(...doc.body.children);

    //terminamos el trabajo del worker
    (id.length-1==count) ? ws.terminate(): count++;

  })
}

}

self.addEventListener("message", (e)=>{
   postMessage(wsmyBanner[`${e.data.module}`(e.data.data)]);
 });


/* js version1 
showFirehose(){
        document.querySelector("#Firehose").insertAdjacentHTML("beforeend",`
        <h3 class="pb-4 mb fst-italic border-bottom">${this.title}</h3>
        `);
     }
 */