// make a request to jokeApI to get a random jokes
fetch('https://icanhazdadjoke.com/slack')
//parse the json response to get the joke 
.then(data => data.json())
.then(jokeData => {
    const jokeText =  jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    // print the joke 
    jokeElement.innerHTML = jokeText;
})