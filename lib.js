function updateAmount(product, cb)
{
    setTimeout(() => {
        console.log(product + ' purchased');
        cb()
        cb()
        cb()
        cb()
        cb()
    }, 2000);
}

function promiseUpdateAmoun(product){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}

module.exports = {
    updateAmount : updateAmount,
    promiseUpdateAmoun: promiseUpdateAmoun
}
