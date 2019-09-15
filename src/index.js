// require('isomorphic-fetch'); // or another library of choice.
import { Dropbox } from 'dropbox';

function init(){

    document.getElementById('update').addEventListener('click', function () {
        const TOKEN = document.getElementById('token').value;
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