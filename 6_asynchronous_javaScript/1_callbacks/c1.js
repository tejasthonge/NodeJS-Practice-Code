console.log('before');

getUser(2, (user) => {
    console.log(user.name);
})
console.log('after');


function getUser(id, callback) {
    const names = ['amar', 'bala', 'ram'];
    const name = names[id]

    setTimeout(() => {
        callback({ id: id, name: name });
    },
        2000
    );
}

/*
before
after
        delay of(2 sec)
ram

*/

//by this way we perform the callback fucntions
