/* =========================================================
   MUSEUM OF UNLIVED LIVES
   Application Logic
   ========================================================= */


/* ---------- DOM REFERENCES ---------- */

const introScreen =
    document.getElementById("introScreen");

const creationScreen =
    document.getElementById("creationScreen");

const museumScreen =
    document.getElementById("museumScreen");

const enterMuseum =
    document.getElementById("enterMuseum");

const beginLife =
    document.getElementById("beginLife");

const restartLife =
    document.getElementById("restartLife");

const visitorName =
    document.getElementById("visitorName");

const origin =
    document.getElementById("origin");

const timeline =
    document.getElementById("timeline");

const previousAge =
    document.getElementById("previousAge");

const nextAge =
    document.getElementById("nextAge");


/* ---------- ROOM ELEMENTS ---------- */

const currentAge =
    document.getElementById("currentAge");

const roomNumber =
    document.getElementById("roomNumber");

const roomTitle =
    document.getElementById("roomTitle");

const roomSubtitle =
    document.getElementById("roomSubtitle");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryText =
    document.getElementById("memoryText");

const careerTitle =
    document.getElementById("careerTitle");

const careerText =
    document.getElementById("careerText");

const relationshipTitle =
    document.getElementById("relationshipTitle");

const relationshipText =
    document.getElementById("relationshipText");

const possessionTitle =
    document.getElementById("possessionTitle");

const possessionText =
    document.getElementById("possessionText");

const decisionTitle =
    document.getElementById("decisionTitle");

const decisionText =
    document.getElementById("decisionText");

const curatorText =
    document.getElementById("curatorText");

const visitorDisplay =
    document.getElementById("visitorDisplay");

const timelineProgress =
    document.getElementById("timelineProgress");


/* ---------- STATE ---------- */

let selectedLife = "scholar";

let currentIndex = 0;

let generatedLife = [];


/* =========================================================
   LIFE ARCHETYPES
   ========================================================= */

const lifeTypes = {

    scholar: {
        careerPrefix: [
            "Apprentice Archivist",
            "Museum Historian",
            "Forbidden Manuscript Researcher",
            "Curator of Forgotten Civilizations",
            "Keeper of the Midnight Archive"
        ],

        possessionPrefix: [
            "Brass telescope",
            "Leather-bound notebook",
            "Ink that never dries",
            "Mechanical pocket watch",
            "Cabinet of impossible maps"
        ]
    },


    wanderer: {
        careerPrefix: [
            "Courier of Lost Letters",
            "Cartographer",
            "Expedition Guide",
            "Explorer of Forgotten Places",
            "Keeper of the World's Hidden Roads"
        ],

        possessionPrefix: [
            "Compass with a broken needle",
            "Weathered travel journal",
            "Silver lantern",
            "Map covered in annotations",
            "Key from an unknown city"
        ]
    },


    creator: {
        careerPrefix: [
            "Apprentice Maker",
            "Illustrator",
            "Inventor",
            "Architect of Impossible Machines",
            "Master of Living Art"
        ],

        possessionPrefix: [
            "Mechanical music box",
            "Pencil carved from dark wood",
            "Clockwork bird",
            "Sketchbook filled with impossible buildings",
            "Gallery containing one unfinished masterpiece"
        ]
    },


    healer: {
        careerPrefix: [
            "Apothecary Apprentice",
            "Herbalist",
            "Restoration Specialist",
            "Healer of Forgotten Places",
            "Keeper of the Healing Wing"
        ],

        possessionPrefix: [
            "Silver medical case",
            "Glass vial of moonwater",
            "Herbal journal",
            "Ancient healing pendant",
            "Chest containing remedies from five continents"
        ]
    }

};


/* =========================================================
   TIMELINE DATA
   ========================================================= */

const timelineAges = [
    7,
    14,
    21,
    32,
    45,
    61,
    83
];


/* =========================================================
   LIFE GENERATOR
   ========================================================= */

