import SearchResults from './SearchResults';
import SearchResultItem from './SearchResultItem';
import React, {Component} from 'react';
import ReactTestUtils from "react-addons-test-utils";

describe('SearchResults', () => {
    it('should render results', () => {
        const renderedComponent = ReactTestUtils.renderIntoDocument(createSearchResults(mockResults));
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, SearchResultItem);
        // One result component should be created for each result item
        expect(foundComponents.length).toEqual(mockResults.length);
    });
});

function createSearchResults(resultsData) {
    return (<SearchResults searchResults = {resultsData} />);
}

// TODO move to another file
const mockResults = [
    {
        "poster_path": "/9kVPiqBJIdl2E4Ycy8w5j05RMfk.jpg",
        "adult": false,
        "overview": "Christian Slater is a stranger who comes to a small town. The local citizens think he's up to no good. After bothering him for a while, he blurts out in frustration, that he is there to kill himself.",
        "release_date": "1997-09-05",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 100196,
        "original_title": "Julian Po",
        "original_language": "en",
        "title": "Julian Po",
        "backdrop_path": "/jjMa0pIlm9xtYAQ18Yqugf3dDuA.jpg",
        "popularity": 1.12104,
        "vote_count": 2,
        "video": false,
        "vote_average": 5.75
    },
    {
        "poster_path": "/13O82WHCf3KmODYXOcQ0s5VPJV.jpg",
        "adult": false,
        "overview": "Manay Po tells the story of Luz, a small time jeweler who dreams of making it big so as to provide a better life for her family. Her life revolves around her brood of three, namely, Oscar, Orson and Orwell and her live-in boyfriend Gerry. With the help of her good friend and maid Maritess, Luz was able to raise her children normally despite the absence of a husband. In spite of her children's questionable sexualities, their family paints a picture of a happy family - a home filled with laughter and unconditional love.",
        "release_date": "2006-05-31",
        "genre_ids": [
            35,
            10769
        ],
        "id": 108610,
        "original_title": "Manay Po!",
        "original_language": "en",
        "title": "Manay Po!",
        "backdrop_path": null,
        "popularity": 1.001205,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/lACsvPshRWGd5qTByBEAteyYUGo.jpg",
        "adult": false,
        "overview": "",
        "release_date": "2009-11-29",
        "genre_ids": [ ],
        "id": 171114,
        "original_title": "Blickfang Po",
        "original_language": "de",
        "title": "Blickfang Po",
        "backdrop_path": null,
        "popularity": 1.000857,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/kjq3WB1I77fErojIru4tERQOBU3.jpg",
        "adult": false,
        "overview": "Chandru (Arya) and Bigilu (Lal) are close friends. Chandru is an expert auto driver &amp; racer while Bigilu is a mechanic expert at customizing autos to run at the dream speed of 130 km/h. Son of Gun (John Vijay) is the chief of a rival group who wants to outsmart the duo. Chandru, the race champ tries to settle the dues for his auto through a race, which is almost a cakewalk for him. He and Bigilu challenge Son of Gun to a race, and a date is fixed.",
        "release_date": "2007-11-30",
        "genre_ids": [
            28,
            18
        ],
        "id": 69505,
        "original_title": "ஓரம் போ",
        "original_language": "en",
        "title": "Oram Po",
        "backdrop_path": "/45g9neaNa75smrIXTcC2xb7Sp0X.jpg",
        "popularity": 1.000572,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/ghCMJHzz05ztNFAQ28Ssl92nYH4.jpg",
        "adult": false,
        "overview": "During the Chinese Revolution in 1949, young Chinese copra trader named Fong-Huan marries Elisa, a young and pretty Filipina. The couples children, Daniel and Linda, were raised in a mixture of Chinese and Filipino-Hispanic tradition. These richly cultured people are the ancestors of a dysfunctional third-generation family whose daughters tell their own stories of joy, struggle, and the complex realities in the life of Filipino Chinese families.",
        "release_date": "2002-12-25",
        "genre_ids": [
            18
        ],
        "id": 352709,
        "original_title": "Mano Po",
        "original_language": "en",
        "title": "Mano Po",
        "backdrop_path": null,
        "popularity": 1.000394,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/8cP4MIjy8eUmSAGqzz2U9DJU1gQ.jpg",
        "adult": false,
        "overview": "A five-person team of gold prospectors in the Yukon has just begun to enjoy great success when one of the members snaps, and suddenly kills two of the others. The two survivors, a husband and wife, subdue the killer but are then faced with an agonizing dilemma. With no chance of turning him over to the authorities for many weeks, they must decide whether to exact justice themselves or to risk trying to keep him restrained until they can return to civilization.",
        "release_date": "1926-01-01",
        "genre_ids": [
            18
        ],
        "id": 126644,
        "original_title": "Po Zakonu",
        "original_language": "en",
        "title": "By the Law",
        "backdrop_path": null,
        "popularity": 1.000327,
        "vote_count": 2,
        "video": false,
        "vote_average": 3.5
    },
    {
        "poster_path": "/yhYdj4Nhu3BrfxkNV4tflNU6zrv.jpg",
        "adult": false,
        "overview": "Two illegal immigrants meet a young kid and the three become best friends until one of them joins the Triads. Now the remaining two must fight the Triads in a battle to the death.",
        "release_date": "1977-10-19",
        "genre_ids": [
            28
        ],
        "id": 147247,
        "original_title": "Bei po",
        "original_language": "en",
        "title": "Soul Brothers of Kung Fu",
        "backdrop_path": null,
        "popularity": 1.000002,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/mzOU5fKY0vx5YTSDyOFvG6YmdSG.jpg",
        "adult": false,
        "overview": "A Hong Kong cop named Kit busts a major gangster only to find his cover blown and his main witness gone. The gangster, in retaliation, has him kidnapped and put in a Thai jail with a false criminal identity. A lowly prison guard Chai with extraordinary fighting skills guards kit and prevents his escape from prison. The prison guard’s daughter suffers from a rare form of leukemia and Kit is the only donor who can save her. The prison guard discovers Kit’s real identity and helps him to escape in return for his agreeing to save his daughter. Together, Kit and Chai must face the gangster and his minions and take them down.",
        "release_date": "2015-06-18",
        "genre_ids": [
            18,
            28,
            80
        ],
        "id": 331576,
        "original_title": "Saat po long 2",
        "original_language": "cn",
        "title": "SPL 2: A Time for Consequences",
        "backdrop_path": "/1gxyYYSv5l6TmyA7CdSeDAk8XP1.jpg",
        "popularity": 1.367427,
        "vote_count": 30,
        "video": false,
        "vote_average": 6.4
    },
    {
        "poster_path": "/ahh7dYFBCiXQ6l5weQ2fYBU4i7g.jpg",
        "adult": false,
        "overview": "",
        "release_date": "1984-01-01",
        "genre_ids": [ ],
        "id": 58087,
        "original_title": "Amarsi un po'...",
        "original_language": "it",
        "title": "Amarsi un po'...",
        "backdrop_path": null,
        "popularity": 1.000001,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/4FAeGHpHLvVdOgfxzz7brkRKiGx.jpg",
        "adult": false,
        "overview": "\"I Am Walking Along Moscow\" aka \"Ya Shagayu Po Moskve\" (1963) is a charming lyrical comedy directed by Georgi Daneliya in 1963 that was nominated for Golden Palm at Cannes Film Festival. Daneliya proved that it is possible to create a masterpiece in the most difficult genre of romantic comedy. Made by the team of young and incredibly talented artists that besides Daneliya included writer/poet Gennady Shpalikov, composer Andrei Petrov, and cinematographer Vadim Yusov (who had made four films with Andrei Tarkovski), and the dream cast of the talented actors even in the smaller cameos, \"I Am Walking Along Moscow\" keeps walking victoriously through the decades remaining deservingly one of the best and most beloved Russian comedies and simply one of the best Russian movies ever made. Funny and gentle, dreamy and humorous, romantic and realistic, the film is blessed with the eternal youth and will always take to the walk on the streets of Moscow new generations of the grateful viewers.",
        "release_date": "1963-01-01",
        "genre_ids": [
            10749,
            35
        ],
        "id": 27862,
        "original_title": "Ya Shagayu po Moskve",
        "original_language": "ru",
        "title": "Walking the Streets of Moscow",
        "backdrop_path": "/vzJghjINj0Z5l1fWc3lH6FhaOzR.jpg",
        "popularity": 1.177337,
        "vote_count": 9,
        "video": false,
        "vote_average": 5.56
    },
    {
        "poster_path": "/f6yUxLORQYQ5vRsQrkAQ7L0vo0w.jpg",
        "adult": false,
        "overview": "Based on Chetan Bhagat's bestselling novel \"The 3 Mistakes of My Life\", Kai Po Che (meaning a triumphant yell in Gujarati) is an unforgettable ode to friendship and the magical moments one shares with one's closest pals – celebrating festivals, drunken dancing, watching cricket matches together, strategizing on how to catch the attention of the cute neighborhood girl, being there to watch each other's back in troubled times and to celebrate one's successes by screaming \"Kai Po Che\"!",
        "release_date": "2013-02-13",
        "genre_ids": [
            18
        ],
        "id": 168245,
        "original_title": "Kai Po Che!",
        "original_language": "hi",
        "title": "Kai Po Che!",
        "backdrop_path": "/zXzRlXOA0i1strSquXpKHswlS6Y.jpg",
        "popularity": 1.163913,
        "vote_count": 15,
        "video": false,
        "vote_average": 5.33
    },
    {
        "poster_path": "/jyUWFPPwOa1J05juP86iZHQQRNt.jpg",
        "adult": false,
        "overview": "Standing near the Western Wall in Jerusalem Avner says: 'This is the moment when I claim victory over the Nazis'. Two brothers, three mothers - a saga shrouded in fog for almost six decades - the unique narrative of a voyage tracing the roots of a shadowy past. Brothers Avner and Itzik live in Israel. As toddlers, their lives were saved first by their aunt, later by another young woman. Their past included three women who would become their mothers. But all this remained hidden - even from close family and friends. Now 70 year-old, Itzik and Avner journey into that past, seeking their true identity to piece together the incredible story of their survival.",
        "release_date": "2013-03-01",
        "genre_ids": [
            99
        ],
        "id": 140948,
        "original_title": "Po Lamaditi L'ehove",
        "original_language": "en",
        "title": "Here I Learned To Love",
        "backdrop_path": null,
        "popularity": 1.001878,
        "vote_count": 0,
        "video": false,
        "vote_average": 0
    },
    {
        "poster_path": "/mWxRGRYmMGT4EVvKUGxeALOu0hh.jpg",
        "adult": false,
        "overview": "Saveliy Govorkov, an Afghanistan war veteran tries to fight mafia in his own town.",
        "release_date": "1990-06-06",
        "genre_ids": [
            28,
            18,
            80
        ],
        "id": 183162,
        "original_title": "Po Prozvishchu 'Zver'",
        "original_language": "en",
        "title": "His Nickname Is Beast",
        "backdrop_path": "/r6NRrcobOU1TLBcJzbUbDhw6UPh.jpg",
        "popularity": 1.000018,
        "vote_count": 1,
        "video": false,
        "vote_average": 1
    },
    {
        "poster_path": "/jdEAk02mLIB11M1tSqgmLAoX1jB.jpg",
        "adult": false,
        "overview": "Set at the time of Italian explorer Marco Polo's historic expedition to China ,during the reign of Monogol ruler Kublai Khan, it stars American actor Richard Harrison as Polo. Taking considerable liberties with the historic record, the film has Polo turning up as an Imperial Inspector assigned to root out Chinese rebles in the south, but eventually being won over to their cause.",
        "release_date": "1975-12-25",
        "genre_ids": [
            28,
            12,
            10769
        ],
        "id": 56671,
        "original_title": "Ma ko Po lo",
        "original_language": "zh",
        "title": "The Four Assassins",
        "backdrop_path": "/v7sFlt7Jd19rCnuSYqI35UdySyl.jpg",
        "popularity": 1.117897,
        "vote_count": 5,
        "video": false,
        "vote_average": 5.3
    },
    {
        "poster_path": "/xRKWUkwjCBtuqeMUXLhrLdP5L3V.jpg",
        "adult": false,
        "overview": "Taipei. A voice off-camera looks back ten years to 2000, when Vicky was in an on-again off-again relationship with Hao-Hao...",
        "release_date": "2001-10-31",
        "genre_ids": [
            18,
            10769
        ],
        "id": 11553,
        "original_title": "Qian xi man po",
        "original_language": "en",
        "title": "Millennium Mambo",
        "backdrop_path": "/vdvH7gd6g7B5LdgbwPi964Hksjb.jpg",
        "popularity": 1.112711,
        "vote_count": 10,
        "video": false,
        "vote_average": 7.9
    },
    {
        "poster_path": "/ynzHIaBxpKiTtAGwRAKyQgczsqS.jpg",
        "adult": false,
        "overview": "Sonya, a popular super model, proposes to Sasha in order to irritate her boyfriend, a famous TV star Ruslan - and adventures begin...",
        "release_date": "2011-04-15",
        "genre_ids": [
            35,
            10749
        ],
        "id": 64645,
        "original_title": "Svadba po Obmenu",
        "original_language": "ru",
        "title": "Exchange Wedding",
        "backdrop_path": "/1vpMMnVf9PB5Abo7InB6bxTs373.jpg",
        "popularity": 1.074064,
        "vote_count": 1,
        "video": false,
        "vote_average": 1
    }
];
