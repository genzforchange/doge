var subjectLinesSyn = [
  "Concern over government waste",
  "Worried about rising government spending?",
  "Is taxpayer money being wasted?",
  "Spotlight on government inefficiency",
  "Are your taxes being spent wisely?",
  "The truth about government waste",
  "Reducing unnecessary government costs",
  "Addressing taxpayer concerns over waste",
  "Wasteful government practices",
  "Government spending under scrutiny",
  "Holding the government accountable for waste",
  "Protecting my tax dollars from misuse",
  "A closer look at wasteful expenditures",
  "Fighting government inefficiency together",
  "Your tax dollars deserve better",
  "Calling out unnecessary spending",
  "Taking action against government waste",
  "Demanding transparency in spending",
  "Ending wasteful practices in government",
];

var emailGreetingsSyn = [
  "TO DOGE Department",
  "Dear DOGE Department",
  "To Whom It May Concern at DOGE",
  "Dear DOGE Department Representative",
  "Attn: DOGE Department",
  "To the Team at DOGE Department",
  "Dear DOGE Administration",
  "To the Esteemed Members of DOGE Department",
  "Greetings to the DOGE Department",
  "Dear Respected DOGE Officials",
  "To the Leaders of the DOGE Department",
  "Dear DOGE Team",
  "To the Honorable DOGE Department",
  "Dear Members of the DOGE Department",
  "To the Valued DOGE Department",
  "Respected DOGE Representatives",
  "To the Officers of DOGE",
  "Dear Esteemed Members of DOGE",
  "To the Heads of DOGE Department",
  "Greetings DOGE Administration",
  "Dear DOGE Leadership",
];

var expressSyn = [
  "express",
  "convey",
  "communicate",
  "articulate",
  "voice",
  "state",
  "declare",
  "utter",
  "manifest",
  "reveal",
  "indicate",
  "show",
  "exhibit",
  "demonstrate",
  "represent",
  "assert",
  "proclaim",
  "disclose",
  "announce",
  "explain",
  "emphasize",
];

var frustrationSyn = [
  "frustration",
  "irritation",
  "annoyance",
  "exasperation",
  "discontent",
  "dissatisfaction",
  "agitation",
  "anger",
  "vexation",
  "resentment",
  "displeasure",
  "discouragement",
  "disappointment",
  "bitterness",
  "disillusionment",
  "grievance",
  "stress",
  "impatience",
  "distress",
];

var overspending = [
  "wasting",
  "overspending",
  "misspending",
  "misusing",
  "squandering",
  "delaying",
  "overcomplicating",
  "overthinking",
  "overproducing",
  "underperforming",
  "mismanaging",
  "stalling",
  "procrastinating",
  "overloading",
  "neglecting",
];

var citedSyn = [
  "cited",
  "mentioned",
  "quoted",
  "referred to",
  "noted",
  "acknowledged",
  "highlighted",
  "stated",
  "pointed out",
  "named",
  "attributed",
  "indicated",
  "reported",
  "alluded to",
  "brought up",
  "identified",
  "called out",
  "illustrated",
  "invoked",
  "specified",
  "documented",
];

var wastedSyn = [
  "wasted",
  "squandered",
  "misused",
  "spent frivolously",
  "drained",
  "lost",
  "thrown away",
  "frittered away",
  "dissipated",
  "neglected",
  "overused",
  "misapplied",
  "exhausted",
  "depleted",
  "burned through",
  "unutilized",
  "overspent",
  "underutilized",
  "excessively spent",
  "unnecessarily used",
  "expended carelessly",
];

var corporationsSyn = [
  "Big Oil", // fossil fuel
  "Weapons manufacturers", // dod pentagon
  "billionaires", // coroprate handouts
  "corporations", // prision
];

// I believe we must reduce government waste by eliminating departments with two heads (e.g. DOGE).
//That seems inefficient and a misuse of my hard earned tax dollars.

var reduceSyn = [
  "decrease",
  "diminish",
  "lessen",
  "cut",
  "minimize",
  "shrink",
  "lower",
  "curtail",
  "trim",
  "slim down",
  "scale back",
  "decline",
  "abate",
  "narrow",
  "downgrade",
  "moderate",
  "slacken",
  "lighten",
  "retract",
  "simplify",
];

