
var response = ["It is certain", 
                "It is decidedly so",
                "Without a doubt", 
                "Yes definitely", 
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
                ]

function shakeBall() {
    var userin = document.getElementById('question').value;
    if (userin == "" || !userin.includes("?")) {
        document.getElementById('answer').innerHTML = "Please as a question";
    } else {
        var randNum = Math.floor(Math.random() * (response.length))
        document.getElementById('answer').innerHTML = response[randNum];
    }
}
