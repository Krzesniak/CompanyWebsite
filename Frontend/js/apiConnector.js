'use strict';
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => alert(commits[0].author.login));
let obj;
async function getFetch() {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    const request = new Request("http://localhost:8090/companies", { method: 'GET', cache: 'reload', headers: headers });
    const myResponse =  fetch(request)
        .then(response => response.json())
        .then(rest => rest._embedded)
        .then(rest => rest.companies)
        .then(result => console.log(result))
        .then(result => { return result});
    return myResponse;
}
getFetch().then(() => {
    console.log("heh" + obj);
});