var wasteSyn = [
  "misuse",
  "squander",
  "excess",
  "loss",
  "dissipation",
  "inefficiency",
  "depletion",
  "overspending",
  "extravagance",
  "neglect",
  "mismanagement",
  "overindulgence",
  "throwaway",
  "discard",
  "overuse",
  "expenditure",
  "recklessness",
  "carelessness",
  "misapplication",
  "wastage",
];

var eliminatingSyn = [
  "removing",
  "eradicating",
  "abolishing",
  "getting rid of",
  "terminating",
  "wiping out",
  "disposing of",
  "cutting out",
  "extinguishing",
  "banishing",
  "excluding",
  "canceling",
  "nullifying",
  "destroying",
  "dismissing",
  "annihilating",
  "purging",
  "obliterating",
  "extracting",
  "reducing to zero",
];

var inefficientSyn = [
  "ineffective",
  "unproductive",
  "wasteful",
  "disorganized",
  "impractical",
  "unskillful",
  "incompetent",
  "clumsy",
  "counterproductive",
  "mismanaged",
  "haphazard",
  "unsystematic",
  "bungling",
  "inept",
  "slow",
  "faulty",
  "lacking efficiency",
  "poorly organized",
  "unprofitable",
  "deficient",
];

var emailClosingSyn = [
  "Best",
  "Thank you",
  "Regards",
  "Kind regards",
  "Warm regards",
  "Sincerely",
  "Yours sincerely",
  "Yours truly",
  "Best regards",
  "Warm wishes",
  "All the best",
  "Thanks again",
  "With appreciation",
  "Gratefully",
  "Respectfully",
  "Yours respectfully",
  "Cheers",
  "Take care",
  "Looking forward to your response",
  "Thanks in advance",
];

// song lyrics section

//This particular department has been destroying resources and cited to be ...
var wap_lyrics = [
  "some whores in this house",
  "certified freaks, seven days a week",
  "wet ass pussy, make that pullout game weak",
  "fucking with some wet ass pussy",
  "bringing a bucket and a mop for this wet ass pussy",
  "giving me everything you got for this wet ass pussy",
  "putting this pussy right in yo' face, swipe your nose like a credit card",
  "hopping on top, I want a ride, I do a kegel while it's inside",
  "spitting in my mouth, look at my eyes",
  "tying me up like I'm surprised",
  "role-play, I wear a disguise",
  "parking that big Mack truck right in this little garage",
  "Making it cream, make me scream",
  "not cooking, nor cleaning, But let me tell you, I got this ring",
  "Gobbling me, swallow me, drip down the side of me",
  "Quick, jump out 'fore you let it get inside of me",
  "telling him where to put it, never tell him where I'm 'bout to be",
  "Talking yo' shit, bite your lip",
  "Asking for a car while you ride that dick",
  "ain't never gotta fuck him for a thing",
  "already made his mind up 'fore he came",
  "Now geting your boots and your coat for this wet ass pussy",
  "buying a phone just for pictures of this wet ass pussy",
  "Paying my tuition just to kiss me on this wet ass pussy",
  "Now making it rain if you wanna see some wet ass pussy",
  "needing a hard hitter, I need a deep stroke",
  "needing a Henny drink, I need a weed smoker",
  "Not a garden snake, I need a king cobra",
  "With a hook in it, hope it lean over",
  "got some money, then that's where I'm headed",
  "Pussy A-1, just like his credit",
  "have got a beard, well, I'm tryna wet it",
  "let him taste it, and now he diabetic",
  "don't wanna spit, I wanna gulp",
  "wanna gag, I wanna choke",
  "want you to touch that lil' dangly thing that swing in the back of my throat",
  "going in dry, and it's coming out soggy",
  "riding on that thing like the cops is behind me",
  "spitting on his mic' and now he tryna sign me, woo",
  "Switching my wig, make him feel like he cheating",
  "Putting him on his knees, give him some' to believe in",
  "Never losing a fight, but I'm looking for a beating",
  "In the food chain, I'm the one that eat ya",
  "ate my ass, he's a bottom feeder",
  'fucking me and ask, "Whose is it?"',
  "riding the dick, I'ma spell my name, ah",
  "fucking with some wet ass pussy",
  "making it drop, that's some wet ass pussy",
  "getting a bucket and a mop, that's some wet ass pussy",
  "talking WAP, WAP, WAP, that's some wet ass pussy",
  "Macaroni in a pot, that's some wet ass pussy, huh",
];

