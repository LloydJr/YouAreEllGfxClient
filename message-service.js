export default class MessageService {

    getAllMessages() {
    const request = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
    //Setup our listener to process completed requests
    request.onload = function() {
    if (request.status >= 200 && request.status < 300) {
//        Console.log(JSON.parse(request.responseText)); //Returns Text
            const threads = JSON.parse(request.responseText); //Returns Text
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
        })//.then(successCallback, errorCallback);
    }
    createNewMessage(message) {
    const request = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
    //Setup our listener to process completed requests
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            //If successful
            resolve(JSON.parse(request.responseText));
        }
        else {
        reject({
            status: request.status,
            statusText: request.statusText
        });
        }
    };

    request.open("POST", "http://zipcode.rocks:8085/ids/LloydJr/messages");

    request.send(JSON.stringify(message));
    })
    }
}
