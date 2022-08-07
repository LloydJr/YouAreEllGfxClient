import MessageService from "./message-service.js";

let userId = "Lloyd Perez";
const messageService = new MessageService(userId);

window.addEventListener("load", function() {
    document.getElementById("greeting").innerHTML = `Welcome ${userId}!`;
    messageService.getAllMessages()
        .then(successCallback, errorCallback);

    function successCallback(response) {
    //Then data comes from the resolve method
    //Console.log(response);
        populateThread(response);
    }

    function errorCallback(response) {
        //This data comes from the reject method
        console.log(response);
    }

});

//    function populateMessages(messages){
//     }

    function populateThread(messages){
    messages.forEach(message => {
//    const messageListItem = document.createElement("LI");
//    const userIdHeading = document.createElement("h3");
//    const messageParagraph = document.createElement("p");
//    const messageContent = document.createTextNode(message.message);
//    const userIdContent = document.createTextNode(message.fromId);
//    userIdHeading.appendChild(userIdContent);
//    messageParagraph.appendChild(messageContent);
//    messageListItem.appendChild(messageContent).appendChild(messageParagraph);
//    document.getElementById("message-list").appendChild(messageListItem);
        addMessageToThread(message);
    })
    }

    function createFormListener() {
        const form = document.getElementById("new-message-form");

        form.onSubmit = function (event) {
            //stop the regular form submission
            event.preventDefault();

        const data = {
            fromid: userId,
            message: form.message.value
        };

        messageService.createNewMessage(data)
            .then(successCallback, errorCallback);

        function successCallback(response) {
            //This data comes from the resolve method
            //Console.log(response);
            addMessageToThread(response);
        }

        function errorCallback(response) {
            //This data comes from the reject method
            console.log(response);
        }
    }
};
    function addMessageToThread(message) {
        const messageListItem = document.createElement("LI");
        const userIdHeading = document.createElement("h3");
        const messageParagraph = document.createElement("p");
        const messageContent = document.createTextNode(message.message);
        const userIdContent = document.createTextNode(message.fromid);
        userIdContent.appendChild(userIdContent);
        messageParagraph.appendChild(messageContent);
        messageListItem
            .appendChild(userIdHeading)
            .appendChild(messageParagraph);
        document.getElementById("message-list")
            .appendChild(messageListItem);
    }

createFormListener();
