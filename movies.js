// Build the array of movie objects
function make_movies() {
    var movies = [
     //SCI FI
        {
            name: "Zontar",
            title: "Zontar: The Thing from Venus",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWIxYWQwN2ItMzQ5Yi00OTllLWEzZmYtNzU1NzhlN2M0NDVmXkEyXkFqcGdeQXVyNTc4Njg5MjA@._V1_.jpg",
            video: "https://ia801402.us.archive.org/13/items/zontar_the_thing_from_venus/Zontar_the_Thing_From_Venus_512kb.mp4",
            genre: "SciFi",
            id: "tt0061217"
},
        {
            name: "Plan9",
            title: "Plan 9 from Outer Space",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzMzA0NDE3MF5BMl5BanBnXkFtZTgwMzg1Mjc1MDE@._V1_.jpg",
            video: "https://ia800206.us.archive.org/12/items/Plan_9_from_Outer_Space_1959/Plan_9_from_Outer_Space_1959.mp4",
            genre: "SciFi",
            id: "tt0052077"
},
        {
            name: "KillersfromSpace",
            title: "Killers from Space",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMzU5NTY4NF5BMl5BanBnXkFtZTgwMDg1OTM1MjE@._V1_SY1000_CR0,0,647,1000_AL_.jpg",
            video: "https://ia800306.us.archive.org/3/items/Killers_from_space/Killers_from_space_512kb.mp4",
            genre: "SciFi",
            id: "tt0047149"
},
        {
            name: "AssignmentOuterSpace",
            title: "Assignment: Outer Space",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmQ2NTZmOGEtMzllMy00ZDc3LWI3ODktNzNhNmE3ZDI2YzA0XkEyXkFqcGdeQXVyNTc4Njg5MjA@._V1_SY1000_CR0,0,653,1000_AL_.jpg",
            video: "https://ia800202.us.archive.org/8/items/AssignmentOuterSpace/AssignmentOuterSpacePresentedByMoviePowder_512kb.mp4",
            genre: "SciFi",
            id: "tt0054330"
},
        {
            name: "EndoftheWorld",
            title: "End of the World",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2JmOGQ3NjYtMDRlNi00YzcyLTk4MTAtZTlkMGE2YzYyYWFjXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_.jpg",
            video: "https://ia800201.us.archive.org/31/items/EndoftheWorld/EndoftheWorld_512kb.mp4",
            genre: "SciFi",
            id: "tt0075990"
},
        {
            name: "AttackfromSpace",
            title: "Attack from Space",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc5NjIzMTc0NV5BMl5BanBnXkFtZTcwMTk3NDgyMQ@@._V1_.jpg",
            video: "https://ia902205.us.archive.org/27/items/Attack_From_Space/Attack_From_Space_512kb.mp4",
            genre: "SciFi",
            id: "tt0230832"
},
        // HORROR
        {
            name: "HouseonHauntedHill",
            title: "House on Haunted Hill",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmM4YzQxMmYtYTRjMy00MWFjLWFmY2YtZDBiYmI5ZjVlMWQxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX660_CR0,0,660,999_AL_.jpg",
            video: "https://ia800203.us.archive.org/18/items/house_on_haunted_hill_ipod/house_on_haunted_hill.mp4",
            genre: "horror",
            id: "tt0051744"
},
        {
            name: "PhantomoftheOpera",
            title: "The Phantom of the Opera",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDk4MDM1NTI5MV5BMl5BanBnXkFtZTgwMDkyMDc2MTE@._V1_SY1000_CR0,0,614,1000_AL_.jpg",
            video: "https://ia800301.us.archive.org/21/items/ThePhantomoftheOpera/Phantom_of_the_Opera_512kb.mp4",
            genre: "horror",
            id: "tt0016220"
},
        {
            name: "NightoftheLivingDead",
            title: "Night of the Living Dead",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjRjZjE3OGUtYzIyYy00NGRkLTliYTUtYmI1ZjQ3YmZjYTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX656_AL_.jpg",
            video: "https://ia800300.us.archive.org/1/items/night_of_the_living_dead/night_of_the_living_dead_512kb.mp4",
            genre: "horror",
            id: "tt0063350"
},
        {
            name: "CarnivalofSouls",
            title: "Carnival of Souls",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYjgxYjI1ODktNWYyNy00N2EyLWFhOWEtMmI1ZmU3ZmU5ZWFjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,653,1000_AL_.jpg",
            video: "https://ia800301.us.archive.org/8/items/CarnivalofSouls/CarnivalOfSouls_512kb.mp4",
            genre: "horror",
            id: "tt0055830"
},
        {
            name: "TheMostDangerousGame",
            title: "The Most Dangerous Game",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU4MjYxMjI1N15BMl5BanBnXkFtZTgwNjk1NTAwMjE@._V1_.jpg",
            video: "https://ia802707.us.archive.org/10/items/TheMostDangerousGame/TheMostDangerousGame_512kb.mp4",
            genre: "horror",
            id: "tt0023238"
},
        {
            name: "TheGhostTrain",
            title: "The Ghost Train",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmMxZDk2OGYtNDg0ZC00ZmIzLWI2Y2UtYTU2M2ZjN2Y4NTEyXkEyXkFqcGdeQXVyMjIyNjE2NA@@._V1_.jpg",
            video: "https://ia801403.us.archive.org/21/items/TheGhostTrain/TheGhostTrain_512kb.mp4",
            genre: "horror",
            id: "tt0033660"
},
       // CARTOON
        {
            name: "BettyBoop",
            title: "Betty Boop Cartoon Classics",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41unoBGX5wL._SY300_.jpg",
            video: "https://ia801908.us.archive.org/3/items/BettyBoopCartoonsCartoonClassicsVol.1/Betty%20Boop%20Cartoons%20-%20Cartoon%20Classics%20Vol.%201.mp4", //todo: find better
            genre: "cartoon",
            id: "tt0023227"
},
        {
            name: "FelixtheCat",
            title: "Felix the Cat: Golden Goose",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWZiZjU4NzMtZTczZC00MTFlLWE1MTMtMjM1MmM1YTU2MWQwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYzMjA3NzI@._V1_.jpg",
            video: "https://ia802608.us.archive.org/8/items/felix_the_cat_the_goos_that_laid_the_golden_egg/felix_the_cat_the_goos_that_laid_the_golden_egg_512kb.mp4",
            genre: "cartoon",
            id: "tt0141134"
},
        {
            name: "arcticgiant",
            title: "Superman Vs. The Arctic Giant",
            poster: "https://s-media-cache-ak0.pinimg.com/236x/10/f8/a0/10f8a0b92b67021ef96f84a32cd200e7.jpg",
            video: "https://ia802705.us.archive.org/11/items/arctic_giant_ipod/arctic_giant_512kb.mp4",
            genre: "cartoon",
            id: "tt0034466"
},
        {
            name: "SecretAgent",
            title: "Secret Agent",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYzM4NjdjM2EtZDg1NS00NzY0LWI4NDEtNzFhOWQ3M2VjYzFkXkEyXkFqcGdeQXVyMzYyMzU2OA@@._V1_.jpg",
            video: "https://ia801400.us.archive.org/10/items/secret_agent/secret_agent_512kb.mp4",
            genre: "cartoon",
            id: "tt0036336"
},
        {
            name: "TheSpiritof43",
            title: "The Spirit of '43",
            poster: "https://s-media-cache-ak0.pinimg.com/originals/6c/0f/86/6c0f865455660ef766ddd9cb04b86c14.jpg",
            video: "https://ia801409.us.archive.org/33/items/TheSpiritOf43_56/The_Spirit_of__43_512kb.mp4",
            genre: "cartoon",
            id: "tt0168184"
},
        {
            name: "casper",
            title: "Casper: The Friendly Ghost",
            poster: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/775617.jpg",
            video: "https://ia800202.us.archive.org/18/items/TheFriendlyGhost/TheFriendlyGhost_512kb.mp4",
            genre: "cartoon",
            id: "tt0037582"
},
     // KUNG FU
        {
            name: "Return of the Kung Fu Dragon",
            title: "Return of the Kung Fu Dragon",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYTE3NzRjOTEtN2Q1NC00ZTMzLTgwMTMtM2YwMmQyNzc5YjZiL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SY1000_CR0,0,687,1000_AL_.jpg",
            video: "https://ia802500.us.archive.org/5/items/ReturnOfTheKungFuDragon/ReturnoftheKungFuDragon.mp4",
            genre: "kungfu",
            id: "tt0075133"
},
        {
            name: "secretkungfu",
            title: "The Guy With Secret Kung Fu",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MjcwMjY4NV5BMl5BanBnXkFtZTcwNzk0MzIzMQ@@._V1_.jpg",
            video: "https://ia601407.us.archive.org/21/items/TheGuyWithTheSecretKungFu/TheGuyWithSecretKungFu_512kb.mp4",
            genre: "kungfu",
            id: "tt0186909"
},
        {
            name: "BloodontheSun",
            title: "Blood on the Sun",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODMzNjExZGItZDRkYS00ZTMyLWJjMzMtZDJmNTQzNDQxNDhkL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SY1000_CR0,0,661,1000_AL_.jpg",
            video: "https://ia802608.us.archive.org/24/items/BloodontheSun/BloodontheSun_512kb.mp4",
            genre: "kungfu",
            id: "tt0164401"
},
        {
            name: "thelittledragons",
            title: "The Little Dragons",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzA1ZjU2OTgtODc2Ny00M2MyLTg1MWUtMzE2YTg1YTJiZjUyL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_.jpg",
            video: "https://ia800205.us.archive.org/0/items/KarateKidsUSA/Karate_Kids_USA.mp4",
            genre: "kungfu",
            id: "tt0081061"
},
        {
            name: "BruceLeeFightsBackfromtheGrave",
            title: "Bruce Lee Fights Back from the Grave",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmIzYmVmNGQtZDBiMy00ZjAyLWJlYTYtM2FiYmM2MDJlMDRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,661,1000_AL_.jpg",
            video: "https://ia802606.us.archive.org/4/items/BruceLeeFightsBackFromTheGrave1976/bruceleefightsback.mp4",
            genre: "kungfu",
            id: "tt0074247"
},
        {
            name: "SisterStreetFighter",
            title: "Sister Street Fighter",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNWM4MTA5YWItYTk5ZS00YjZmLTk2MzktYmQ3MmVhYjFhMjNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,658,1000_AL_.jpg",
            video: "https://ia601407.us.archive.org/1/items/SisterStreetfighter1974/SisterStreetFighter_512kb.mp4",
            genre: "kungfu",
            id: "tt0073714"
}]
    return movies;
}
