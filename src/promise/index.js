const promise = new Promise (function (resolve, reject) {
    resolve('success')
});
//Función de una promesa
const vacas = 10;

const contarVacas = new Promise(function(resolve, reject){
    if(vacas > 10){
        resolve(`Tenemos ${vacas} vacas`);
    }else{
        reject('No tenemos vacas');
    }
})

contarVacas.then((result) => {
    console.log(result);
    }).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Fin del programa');
})