var apple_lyrics = [
  // "I guess the apple don't fall far from the tree",
  // "Cause I've been looking at you so long",
  // "Now I only see me",
  // "I wanna throw the apple into the sky",
  // "Feels like you never understand me",
  // "So I just wanna drive",
  // "The airport, the airport",
  // "I guess the apple could turn yellow or green",
  // "I know there's lots of different nuances",
  // "I wanna grow the apple, keep all the seeds",
  // "But I can't help but get so angry",
  // "You don't listen, I leave",
  // "To the airport, the airport",
  // "The airport, the airport",
  "thinking the apple's rotten right to the core",
  // "From all the things passed down",
  // "From all the apples coming before",
  "splitting the apple down symmetrical lines",
  // "And what I find is kinda scary",
  // "Makes me just wanna drive",
  "wanting know where you go When you're feeling alone",
  "When you're feeling alone, do you?",
  // "I wanna know where you go",
  // "When you're feeling alone",
  // "When you're feeling alone, do you?",
];

var espresso_lyrics = [
  " thinkin' 'bout me every night, oh",
  "that sweet? I guess so",
  "Saying you can't sleep, baby, I know",
  "that me, espresso",
  "Moving it up, down, left, right, oh",
  "Switching it up like Nintendo",
  "Saying you can't sleep, baby, I know",
  // "I can't relate to desperation",
  // 'My "give a fucks" are on vacation',
  "got this one boy and he won't stop calling",
  // "When they act this way, I know I got 'em",
  "Too bad your ex don't do it for ya",
  "Walking in and dream-came-trued it for ya",
  "knowing I Mountain Dew it for ya",
  // "That morning coffee, brewed it for ya",
  "One touch and I brand-newed it for ya",
  // "Is it that sweet? I guess so",
  "working late 'cause I'm a singer",
  "looking so cute wrapped 'round my finger",
  // "My twisted humor make him laugh so often",
  "My honeybee, come and get this pollen",
  // "Too bad your ex don't do it for ya",
];

var roman = [
  "Taking your medication, Roman",
  "Taking a short vacation, Roman",
  "needing to know your station, Roman",
  "Some alterations on your clothes and your brain",
  "Taking a little break, little break from your silencing",
  "knowing how bad you need a Roman holiday",
  "done, you tight? You suck at life?",
  "not wanting a round three? You done suffered twice",
  "Wo-wo-worshiping the queen and you might could pass",
  "Keeping it real, these bitches couldn't wipe my ass",
  // "Anyway, stylist, go get Bvlgari",
  "the ultimate Svengali",
  "You, you bitches can't even spell that",
  "You, you hoes buggin', repel that",
  "Letting me tell you this, sister, I am, I am colder than a blister",
  "cured with no Elixir",
  "knowing who the fuck, what the fuck I do",
  "puting the pressure to every thug I knew",
  "Quacking, quack to a duck and a chicken too",
  "Puting the hyena in a freakin' zoo, phew!",
  "Witch, twitch, bitch",
  "Motherfucking right, this is World War 6",
  // "This right here might make a bitch die",
  // "And this right here is gonna make a bitch cry",
  "being honest, I am such a great guy",
  "what I do when a bitch breaks flock",
  "putting her in a dungeon under, under",
  // "No, them bitches ain't eating, they dying of hunger",
  "a Motherfucker, I'm me, who the fuck is this hoe?",
  // "And yes, maybe just a touch of tourettes",
  "Getting my wigs, Terrence, go and get my beret, yo!",
  "Coming all ye faithful, Joyful and triumphant, I am Roman Zolanski",
  "Talking 'bout me, you talking about me?",
  "daring a motherfucker to be talking about me",
  "Them bitches must be smokin' a couple of OZ's",
  "A-buh-buh-buh, now give them a goatee, oh!",
];