function generateLife() {

    const archetype =
        lifeTypes[selectedLife];

    const name =
        visitorName.value.trim() || "The Visitor";

    const place =
        origin.options[
            origin.selectedIndex
        ].text;


    generatedLife = [

        {
            age: 7,

            title: "The First Spark",

            subtitle:
                "Childhood remembers what adulthood forgets.",

            memoryTitle:
                "The forbidden room",

            memoryText:
                `At ${name}'s childhood home in ${place.toLowerCase()}, there was a room everyone insisted was empty. You knew better. One rainy afternoon, you found the key.`,

            careerTitle:
                archetype.careerPrefix[0],

            careerText:
                "Your curiosity was stronger than your fear. Adults began noticing that you asked questions nobody else thought to ask.",

            relationshipTitle:
                "The Friend Who Stayed",

            relationshipText:
                "Someone from your childhood learned that silence did not make you distant. Sometimes it meant you were listening.",

            possessionTitle:
                archetype.possessionPrefix[0],

            possessionText:
                "You carried it everywhere, convinced it was capable of pointing toward something important.",

            decisionTitle:
                "You chose curiosity.",

            decisionText:
                "You opened the locked door rather than walking away.",

            curator:
                "The first room in every unlived life contains the same object: a question nobody answered."
        },


        {
            age: 14,

            title: "The Corridor of Possibilities",

            subtitle:
                "The age when every door appears to lead somewhere.",

            memoryTitle:
                "The midnight corridor",

            memoryText:
                "You discovered a corridor behind the school library. Its walls were covered with portraits of people who had never existed.",

            careerTitle:
                archetype.careerPrefix[1],

            careerText:
                "Teachers began recognizing an unusual ability in you. You were not simply learning facts; you were connecting them.",

            relationshipTitle:
                "An Impossible Correspondence",

            relationshipText:
                "You exchanged letters with someone you had never met. The letters always arrived one day before you sent them.",

            possessionTitle:
                archetype.possessionPrefix[1],

            possessionText:
                "Its pages slowly began filling themselves with observations you had not yet written.",

            decisionTitle:
                "You followed the corridor.",

            decisionText:
                "Instead of returning home after sunset, you chose the unknown.",

            curator:
                "At fourteen, possibility is not a concept. It is architecture."
        },


        {
            age: 21,

            title: "The Hall of First Decisions",

            subtitle:
                "The room where potential begins becoming identity.",

            memoryTitle:
                "The train leaving at dawn",

            memoryText:
                "You stood at a railway platform before sunrise with one suitcase and no return ticket.",

            careerTitle:
                archetype.careerPrefix[2],

            careerText:
                "Your unusual apprenticeship placed you among people who collected knowledge, artifacts and stories that the ordinary world had forgotten.",

            relationshipTitle:
                "The Person at Platform Nine",

            relationshipText:
                "A stranger asked where you were going. You answered honestly: 'I don't know yet.' They decided to come with you.",

            possessionTitle:
                archetype.possessionPrefix[2],

            possessionText:
                "It became the first object you owned that felt entirely yours.",

            decisionTitle:
                "You left.",

            decisionText:
                "The life you knew remained behind on the platform.",

            curator:
                "Every alternate life contains a train that the original life never boarded."
        },


        {
            age: 32,

            title: "The Gallery of Becoming",

            subtitle:
                "A room filled with the things you became good at.",

            memoryTitle:
                "The night the museum opened",

            memoryText:
                "After years of collecting forgotten stories, you opened a private gallery hidden beneath an old observatory.",

            careerTitle:
                archetype.careerPrefix[3],

            careerText:
                "Your work became respected by people who understood the difference between preserving an object and preserving the story inside it.",

            relationshipTitle:
                "The Long Conversation",

            relationshipText:
                "Someone began visiting the museum every Thursday. Eventually neither of you remembered when the visits became a life together.",

            possessionTitle:
                archetype.possessionPrefix[3],

            possessionText:
                "The object became famous among visitors, although you always considered it unfinished.",

            decisionTitle:
                "You chose the museum.",

            decisionText:
                "A prestigious career elsewhere offered more money. You chose the strange little museum instead.",

            curator:
                "At thirty-two, your alternate life stops being an experiment. It becomes a place."
        },


        {
            age: 45,

            title: "The Chamber of Consequences",

            subtitle:
                "Every beautiful decision eventually has a shadow.",

            memoryTitle:
                "The empty chair",

            memoryText:
                "One morning, you realized that preserving the past had caused you to neglect someone standing directly beside you.",

            careerTitle:
                archetype.careerPrefix[4],

            careerText:
                "Your reputation had grown. Scholars travelled across countries simply to ask you one question.",

            relationshipTitle:
                "The One Who Left",

            relationshipText:
                "The person closest to you finally asked whether there was room in your life for anything that could not be archived.",

            possessionTitle:
                archetype.possessionPrefix[4],

            possessionText:
                "You possessed something extraordinary, but suddenly understood that objects could not replace people.",

            decisionTitle:
                "You closed the museum.",

            decisionText:
                "For the first time, you chose a person over your life's work.",

            curator:
                "The museum has no interest in pretending that alternate lives are perfect."
        },


        {
            age: 61,

            title: "The Room of Echoes",

            subtitle:
                "Memory becomes more vivid when the future becomes smaller.",

            memoryTitle:
                "The restored photograph",

            memoryText:
                "You found a photograph from childhood hidden between the pages of an old catalog.",

            careerTitle:
                "Mentor",

            careerText:
                "You began teaching younger curators how to recognize the invisible stories attached to ordinary objects.",

            relationshipTitle:
                "The Familiar Stranger",

            relationshipText:
                "Someone returned after decades carrying a letter you thought had been destroyed.",

            possessionTitle:
                "The Museum Key",

            possessionText:
                "You gave the original key to someone younger, telling them that a museum should outlive its curator.",

            decisionTitle:
                "You passed it on.",

            decisionText:
                "You finally accepted that your story did not need to remain yours alone.",

            curator:
                "A life becomes meaningful not because it continues forever, but because something survives inside another person."
        },


        {
            age: 83,

            title: "The Final Room",

            subtitle:
                "The last room contains no doors. Only what remains.",

            memoryTitle:
                "Rain on the roof",

            memoryText:
                "On your final evening, rain tapped against the glass exactly as it had when you first found the hidden room as a child.",

            careerTitle:
                "Founder Emeritus",

            careerText:
                "The museum had become a living institution. Generations of visitors now walked through rooms that began inside your imagination.",

            relationshipTitle:
                "The People Who Remembered",

            relationshipText:
                "Your greatest possession was no longer an object. It was the number of people who carried fragments of your story forward.",

            possessionTitle:
                "The Original Key",

            possessionText:
                "It rested beneath a glass case beside the first catalog you ever wrote.",

            decisionTitle:
                "You left the final door unlocked.",

            decisionText:
                "Because every visitor deserved the chance to imagine what might have happened next.",

            curator:
                "This life never happened. Yet somewhere within you, its rooms existed long enough to be remembered."
        }

    ];
}


