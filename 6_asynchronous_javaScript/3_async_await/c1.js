const { error } = require("console");


function getUser(id) {
    const names = ['amar', 'bala', 'ram'];

    return new Promise((resolve, reject) => {
        if (id >= names.length) {
            reject(new Error(`user id ${id} ,not present the users `));
        }
        const name = names[id]
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

async function runFun() {
    console.log("before");
    try {
        const user = await getUser(1);
        const repo = await getGitRepositorys(user.name);
        console.log(repo.name);
        console.log(repo.repo);
    }
    catch (e) {
        console.log('error', e.message);
    }
    console.log("after");

}

runFun();