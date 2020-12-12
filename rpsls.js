const rock = {
    name: 'Rock',
    picture: 'rock.png',
    getPicture() {
    return this.picture;
    }
};

const paper = {
    name: 'Paper',
    picture: 'paper.jpg',
    getPicture () {
    return this.picture;
    }
};

const scissors = {
    name: 'Scissors',
    picture: 'scissors.jpg',
    getPicture () {
        return this.picture;
    }
};

const lizard = {
    name: 'Lizard',
    picture: 'lizard.jpg',
    getPicture(){
        return this.picture;
    }
};

const spock = {
    name: 'Spock',
    picture: 'spock.jpg',
    getPicture () {
        return this.picture;
    }
};

//document.getElementById("#cpu_image").src = lizard.picture;
//document.getElementById("#user_image").src = lizard.picture;

//This is for the user throw.
const array = [rock.picture, paper.picture, scissors.picture, lizard.picture, spock.picture];

const random1 = array[Math.floor(Math.random() * array.length)];

const random2 = array[Math.floor(Math.random() * array.length)];
document.getElementById("cpu_throw").onclick = () =>{
    document.getElementById("cpu_image").src = random1;
    return;
};

document.getElementById("user_throw").onclick  = () => {
    document.getElementById("user_image").src = random2;
    return;
}

document.getElementById("winner_dec").onclick = () => {
    if (random1 === random2)
    {
        document.getElementById("winner_image").src = "tie.gif";
    }
    else if (random1 === rock.picture && (random2 === lizard.picture || random2 === scissors.picture))
    {
        document.getElementById("winner_image").src = "rock.png";
    }
    else if (random1 === paper.picture && (random2 === rock.picture || random2 === spock.picture))
    {
        document.getElementById("winner_image").src = "paper.jpg";
    }
    else if (random1 === scissors.picture && (random2 === lizard.picture || random2 === paper.picture))
    {
        document.getElementById("winner_image").src = "scissors.jpg";
    }
    else if (random1 === lizard.picture && (random2 === spock.picture || random2 === paper.picture))
    {
        document.getElementById("winner_image").src = "lizard.jpg";
    }
    else if (random1 === spock.picture && (random2 === rock.picture || random2 === scissors.picture))
    {
        document.getElementById("winner_image").src = "spock.jpg";
    } 
    else 
    {
        document.getElementById("winner_image").src = random2;
    }

}



