// function print(mes){
//     console.log(mes)
// }
// print("Hello, this my site")
//
// function sum(a=11, b=19, c= a + b){
//     return a+b+c
// }
// function print_sum(print, sum){
//     print(sum())
// }
// print_sum(print, sum)
//
// function outer(){
//     let x = 5
//     function inner(){
//         x *= 2
//         print(x)
//     }
//     return inner
// }
// let fn = outer()
// fn()
// fn()
// fn()
//
// function multi(n){
//     let x = n
//     return function (m){return x * m}
// }
// let f1 = multi(2)
// let result1 = f1(5)
// print(result1)
//
// let f2 = multi(5)
// let result2 = f2(10)
// print(result2)
// print(multi(9)(100))
// let n = 1452;
// (function (n){
//     print(n*996)
// }(n))
// const name = prompt('Введите имя')
// const lastname = prompt('Введите Фамилию')
// const age = prompt('Введите Возраст')
//
// let foo = (function (name, lastname, age){
//     let obg = {name: name, lastname: lastname, age: age}
//     return{
//         display: function (){
//             console.log(`${obg.name} ${obg.lastname} ${obg.age}`)
//         },
//         addPerson: function (){
//             const newName = prompt('Введите имя')
//             const newLastname = prompt('Введите Фамилию')
//             const newAge = prompt('Введите Возраст')
//             obg.name = newName
//             obg.lastname = newLastname
//             obg.age= newAge
//         }
//     }
// })(name, lastname, age);
// foo.display()