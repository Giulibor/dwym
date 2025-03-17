//command+k+c para comentar muchas lineas

// async function main(){
//     console.log("Hola from main");

// }
// main();

// async function main(){
//     const reg = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
//     if(reg.ok){
//         const data = await reg.json();
//         console.log(data);
//     }

// }
// main();

async function main(){
    const reg = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    if(reg.ok){
        const data = await reg.json();
        console.log(data.docs[0].author_name);
    }

}
main();