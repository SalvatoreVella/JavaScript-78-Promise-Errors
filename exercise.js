const isLogged = true;

const myNewPromise = (user) => {
    return new Promise((resolve, reject) => {
            if (user == true) {
                resolve(Math.random());
            } else {
                reject(new Error("User not logged in"))
            }
    })

}

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
            if (number > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject(new Error("Number too low"))
            }
    })
}

myNewPromise(isLogged)
    .then((num) => {
        console.log(num);
        return num;
    })
    .then((num) => secondPromise(num))
    .then((obj) => console.log(obj))
    .catch((err) => console.error(err))
    .finally(() => console.log("The code is still working!"))