/* =========================================================
   SCREEN TRANSITIONS
   ========================================================= */

function switchScreen(current, next) {

    current.classList.add("fade-out");

    setTimeout(() => {

        current.classList.add("hidden");

        current.classList.remove("active");
        current.classList.remove("fade-out");

        next.classList.remove("hidden");

        requestAnimationFrame(() => {
            next.classList.add("active");
        });

    }, 450);
}


/* =========================================================
   CHOICE CARDS
   ========================================================= */

const choiceCards =
    document.querySelectorAll(".choice-card");

choiceCards.forEach(card => {

    card.addEventListener("click", () => {

        choiceCards.forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        selectedLife =
            card.dataset.life;
    });

});


/* =========================================================
   CREATE TIMELINE
   ========================================================= */

function createTimeline() {

    timeline.innerHTML = "";

    generatedLife.forEach((room, index) => {

        const item =
            document.createElement("div");

        item.className =
            "timeline-item";


        if (index === currentIndex) {
            item.classList.add("active");
        }


        if (index < currentIndex) {
            item.classList.add("visited");
        }


        item.innerHTML = `
            <div class="timeline-orb">
                ${index + 1}
            </div>

            <span class="timeline-age">
                ${room.age}
            </span>
        `;


        item.addEventListener("click", () => {

            currentIndex = index;

            renderRoom();

        });


        timeline.appendChild(item);
    });

}


/* =========================================================
   RENDER ROOM
   ========================================================= */

function renderRoom() {

    const room =
        generatedLife[currentIndex];


    currentAge.textContent =
        room.age;


    roomNumber.textContent =
        `ROOM ${romanNumeral(currentIndex + 1)}`;


    roomTitle.textContent =
        room.title;


    roomSubtitle.textContent =
        room.subtitle;


    memoryTitle.textContent =
        room.memoryTitle;


    memoryText.textContent =
        room.memoryText;


    careerTitle.textContent =
        room.careerTitle;


    careerText.textContent =
        room.careerText;


    relationshipTitle.textContent =
        room.relationshipTitle;


    relationshipText.textContent =
        room.relationshipText;


    possessionTitle.textContent =
        room.possessionTitle;


    possessionText.textContent =
        room.possessionText;


    decisionTitle.textContent =
        room.decisionTitle;


    decisionText.textContent =
        room.decisionText;


    curatorText.textContent =
        room.curator;


    timelineProgress.textContent =
        `${currentIndex + 1} / ${generatedLife.length}`;


    updateTheme(currentIndex);


    createTimeline();


    animateRoom();

}


