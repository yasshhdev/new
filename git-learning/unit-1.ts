
let users = {
    a :10, 
    b:10
}


function add(user: {a:number , b:number}){
 
    let c = user.a+user.b
    console.log(`Addition is ${c}`)
}

add(users)
add({a:10,b:8})