import MessageService from "./message-service.js";

let userId = "Lloyd Perez";
const messageService = new MessageService();

window.addEventListener("click", function() {
    document.getElementById("greeting").innerHTML = `Welcome ${userId}!`;
    messageService.getAllMessages().then(successCallback, errorCallback);
    function successCallback(response) {
    //Then data comes from the resolve method
    Console.log(response);
    }

    function errorCallback(response) {
    //This data comes from the reject method
    Console.log(response);
    }

});

    function populateMessages(messages){
    }
