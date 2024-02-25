const moviesJsonString = `
{
    "movies": [
        {
            "title": "Silent Night",
            "year": 2023,
			"month": 11,
			"day": 30,
            "director": "Camille Griffin",
            "cast": [
                "Keira Knightley",
                "Lily-Rose Depp",
                "Matthew Goode"
            ]
        },
        {
            "title": "Candy Cane Lane",
            "year": 2023,
			"month": 10,
			"day": 1,
            "director": "Maggie Carey",
            "cast": [
                "Emma Stone",
                "Ryan Gosling",
                "Zoey Deutch"
            ]
        },
        {
            "title": "Renaissance: A Film By Beyoncé",
            "year": 2023,
			"month": 12,
			"day": 22,
            "director": "Beyoncé and Ed Burke",
            "cast": []
        },
		{
			"title": "The Marvels",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Nia DaCosta",
			"cast": [
				"Brie Larson",
				"Teyonah Parris",
				"Iman Vallani"
			]
		},
		{
			"title": "Napoleon",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Ridley Scott",
			"cast": [
				"Joaquin Phoenix"
			]
		},
		{
			"title": "Wish",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Disney",
			"cast": []
		},
		{
			"title": "Thanksgiving",
			"year": 2023,
			"month": 11,
			"day": 22,
			"director": "Eli Roth",
			"cast": []
		},
		{
			"title": "Spider-Man: Across the Spider-Verse",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "James Gunn",
			"image": "across-the-spider-verse",
			"cast": []
		},
		{
			"title": "Oppenheimer",
			"year": 2023,
			"month": 12,
			"day": 25,
			"director": "Christopher Nolan",
			"cast": []
		},
		{
			"title": "Guardians of the Galaxy Vol. 3",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "James Gunn",
			"cast": []
		},
		{
			"title": "The Color Purple",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "Steven Spielberg",
			"cast": []
		},
		{
			"title": "Leave the World Behind",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "Ava DuVernay",
			"cast": []
		},
		{
			"title": "Ferrari",
			"year": 2023,
			"month": 12,
			"day": 21,
			"director": "Curtis Hanson",
			"cast": []
		}
    ]
}

`;

const moviesJsonString2 =
    `
  {
    "movies": [
        {
            "title": "Night Swim",
            "year": 2024,
            "month": 1,
            "day": 5,
            "director": "Bryce McGuire",
            "cast": [
                "Wyatt Russell",
                "Kerry Condon",
                "Amélie Hoeferle"
            ]
        },
        {
            "title": "He Went That Way",
            "year": 2024,
            "month": 1,
            "day": 5,
            "director": "Jeffrey Darling",
            "cast": [
                "Zachary Quinto",
                "Jacob Elordi",
                "Patrick J. Adams"
            ]
        },
        {
            "title": "Mean Girls",
            "year": 2024,
            "month": 1,
            "day": 12,
            "director": "Simon Kinberg",
            "cast": [
                "Jessica Chastain",
                "Lupita Nyong'o",
                "Penélope Cruz"
            ]
        },
        {
            "title": "The Beekeeper",
            "year": 2024,
            "month": 1,
            "day": 12,
            "director": "Matt Bettinelli-Olpin and Tyler Gillett",
            "cast": [
                "Neve Campbell",
                "Courteney Cox",
                "David Arquette"
            ]
        },
        {
            "title": "The Book of Clarence",
            "year": 2024,
            "month": 1,
            "day": 19,
            "director": "Daniel Espinosa",
            "cast": [
                "Jared Leto",
                "Matt Smith",
                "Adria Arjona"
            ]
        },
        {
          "title": "I.S.S.",
          "year": 2024,
          "month": 1,
          "day": 19,
          "director": "Gabriela Cowperthwaite",
          "cast": [
            "Jared Leto"
          ]
        }        
    ]
}

`;