/* =========================================================
   ROOM ANIMATION
   ========================================================= */

function animateRoom() {

    const roomElements =
        document.querySelectorAll(
            ".room-door, .museum-card, .curator-note"
        );


    roomElements.forEach(element => {

        element.classList.remove(
            "room-transition"
        );

        void element.offsetWidth;

        element.classList.add(
            "room-transition"
        );

    });

}


/* =========================================================
   THEME CHANGES THROUGH TIME
   ========================================================= */

function updateTheme(index) {

    const root =
        document.documentElement;


    const themes = [

        {
            background:
                "radial-gradient(circle at 50% 15%, #2a314b 0%, #0d111c 45%, #05070c 100%)",

            gold:
                "#c8a96b"
        },

        {
            background:
                "radial-gradient(circle at 20% 20%, #332e4a 0%, #0c101c 45%, #05070c 100%)",

            gold:
                "#d4b97a"
        },

        {
            background:
                "radial-gradient(circle at 70% 15%, #243d4a 0%, #0a1118 45%, #04070b 100%)",

            gold:
                "#c7b17b"
        },

        {
            background:
                "radial-gradient(circle at 50% 40%, #493b29 0%, #18150f 45%, #070706 100%)",

            gold:
                "#e0bf76"
        },

        {
            background:
                "radial-gradient(circle at 35% 20%, #442d2e 0%, #180e11 45%, #070608 100%)",

            gold:
                "#dca66f"
        },

        {
            background:
                "radial-gradient(circle at 80% 30%, #293746 0%, #0d1218 45%, #05070a 100%)",

            gold:
                "#b7c09b"
        },

        {
            background:
                "radial-gradient(circle at 50% 50%, #302b27 0%, #0c0b0b 45%, #030303 100%)",

            gold:
                "#e3c88a"
        }

    ];


    document.body.style.background =
        themes[index].background;

    root.style.setProperty(
        "--gold",
        themes[index].gold
    );
}


/* =========================================================
   ROMAN NUMERALS
   ========================================================= */

function romanNumeral(number) {

    const values = [
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let result = "";

    values.forEach(([value, symbol]) => {

        while (number >= value) {

            result += symbol;

            number -= value;
        }

    });

    return result;
}


/* =========================================================
   NAVIGATION
   ========================================================= */

previousAge.addEventListener(
    "click",
    () => {

        if (currentIndex > 0) {

            currentIndex--;

            renderRoom();
        }

    }
);


nextAge.addEventListener(
    "click",
    () => {

        if (
            currentIndex <
            generatedLife.length - 1
        ) {

            currentIndex++;

            renderRoom();
        }

    }
);


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            museumScreen.classList.contains("hidden")
        ) {
            return;
        }


        if (event.key === "ArrowRight") {

            if (
                currentIndex <
                generatedLife.length - 1
            ) {

                currentIndex++;

                renderRoom();
            }

        }


        if (event.key === "ArrowLeft") {

            if (currentIndex > 0) {

                currentIndex--;

                renderRoom();
            }

        }

    }
);


/* =========================================================
   ENTER MUSEUM
   ========================================================= */

enterMuseum.addEventListener(
    "click",
    () => {

        switchScreen(
            introScreen,
            creationScreen
        );

    }
);


/* =========================================================
   GENERATE LIFE
   ========================================================= */

beginLife.addEventListener(
    "click",
    () => {

        generateLife();

        currentIndex = 0;

        const name =
            visitorName.value.trim() ||
            "Anonymous Traveler";


        visitorDisplay.textContent =
            `Visitor: ${name}`;


        createTimeline();

        renderRoom();


        switchScreen(
            creationScreen,
            museumScreen
        );

    }
);


/* =========================================================
   RESTART
   ========================================================= */

restartLife.addEventListener(
    "click",
    () => {

        currentIndex = 0;

        switchScreen(
            museumScreen,
            creationScreen
        );

    }
);


/* =========================================================
   MAGICAL PARTICLES
   ========================================================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    const totalParticles = 55;


    for (
        let i = 0;
        i < totalParticles;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${8 + Math.random() * 14}s`;


        particle.style.animationDelay =
            `${Math.random() * 10}s`;


        particle.style.opacity =
            `${0.2 + Math.random() * 0.6}`;


        const size =
            1 + Math.random() * 3;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initialize() {

    createParticles();

    updateTheme(0);

}


initialize();