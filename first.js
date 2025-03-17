async function main(){
    const reg = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    if(reg.ok){
        const data = await reg.json();
        console.log(data);
    }

}
main();