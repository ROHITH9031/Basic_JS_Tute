function debounce(func,delay) {
    let timeoutid;
    return function(...args){
        if(timeoutid){
            clearTimeout(timeoutid);
        }
        timeoutid = setTimeout(()=>{
            func.apply(globalThis,args);
        },delay);
    }
    
}

const fetchData = (event)=>{
    console.log('Fetching data for: ',event.target.value);
    
};
const debouncefield = debounce(fetchData,500);

document.getElementById('search').addEventListener('input',debouncefield);