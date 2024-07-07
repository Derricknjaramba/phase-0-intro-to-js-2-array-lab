
let cats = ["Milo", "Otis", "Garfield"];
let destructivelyAppendCat=function(){
    cats.push("Ralph");
    console.log(cats);
}
let destructivelyPrependCat=function(){
    cats.unshift("Bob");
    console.log(cats);
}
    let destructivelyRemoveLastCat=function(){
        cats.pop();
        console.log(cats);
    }
    let destructivelyRemoveFirstCat=function(){
        cats.shift();
        console.log(cats);
    }
    function appendCat(name){
        return[...cats,name];
    }
    function prependCat(name){
        return[name, ...cats];

    }
    function removeLastCat(){
        return cats.slice(0,cats.length -1);
    }
    function removeFirstCat(){
        return cats.slice(1,cats.length);
    }