var mg = [
  "Getting it from my mammy, Balmain, bustdown",
  // "Tre Trax I think we got one",
  // "It's Trax season, bruh",
  // "Who that? Trell?",
  "wanting Chanel 9 boots",
  // "All these steady jockin'",
  // "'Cause they know I'm the truth",
  "a Material gworl And I get it from my mammy",
  "Balmain, bustdowns, these hoes can't stand me",
  "a Material gworl Currently working on a Grammy",
  "Meanwhile, pussy poppin' with ya man in Miami",
  "a Material girl Chanels and pearls",
  "the trick that it takes to keep the girls",
  "Choppin' bitches down like Edward Scissor Hands (Scissor Hands)",
  // "I don't want no petty money, run them bands (run them bands)",
  "Private Island living ,chillin' with Toucan Sam",
  "Fucking billionaire ballers, rap shit got me grand (ah)",
  "Motorsport do the dash, drop the top in the Lamb'",
  "Chanel Bags, that'll make me know it (yeah)",
  "needing a hot girl? Boy, you gon' have to show it",
  "wanting a taste, baby boy? you gon' have to throw it",
  "Depositing all accounts, baby, keep the cash flowin'",
  "Busting down wrist but, but the bustdown keep 'em going",
  "Hennessy on my lips, take a sip",
  "liking my laid, don't come here with no chips",
  // "How much is you payin'? (Payin')",
  // "I don't speak broke boy language (nah)",
  // "You can leave with the crew that you came with (came with)",
  // "Me and my bitches ain't playing (gon' on)",
  "Icing me out, like Elsa",
  "Flying me out, private jet, no Delta",
  // "You can send your bitch back to the shelter",
  // "You ain't got no money, bitch, I can't help ya",
  // "Look but don't touch (uh-uh)",
  "used to free bitches, I cost too much",
  "marrying to the money, baby, you can keep yo' tux",
  "askin' the same questions, \"Is you fuckin' or what?\" (No)",
  "liking a super size, money deluxe",
  // "Where my money? Now you stutter, wh-wh-wh-what?",
  // "Let me make it real clear, fuck, pay up",
  // "Broke leave a bad taste, eww, yuck",
  // "Ocean Drive is where I wanna be (facts)",
  "Neck on freeze thanks to my girl Tiffany (froze)",
  "Feet on fleek, steppin' through Balenci'",
  " crazy as fuck to put her against me (ha)",
  "Flying me to Cali, swipin' all yo' credit cards, this B.A.P.S, I'm Halle",
  "Gucci, Louis, Prada it don't matter",
  "making me cum, boy, stop with all the chatter",
  // "Rich eight figures, not enough",
  "Ten figures private show in the back of the Bentley truck",
  "Spending yo' money and you still can't cuff",
  "wanting materials and serials, boy, you outta luck",
  "a no stash type of bitch, you ain't keepin' your money tucked (gimme that)",
  "buying a Givenchy I'm still stingy no, sir, you can't fuck",
  "(saying you loved me) Tuh, boy, I told you what?",
  "a duck ass, stop cluckin' and pay up",
  "Materials and serials, bitch",
];

var low = [
  "having them apple bottom jeans (jeans)",
  "Boots with the fur (with the fur)",
  // "The whole club was lookin' at her",
  "hitting the floor (she hit the floor)",
  // "Next thing you know",
  "getting low, low, low, low, low, low, low, low",
  "Them baggy sweat pants and the Reeboks with the straps (with the straps)",
  "turning around and gave that big booty a slap (hey)",

  // "Hey, I ain't never seen nothin' that'll make me go",
  // "This crazy all night, spending my dough",
  "Have had the million dollar vibe and a body to go",
  "Them birthday cakes, they stole the show",
  "So sexual, She was flexible, professional",
  "Drinkin' X and O",
  "Holding up wait a minute, do I see what I think I-, whoa",
  "have did her thing, I seen shawty get low",
  // "Ain't the same when it's up that close",
  "Making it rain, I'm makin' it snow",
  "Working the pole, I got the bankroll",
  "saying that I prefer the no clothes",
  "throwing it back at me, I gave her more",
  "jeans filled with guap and they ready for shones",
  "Cadillacs, Maybachs for the sexy grown",
  "Patron on the rocks that'll make your moan",
  "One stack c'mon, two stacks c'mon, three stacks c'mon",
  "That Henny and Cola got me like a soldier",
  "ready for Rover, I couldn't control her",
  "So lucky, oh, me, I was just like a clover",
  "hot like a toaster, Sorry, but I had to fold her",
  "a tattoo above her crack, I had to handle that",
];

