//converting the callbak to promises

const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

//#following commited code
/*


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


*/

//fist we have to know way we have to convert callback to promise
//--it get the callback hell that nessted function and calling 
//-- which making confuing


function getUser(id) {
    const names = ['amar', 'bala', 'ram'];
    const name = names[id]
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({ id: id, name: name });
            }, 2000);
        } catch (e) {
            reject(e);
        }
    }); setTimeout(() => {
        resolve({ id: id, name: name });
    }, 2000);
}

function getGitRepositorys(name) {
    repository = {
        amar: ["repo1", 'repo2', 'repo3'],
        bala: ["repo1", 'repo2', 'repo3'],
        ram: ["repo1", 'repo2', 'repo3'],
    }

    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({
                    name: name,
                    repo: repository[name]
                });
            }, 200)
        }
        catch (e) {
            reject(e);
        }
    });

}

getUser(1).then(userObj => {
    console.log(userObj);
    return getGitRepositorys(userObj.name)
}).then(repoObj => {
    console.log(repoObj);
}).catch(error => console.log(error.message));