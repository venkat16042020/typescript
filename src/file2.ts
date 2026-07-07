type Fish = {
    swim: () => void;}
type Bird = {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    } 
    return animal;
}

