let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Here is our menu for vegans.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Check our menu, we have also some vegan dishes.");
} else {
    console.log("Here is our menu, you can choose whatever you wand.")
}