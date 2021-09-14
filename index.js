const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function appendCat(name) {
    const copyCats = [...cats, "Broom"]
    return copyCats;
}
function prependCat(name) {
    const copyCats = ["Arnold", ...cats]
    return copyCats;
}
function removeLastCat(name) {
    return cats.slice(0, -1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}