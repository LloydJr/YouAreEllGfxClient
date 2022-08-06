export default class MessageService {

    getAllMessages() {
    const request = new XMLHttpRequest();

    new Promise(function (resolve, reject) {
    //Setup our listener to process completed requests
    request.onLoad = function() {
    if (request.status >= 200 && request.status < 300) {
//        Console.log(JSON.parse(request.responseText)); //Returns Text
            const thread = JSON.parse(request.responseText); //Returns Text
            resolve(threads);
        }
    else {
//        Console.log('Error: ' + request.status); //Error occurred during the request
            reject ({
                status: request.status,
                statusText: request.statusText
            });
        }
    };
    request.open("GET", "http://zipcode.rocks:8085/messages");

    request.send();
        });//.then(successCallback, errorCallback);

//    function successCallback(response) {
//        Console.log("Promise is successful!") //Comes from the resolve methods
//    }
//
//    function errorCallback(response) {
//        Console.log("An error occurred...") //Comes from the reject methods
//    }
    }
}