const moviesJsonString3 = `
{
    "movies": [
      {
        "title": "The Whispering Woods",
        "year": 2024,
        "month": 2,
        "day": 10,
        "director": "Ava DuVernay",
        "cast": [
            "Zendaya", "Tom Holland", "Benedict Wong"
        ],
        "genre": "Fantasy Adventure",
        "description": "A young cartographer discovers a hidden map leading to a forgotten forest, embarking on a thrilling quest filled with mythical creatures and ancient secrets."
      },
      {
        "title": "Love at First Swipe",
        "year": 2024,
        "month": 2,
        "day": 7,
        "director": "John Cho",
        "cast": ["Awkwafina", "Henry Golding", "Rebel Wilson"],
        "genre": "Romantic Comedy",
        "description": "Two competitive chefs clash and collaborate on a cooking reality show, their undeniable chemistry leading to a recipe for love beyond the competition."
      },
      {
        "title": "The Last Broadcast",
        "year": 2024,
        "month": 2,
        "day": 18,
        "director": "Guillermo del Toro",
        "cast": ["Jake Gyllenhaal", "Saoirse Ronan", "Idris Elba"],
        "genre": "Mystery Thriller",
        "description": "A late-night radio host receives a chilling call claiming to witness a murder, delving into a web of clues and a race against time to expose the truth."
      },
      {
        "title": "Symphony of the Streets",
        "year": 2024,
        "month": 2,
        "day": 23,
        "director": "Chiwetel Ejiofor",
        "cast": ["Documentary (featuring interviews with internationally renowned street artists)"],
        "genre": "Documentary",
        "description": "This documentary explores the world of street art, its history, styles, and impact on communities, featuring interviews with renowned artists and experts."
      },
      {
        "title": "Under the Northern Lights",
        "year": 2024,
        "month": 2,
        "day": 2,
        "director": "Greta Gerwig",
        "cast": ["Hailee Steinfeld", "Timothée Chalamet", "Florence Pugh"],
        "genre": "Coming-of-Age Drama",
        "description": "A shy teenager finds solace in the aurora borealis, navigating friendship, first love, and self-acceptance under the mesmerizing glow of the northern lights."
      },
      {
        "title": "Echo",
        "year": 2024,
        "month": 2,
        "day": 14,
        "director": "Denis Villeneuve",
        "cast": ["Ryan Gosling", "John David Washington", "Brie Larson"],
        "genre": "Sci-Fi Thriller",
        "description": "Astronauts on a space mission encounter an anomaly that disrupts communication with Earth, grappling with dwindling resources and the chilling possibility they're not alone."
      },
      {
        "title": "The Lost Melody",
        "year": 2024,
        "month": 2,
        "day": 4,
        "director": "Wes Anderson",
        "cast": ["Tilda Swinton", "Bill Murray", "Owen Wilson (Voice Cast)"],
        "genre": "Animated Family Film",
        "description": "Misfit instruments embark on an adventure to recover a lost melody, stolen by a villain who seeks to silence the world, filled with music, humor, and the power of friendship."
      },
      {
        "title": "The Samurai's Daughter",
        "year": 2024,
        "month": 1,
        "day": 25,
        "director": "Michelle Yeoh",
        "cast": ["Lucy Liu", "Simu Liu", "Tony Leung Chiu-wai"],
        "genre": "Historical Drama",
        "description": "A young woman raised as a samurai warrior defies tradition and embraces her true potential to lead the resistance and fight for justice in 17th century Japan."
      },
      {
        "title": "Unsolved: The Enigma of the Deep",
        "year": 2024,
        "month": 2,
        "day": 12,
        "director": "James Cameron",
        "cast": ["Documentary (featuring interviews with leading marine scientists and explorers)"],
        "genre": "Documentary",
        "description": "James Cameron dives headfirst into the mysteries of the Earth's oceans, exploring unsolved phenomena like underwater disappearances, colossal creatures lurking in the abyss, and unexplained sonic booms. With cutting-edge technology and interviews with leading marine scientists and fearless explorers, this documentary sheds light on the vast unknowns that lie beneath the surface and the ongoing quest to unravel them. Prepare to be captivated by the beauty and intrigue of the deep, and ponder the secrets that the oceans hold."
      }
    ]
}
  `;

export { moviesJsonString, moviesJsonString2, moviesJsonString3 };