var bonfire = [
  "Childish Gambino, homegirl drop it like the NASDAQ",
  "white girls like there's coke up my asscrack",
  "black girls cause, man, fuck it, I'll do either",
  "loving pussy, I love bitches, dude, I should be runnin' PETA",
  "In Adidas, with some short shorts, B-O-O all over me",
  "supposed to be, your green is in my grocery",
  "This Asian dude, I stole his girl, and now he got that Kogi beef",
  "My dick like an accent mark, it's all about the over Es",
  "Hot like a parked car",
  "sounding weird like a hard R",
  "Flying like the logo on my cousin's four forty",
  "Eatin' Oreos like these white girls that blow me",
  "Vodka for my ladies, whiskey for a grown man",
  "Hangin' in the islands, lookin' for Earl like toe jam",
  "Butchering and I know it, man, kill beef, go ham",
  // "These rappers are afraid of him",
  "a beast, bitch, Gir, Invader Zim",
  "Gambino is a call girl, fuck you, pay me",
  "a Brand new whip for these people like slavery",
  // "They told me I was awful man, that shit did not phase me",
  // "Tell me how I suck again, my memory is hazy",
  // '"You\'re my favorite rapper, now" Yeah, dude, I better be',
  "fuckin' kissing my ass, Human Centipede",
  // "You wanna see my girl? I ain't that dumb",
  // "You wanna see my girl? Check Maxim",
  // '"Man, why does every black actor gotta rap some?"',
  // "I don't know, all I know is I'm the best one",
  "a bonfire, turn the lights out",
  "burnin' everything you muthafuckas talk about",
  "burnin' everything you muthafuckas talk about",
  "knowing these rapper dudes talk shit, start killin'",
  "Fucking that, got goons like an arch-villain",
  "from the South, ain't got no accent, don't know why",
  "child's play, I do my name like Princess Di",
  "saying they want the realness, rap about my real life",
  'Telling me I should just quit "first of all, you talk white!',
  // "Second off, you talk like you haven't given up yet\"",
  "Rap's stepfather, yeah, you hate me but you will respect",
  // "I put in work, ask Ludwig",
  "Putting my soul on the track like shoes did",
  "Playing this for my cousin, now he can't even think straight",
  "Black and white music? Now, that's a mixtape",
  "Shouting out to my blerds, they represent the realness",
  "Shouting out to Gambino, girls, my dick is in the building",
  "knowing you hate me cause your little cousin play me",
  'liking black girls who nerdy, but when they dance they be sayin\' "owww"',
  // "Sorry for who followed me",
  "Chillin' with a Filipino, at your local Jollibee",
  "in her ass like sodomy",
  "seeing my hand under the table, don't bother me",
  // "I don't talk soft, that's that other guy",
  // "I'm screamin' \"What the fuck is up?\" like I ain't seen the sky",
  // "And shit I'm doin' this year, Insanity",
  "Making the beat then murdered it, Casey Anthony",
  "These rappers don't know what to do",
  "acting me like a Loony Tune",
  "swearing this summer will be summer camp, bitch",
];
const diet_pepsi = [
  "a winner, he loves the game",
  "My lips reflect off his cross-gold chain",
  // "I like the way he's telling me",
  "looking good in these ripped blue jeans",
  " red like cherries in the spring",
  "a work of art you'd die to see",
  "Untouched, XO",
  "Young lust, let's- (ah)",
  "driving in your car, I'm your baby (so sweet)",
  "Losing all my innocence in the back seat",
  "Saying you love, say you love, say you love me (love me)",
  
  "Breaking all the rules 'til we get caught",
  "Fogging up the windows in the parking lot",
  "Summer love (ah, ah), sexy",
  "Sitting on his lap, sippin' Diet Pepsi",
  "writing my name with lipstick on your chest",
  "leaving a mark so you know I'm the best",
  "Untouched (untouched), XO (XO)",
  "Young lust, let's- ah (go)",
];

