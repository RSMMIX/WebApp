self.onmessage =(message)=>{
    // console.log("SDfas")
    let send_time_now = () => {
        postMessage(new Date().toString());
    };
    postMessage(new Date().toString());
    setInterval(send_time_now, 1000);
    // console.log("test ewdqwedqf -> "+e)
}