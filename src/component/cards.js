import { useState} from "react";
import React from "react";

function Cards() {
	let cardDivs = [];
	const cards = [
		{
			name: "MineCraft",
			src: "https://images-na.ssl-images-amazon.com/images/I/418cEZfh8-L.jpg"
		},
		{
			name: "GTA V",
			src: "https://pbs.twimg.com/media/Acq8WQKCQAEd96M.png"
		},
		{
			name: "Mario",
			src: "https://i.pinimg.com/originals/37/d7/c7/37d7c72b1706bbba1a388b82c2d611bb.png"
		},
		{
			name: "Resident Evil",
			src: "https://image.api.playstation.com/vulcan/img/cfn/11307dM-YkrvXIhUj7C-35RG_iIwwftGEOjY-oKon5KdyQbcUayV8NvdYW3oWFPji8FBDR0KmfGmu29AzYoLP_T54BklHbe4.png"
		},
		{
			name: "Stardew Valley",
			src: "https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png"
		},
		{
			name: "Pokemon",
			src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
		},
		{
			name: "Halo",
			src: "https://cdn.akamai.steamstatic.com/steam/apps/976730/capsule_616x353.jpg?t=1634144453"
		},
		{
			name: "Legend of Zelda",
			src: "https://images-na.ssl-images-amazon.com/images/I/A15-31Y3bRL.jpg"
		},
		{
			name: "Sonic",
			src: "https://i.pinimg.com/originals/4a/5a/47/4a5a474b6f42f265d7f003575ef34b75.jpg"
		},
		{
			name: "Skyrim",
			src: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png"
		},
		{
			name: "Star Wars: KOTOR",
			src: "https://cdn.cloudflare.steamstatic.com/steam/apps/32370/ss_41e5bed6736c83fe3ebd72b163f10102b24a1016.1920x1080.jpg?t=1602892538"
		},
		{
			name: "Fallout",
			src: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2505/N5vIQXg5NEWmxKLfKQ6GUolC.png"
		}
	];
	const randomize = (e) => {
		const usedNumbers = [];
		//change setstate hooks
		cardDivs = [];
		for (let i = 0; i < cards.length; i++) {
			let stop = false;
			while (stop === false) {
				const number = Math.floor(Math.random() * 12);
				if (usedNumbers.includes(number) === false) {
					stop = true;
					usedNumbers.push(number)
				} else {
					continue;
				}
			}
		}
		for (const number of usedNumbers) {
			cardDivs.push(
				<div id="card" key={cards[number].name} onClick={randomize}>
					<img src={cards[number].src} alt="" />
					<h2 id="name">{cards[number].name}</h2>
				</div>
			)
		}
		setRandomizeCards(cardDivs)
	}
	for (let i = 0; i < cards.length; i++) {
		cardDivs.push(
			<div id="card" key={cards[i].name} onClick={randomize}>
				<img src={cards[i].src} alt="" />
				<h2 id="name">{cards[i].name}</h2>
			</div>
		)
	}
	const [randomizeCards, setRandomizeCards] = useState(cardDivs);
  return (
		<div id="cardsContainer">
			{randomizeCards}
    </div>
  );
}

export default Cards;
