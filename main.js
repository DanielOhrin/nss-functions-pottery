const buyClay = () => {
    const obj = {

    }

    return obj;
}

const makePottery = (obj) => {
    obj.shape = "Bowl";

    return obj;
}

const bisqueFire = (obj) => {
   obj.readyForGlazing = true;

    return obj;
}

const glazePottery = (obj) => {
    let errorString = "Make sure you bisque fire the pottery before you glaze it."
    if (obj.readyForGlazing === true) {
        obj.glazing = "Midnight Blue";
        return obj;
    } else {
        return errorString;
    }
}

const finalFiring = (obj, temp) => {
    temp > 1200 ? obj.cracked = true : obj.cracked = false;

    return obj;
}

const firedPottery1400 = finalFiring(glazePottery(bisqueFire(makePottery(buyClay()))), 1000);
console.log(firedPottery1400);