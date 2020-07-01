window.onload=function() {
	console.log("Window loaded.");
	
	// Add option groups and values
	const states = [
		"Alabama",
		"Alaska",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"Florida",
		"Georgia",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming"
	];
	
	// Create state object and add to option
	const stateSelect = document.getElementById("state-list");	
	
	for (let i in states) {
		let opt = document.createElement("option");
		opt.value = states[i];
		opt.id = i;
		opt.innerHTML = states[i];
		stateSelect.appendChild(opt);
	}
}

function updateState() {
	var stateList = document.getElementById('state-list');
	var selected = stateList.value;
	var selectedIndex = stateList.selectedIndex;
	
	var stateInfo = getStateInfo(selectedIndex);

	// Change flag
	let flagID = "./assets/"
	flagID += selected.replace(/\s/g, "-").toLowerCase();
	flagID += "-flag-small.png";
	let flagImg = document.getElementById("flag-image");
	flagImg.src = flagID;

	// Change state law info
	let stateName = document.getElementById("state-name");
	stateName.innerHTML = stateInfo.state;
	let lawText = document.getElementById("law-text");
	lawText.innerHTML = stateInfo.law;

	// Change footer source text
	let sourceLink = document.getElementById('source-text');
	sourceLink.href = stateInfo.source;
	let sourceText = document.getElementById('source-state');
	sourceText.innerHTML = stateInfo.state;
	
}

