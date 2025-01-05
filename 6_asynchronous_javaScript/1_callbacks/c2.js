

function getUser(id, callback) {
    const names = ['amar', 'bala', 'ram'];
    const name = names[id]

    setTimeout(() => {
        callback({ id: id, name: name });
    },
        2000
    );
}

function getGitRepositorys(name, callback) {
    repository = {
        amar: ["repo1", 'repo2', 'repo3'],
        bala: ["repo1", 'repo2', 'repo3'],
        ram: ["repo1", 'repo2', 'repo3'],
    }
    setTimeout(() => {
        callback({
            name: name,
            repo: repository[name]
        });
    }, 2000);

}



console.log('before');
getUser(2, (userObj) => {
    console.log(userObj.name);
    getGitRepositorys(userObj.name, (repoObj) => {
        console.log(`${repoObj.name} : ${repoObj.repo}`);
    })


})
console.log('after');


/*
before
after
        (dely 2 sec)
ram
(dely 2 sec)
ram : repo1,repo2,repo3

*/


