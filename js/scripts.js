function getRandomFact(animeFact) {
    return(animeFact);}

function error(noFact) {
    return(noFact);
}

$.ajax({
    url:https:"//anime-facts-rest-api.herokuapp.com/api/v1/:anime_name",
    success: getRandomFact(animeFact) {
        console.log(animeFact);
    },
    error: error(noFact) {
        console.log(noFact)
    }
}


