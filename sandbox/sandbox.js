// as you can see, I have been playing in the sandbox too!
class Character {
    constructor(name, story) {
        this.name = name;
        this.story = story;
    }
}

// main function
(function() {
    let kaladin = new Character('Kaladin', 'Stormlight');
    let vin = new Character('Vin', 'Mistborn');
    let adora = new Character('Adora', 'She-Ra');
    let rand = new Character('Rand', 'Wheel of Time');
    let cat = new Character('Catruya', 'Fate of Mystria');

    console.log(kaladin.name);
    console.log(vin.name);
    console.log(adora.name);
    console.log(rand.name);
    console.log(cat.name);
})();