var heyya = [
  // "One, two, three!",
  "My baby don't mess around",
  // "Because she loves me so",
  // "This I know fo sho!",
  // "But does she really wanna",
  // "But can't stand to see me walk out the door",
  // "Don't try to fight the feeling",
  // "Because the thought alone is killin' me right now",
  // "Thank God for Mom and Dad",
  // "For sticking to together",
  // "Like we don't know how",
  "Hey ya! Hey ya!",
  // "You think you've got it",
  // "Oh, you think you've got it",
  // "But got it just don't get it when there's nothin' at all",
  // "We get together",
  // "Oh, we get together",
  "better when there's feelings involved",
  // "Know what they say -its",
  // "Nothing lasts forever!",
  // "Then what makes it, then what makes it",
  // "Then what makes love the exception?",
  "why, oh, why, oh why, oh, why, oh, why, oh",
  "still in denial when we know we're not happy here",
  "Hey ya! (y'all don't want to here me, ya just want to dance) Hey ya!",
  "not wanting to meet your daddy (oh ohh), just want you in my caddy (oh ohh)",
  "Hey ya! (oh, oh!) Hey ya! (oh, oh!)",
  "not wanting to meet your momma, just want to make you cum-a (oh, oh!)",
  // "I'm (oh, oh) I'm (oh, oh) I'm just being honest! (oh, oh)",
  // "I'm just being honest!",
  // "alright now! alright now, fellas!",
  // "what cooler than being cool?",
  // "Ice cold!",
  // "I can't hear ya! I say what's, what's cooler than being cool?",
  // "Ice cold!",
  "Alright alright alright alright alright alright alright alright alright alright alright alright alright alright alright alright!",
  // "Okay, now ladies!",
  "breaking this thang down for just a few seconds",
  "breaking this thang down for nothin'",
  "wanting to see you on your badest behavior!",
  "Lending me some sugar, I am your neighbor!",

  "Shaking it, shake it, shake it, shake it, shake it",

  "Shaking it like a Polaroid picture! Hey ya!",
 
  "all the Beyonce's, and Lucy Liu's, and baby dolls",
  "Getting on tha floor get on tha floor!",
];
const songChoices = [
  wap_lyrics,
  roman,
  mg,
  low,
  bonfire,
  heyya,
  espresso_lyrics,
  apple_lyrics,
  diet_pepsi,
];
const departmentToCorporation = {
  "Department of Defense": "weapons manufacturers",
  // "Corporate Handouts": "billionaires and corporations", // TODO: SOFIA PPP DATA!
  "Corrections Department": "corporations and the prision industrial complex", // TODO
  "Energy Department": "Big Oil",
  "Department of Government Efficiency": "inefficient bureaucracy", // Example placeholder
};

// Function to generate email with dynamic department
function generateRandomDOGEEmail(department) {
  const subject =
    subjectLinesSyn[Math.floor(Math.random() * subjectLinesSyn.length)];
  const greeting =
    emailGreetingsSyn[Math.floor(Math.random() * emailGreetingsSyn.length)];
  const express = expressSyn[Math.floor(Math.random() * expressSyn.length)];
  const frustration =
    frustrationSyn[Math.floor(Math.random() * frustrationSyn.length)];
  const overspend =
    overspending[Math.floor(Math.random() * overspending.length)];
  const cited = citedSyn[Math.floor(Math.random() * citedSyn.length)];
  const corporation = departmentToCorporation[department] || "corporations"; // Fallback for unknown department
  const closing =
    emailClosingSyn[Math.floor(Math.random() * emailClosingSyn.length)];
  const waste = wasteSyn[Math.floor(Math.random() * wasteSyn.length)];
  const songLyricChoice =
    songChoices[Math.floor(Math.random() * songChoices.length)];
  const finalSongLyric =
    songLyricChoice[Math.floor(Math.random() * songLyricChoice.length)];

  let emailBody;

  // Check if the button is "I Want to Write My Own!"
  if (department === "Custom Message") {
    emailBody = `${greeting}, 

Your message here! Be creative!

${closing},`;
  } else {
    emailBody = `${greeting}, 

I am reaching out to ${express} my ${frustration} with the government ${waste} in the ${department}. This particular department has been ${overspend} resources and ${cited} to be ${finalSongLyric}. My hard-earned tax dollars shouldn't be wasted by giving ${corporation} handouts.

${closing},`;
  }

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(emailBody);
  const emailLink = `mailto:DOGE@mail.house.gov?subject=${encodedSubject}&body=${encodedBody}`;

  window.location.href = emailLink;
} // end of func
async function emailCount(buttonID) {
  const url = `https://doge-tracking.gz4c.org/?button=${buttonID}`;

  const resposne = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// event listener for random email
// Add event listener to the buttons' parent container

// event listner for corporate handouts button
document.querySelector(".buttons").addEventListener("click", function (event) {
  const button = event.target;
  if (button.classList.contains("send-email-button")) {
    const department = button.getAttribute("data-department");
    if (button.id === "corporateHandoutsButton") {
      writePppMail();
    } else {
      generateRandomDOGEEmail(department);
    }
  }
  emailCount(button.id);
});

