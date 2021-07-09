const age = 24;

if (age > 90) {
    console.log("You're too old to come in")
} else if (age > 18) {
    console.log("Welcome! You're older than 18 years, so you are allowed to come in")
} else if (age < 18) {
    console.log("Unfortunately peanutbutter, you're too young! Come see us again on your 18th birthday!")
}


const isFemale = true;

if (isFemale) {
    console.log("Welcome to the ladies night! ")
} else {
    console.log("Sorry this date is a ladies night, we hope to see you another time!")
}


const driverStatus = 'bob';
if (driverStatus) {
    console.log("You're allowed to drive")
} else {
    console.log("You're NOT allowed to drive")
}


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Je moet de volle mep betalen.")
}

const firstName = 'Sarah';

if (firstName == 'Sarah' || 'Bram') {
    console.log("Jij hebt zo'n mooie naam, jij krijgt een gratis biertje!")
} else {
    console.log("Geen gratis bier hier!")
}


const totalAmount = 50;

if (totalAmount >= 100) {
    console.log("GRATIS CHAMPAGNE!")
} else if (totalAmount >= 50) {
    console.log("GRATIS PORTIE NACHO'S!")
} else if (totalAmount >= 25) {
    console.log("GRATIS PORTIE (VEGA)BITTERBALLEN!")
} else if (totalAmount < 25) {
    console.log("Geen gratis drank en versnaperigen.")
}

