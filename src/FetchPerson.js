const fetchPerson = () => {
    return fetch("https://randomuser.me/api")
        .then(d => d.json())
        .then(d => d.results[0]);
};

const promiseWrapper = promise => {
    let status = "pending";
    let result = "";
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );

    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else {
                return result;
            }
        }
    };
};

export const randomNumber = async () => {
    return new Promise(res =>
        setTimeout(() => {
            res(Math.random());
        }, 3000)
    );
};

export const createResource = () => {
    return {
        person: promiseWrapper(fetchPerson()),
        num: promiseWrapper(randomNumber())
    };
};
