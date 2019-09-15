// require('isomorphic-fetch'); // or another library of choice.
import { Dropbox } from 'dropbox';

function token() {
    return document.getElementById('token').value;
}

function init(){
    const TOKEN = token();

    document.getElementById('update').addEventListener('click', function () {
        console.log(TOKEN);
        var dbx = new Dropbox({ accessToken: TOKEN});
        dbx.filesListFolder({path: ''})
            .then(function(response) {
                console.log(response);
                document.getElementById('console').innerText = JSON.stringify(response.entries);
            })
            .catch(function(error) {
                console.log(error);
            });

    });

}

window.addEventListener('load', function () {
    init();
});