function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function shuffleArray(_array) {
    return _array.sort(() => Math.random() - 0.5);
}

export { getRandomInt, shuffleArray }