function getStateInfo(stateIndex) {
	const stateInfo = [
		{
			state: "Alabama",
			law: "It is illegal to spray silly string in Mobile.",
			source: "https://www.onlyinyourstate.com/alabama/20-strange-alabama-laws/"
		},
		{
			state:"Alaska",
			law: "It is illegal to whisper in someone’s ear while they are moose hunting.",
			source: "https://stupidlaws.com"
		},
		{
			state:"Arizona",
			law: "Cutting down a cactus is punishable with up to 25 years in prison.",
			source: "https://www.ranker.com/list/weird-laws-in-arizona/darrow"
		},
		{
			state:"Arkansas",
			law: "No honking horns outside of sandwich shops.",
			source: "https://www.municode.com/library/ar/little_rock/codes/code_of_ordinances?nodeId=COOR_CH18MIPROF_ARTIIOFINPUPEOR_S18-54SOHOSASH"
		},
		{
			state: "California",
			law: "It is illegal to whistle for a lost canary before 7am.",
			source: "https://www.california.com/strange-laws-california/"
		},
		{
			state:"Colorado",
			law: "You cannot keep a couch on your porch in Boulder (to prevent couch bonfires).",
			source: "https://www.municode.com/library/co/boulder/codes/municipal_code?nodeId=TIT5GEOF_CH4OFAGPR_5-4-16OUFURE"
		},
		{
			state:"Connecticut",
			law: "To be considered a pickle, a pickle must bounce.",
			source: "https://www.worldatlas.com/articles/50-dumb-laws-across-the-united-states.html"
		},
		{
			state:"Delaware",
			law: "It is prohibited to fly over water without sufficient supplies",
			source: "https://www.worldatlas.com/articles/50-dumb-laws-across-the-united-states.html"
		},
		{
			state: "Florida",
			law: "Skateboarding without a license is illegal.",
			source: "https://www.onlyinyourstate.com/florida/silly-laws-2-fl/"
		},
		{
			state:"Georgia",
			law: "You cannot give another man a piggy-back ride in Atlanta.",
			source: "https://www.gafollowers.com/20-strange-laws-implemented-georgia/"
		},
		{
			state:"Hawaii",
			law: "Billboards are illegal.",
			source: "https://wheninyourstate.com/hawaii/10-strangest-hawaiian-laws-didnt-know-existed/"
		},
		{
			state:"Idaho",
			law: "It is illegal to sweep the debris on any street used for public travel.",
			source: "https://legislature.idaho.gov/statutesrules/idstat/title18/t18ch39/sect18-3906/"
		},
		{
			state: "Illinois",
			law: "Those under 21 can drink legally, but they must be enrolled in a culinary program to do so.",
			source: "https://www.pantagraph.com/entertainment/the-24-weirdest-laws-in-illinois/collection_cd8ecb82-0f89-57bd-8f08-34b86f8ee192.html"
		},
		{
			state:"Indiana",
			law: "You cannot kiss any other individual if you have a mustache.",
			source: "https://www.onlyinyourstate.com/indiana/bizarre-indy-laws/"
		},
		{
			state:"Iowa",
			law: "One armed piano players must perform for free.",
			source: "https://www.onlyinyourstate.com/iowa/10-weird-laws-ia/"
		},
		{
			state:"Kansas",
			law: "In Topeka, it is illegal to scream in a haunted house.",
			source: "http://www.kansan.com/arts_and_culture/ever-wonder-about-some-of-kansas-craziest-laws-heres-11-of-them/article_2e23ac40-896f-11e5-a333-bb92b855af55.html"
		},
		{
			state: "Kentucky",
			law: "Citizens must shower or bathe at least once per year.",
			source: "https://www.onlyinyourstate.com/kentucky/these-15-crazy-laws-ky/"
		},
		{
			state:"Louisiana",
			law: "Any food other than grains intended to be fed to hogs in Jefferson Parish must cook the food on the premises immediately before feeding the hogs.",
			source: "https://mmrbhlawoffice.com/ten-craziest-laws-louisiana/"
		},
		{
			state:"Maine",
			law: "It is illegal to park directly in front of a Dunkin Donuts.",
			source: "https://ecode360.com/9683809"
		},
		{
			state:"Maryland",
			law: "Seafood restaurants in Baltimore must recyle their oyster shells.",
			source: "https://todays1019.radio.com/blogs/fran-lane/weird-maryland-laws"
		},
		{
			state: "Massachusetts",
			law: "Only a police officer can perform target practice with a firearm on a human outline.",
			source: "https://www.oberhauserlaw.com/blog/criminal/12-weird-laws-in-massachusetts/"
		},
		{
			state:"Michigan",
			law: "Cars may not be sold on Sundays.",
			source: "https://www.michiganhousesonline.com/crazy-laws-michigan/"
		},
		{
			state:"Minnesota",
			law: "All men driving motorcycles must wear shirts.",
			source: "https://www.allstatepeterbilt.com/blog/minnesota-weird-driving-laws"
		},
		{
			state:"Mississippi",
			law: "In Oxford, it is illegal to cheer out loud.",
			source: "https://www.morrisbart.com/blog/weird-laws-mississippi/"
		},
		{
			state: "Missouri",
			law: "Women are prohibited from wearing corsets.",
			source: "https://www.stupidlaws.com/laws/united-states/missouri/"
		},
		{
			state:"Montana",
			law: "It is illegal to use your lawn sprinklers to harass people.",
			source: "http://www.idiotlaws.com/dumb_laws/montana/"
		},
		{
			state:"Nebraska",
			law: "Persons with gonorrhea may not marry.",
			source: "http://www.dailynebraskan.com/culture/10-weird-laws-call-nebraska-home/article_8989d96d-2a87-5144-bd52-40262134e462.html"
		},
		{
			state:"Nevada",
			law: "You may not pawn dentures in Las Vegas",
			source: "https://lasvegasliving.mytouchtour.com/blog/weird-laws-in-nevada/"
		},
		{
			state: "New Hampshire",
			law: "You may not sell clothes you are wearing to pay off a gambling debt.",
			source: "https://www.wattpad.com/115718894-stupid-strange-and-weird-laws-new-hampshire-laws"
		},
		{
			state:"New Jersey",
			law: "You may not slurp your soup.",
			source: "https://www.theodysseyonline.com/10-weird-new-jersey-laws"
		},
		{
			state:"New Mexico",
			law: "You may not perform indecent waitering, which is showing your 'intimate parts' to anyone while serving food or drinks.",
			source: "https://www.koat.com/article/strange-laws-in-new-mexico/5072058"
		},
		{
			state:"New York",
			law: "It is illegal in New York State to transport an ice cream cone in your pocket on a Sunday.",
			source: "https://untappedcities.com/2017/09/28/cities-101-10-of-the-strangest-new-york-city-state-laws/"
		},
		{
			state: "North Carolina",
			law: "It is illegal to borrow your neighbors dog.",
			source: "https://www.charlottestories.com/top-10-craziest-laws-currently-books-north-carolina/"
		},
		{
			state:"North Dakota",
			law: "It is illegal to keep an elk in a sandbox.",
			source: "https://www.onlyinyourstate.com/north-dakota/crazy-weird-laws-nd/"
		},
		{
			state:"Ohio",
			law: "It is illegal to fish for whales on Sunday.",
			source: "https://photos.clevescene.com/11-dumb-laws-that-still-actually-exist-in-ohio/?slide=1&it-is-illegal-to-fish-for-whales-on-sunday-ohio"
		},
		{
			state:"Oklahoma",
			law: "It is against the law for a bar owner to allow anyone inside to pretend to have sex with a bufallo",
			source: "https://www.oklahoma-criminal-defense.com/media/weird-oklahoma-laws"
		},
		{
			state: "Oregon",
			law: "You must have a license to juggle in Hood River.",
			source: "https://www.oregonlive.com/living/2016/03/oregons_obscure_and_strange_la.html"
		},
		{
			state:"Pennsylvania",
			law: "It is illegal to barter with an infant child.",
			source: "https://www.ydr.com/story/news/2019/02/21/weird-laws-pennsylvania-did-you-know-these-were-actually-books/2906798002/"
		},
		{
			state:"Rhode Island",
			law: "Unmarried couples will be fined 10$ if they engage in premarital sex.",
			source: "https://www.usatoday.com/list/news/nation-now/weirdest-laws-every-state/53ad0541-3518-4432-adc4-0fec193d389e/"
		},
		{
			state:"South Carolina",
			law: "You may beat your wife on a Sunday.",
			source: "https://www.islandpacket.com/news/weird/article217573430.html"
		},
		{
			state: "South Dakota ",
			law: "Liquor stores may not sell alcoholic candy containing more than .5% ABV.",
			source: "https://www.businessinsider.com/weird-state-laws-across-america-2018-1?op=1"
		},
		{
			state:"Tennessee",
			law: "Only adults may play pinball in Nashville.",
			source: "http://www.idiotlaws.com/dumb_laws/tennessee/"
		},
		{
			state:"Texas",
			law: "You must purchase a 5$ permit to walk barefoot in public.",
			source: "https://www.trianglerealtyllc.com/unusual-laws-in-texas/"
		},
		{
			state:"Utah",
			law: "Alcohol may not be sold during an emergency.",
			source: "http://www.dumblaws.com/law/68"
		},
		{
			state: "Vermont",
			law: "Women must obtain written permission from their husbands to wear false teeth",
			source: "https://www.policeone.com/police-humor/articles/50-dumb-laws-in-america-URIQZkUxvuyDrSQu/"
		},
		{
			state:"Virginia",
			law: "Swearing at someone over the phone can be punished by a fine up to $100.",
			source: "https://www.stupidlaws.com/laws/united-states/virginia/"
		},
		{
			state:"Washington",
			law: "It is illegal to ride a horse that has been determined as ugly.",
			source: "https://asknoypi.com/weird-and-crazy-laws-in-washington-state/"
		},
		{
			state:"West Virginia",
			law: "You must wear shoes to drive.",
			source: "https://coverhound.com/insurance-learning-center/14-strange-laws-in-virginia"
		},
		{
			state: "Wisconsin",
			law: "It is illegal to serve Margarine or any other fake butter under the guise of it being butter.",
			source: "http://whoonew.com/2014/07/strange-wisconsin-state-laws/"
		},
		{
			state:"Wyoming",
			law: "It is prohibited to Harass Big Foot, punishable with a $100k fine and/or up to 10 years in prison.",
			source: "https://criminaldefensetucson.com/crazy-laws-out-of-washington-state/"
		}
	]
	return stateInfo[stateIndex];
	
}