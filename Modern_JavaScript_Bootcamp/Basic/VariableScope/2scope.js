// Global ()
    // Local ()
        // Local
    // Local

// let name = 'Michal';

if (true) {
    // let name = "Mike"  // variable shadowing

    if (true) {
        let name = 'Jen';  // leaked global - when we assigned the value to the variable which does not declared before
        console.log(name);
        // let last = 'Jozef';
    }
}

if (true) {
    console.log(name);
}