//Random Number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //need to add the new guys from other email (chok etc)
  const images = [
    "imgs/img/ba-g.png", "imgs/img/ba.png", "imgs/img/br-g.png", "imgs/img/br-s.png", "imgs/img/br.png",
    "imgs/img/bs-g.png", "imgs/img/bs.png", "imgs/img/cho-g.png", "imgs/img/cho.png", "imgs/img/DJ.png",
    "imgs/img/driz-g.png", "imgs/img/driz.png", "imgs/img/ew-b.png", "imgs/img/ew-g.png", "imgs/img/ew-s.png",
    "imgs/img/ff-g.png", "imgs/img/ff.png", "imgs/img/fly-g.png", "imgs/img/fly.png", "imgs/img/fs-g.png",
    "imgs/img/fs.png", "imgs/img/gf-g.png", "imgs/img/gf.png", "imgs/img/griz-b.png", "imgs/img/griz-g.png",
    "imgs/img/griz-s.png", "imgs/img/grizz.png", "imgs/img/horo-g.png", "imgs/img/horo.png", "imgs/img/jj-g.png",
    "imgs/img/jj.png", "imgs/img/maw-g.png", "imgs/img/maw.png", "imgs/img/max.png", "imgs/img/mb-g.png",
    "imgs/img/mb.png", "imgs/img/mega-g.png", "imgs/img/mega.png", "imgs/img/sa-s.png", "imgs/img/sas-g.png",
    "imgs/img/sc-g.png", "imgs/img/sc.png", "imgs/img/se-g.png", "imgs/img/se.png", "imgs/img/sg-g.png",
    "imgs/img/sg-g.png", "imgs/img/sh-g.png", "imgs/img/sh.png", "imgs/img/sl-g.png", "imgs/img/sl.png",
    "imgs/img/ss-g.png", "imgs/img/ss.png", "imgs/img/st-g.png", "imgs/img/st.png", "imgs/img/tri.png"
];
  
//Generating prefix of name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'The'
    }
}

//Generate First Name of Name
function genFirstName(firstName){
   const firstLetter = firstName.charAt(0).toLowerCase()
   //first leter changes the first part of value a-z
   if (firstLetter === 'a'){
return 'Aged'
   } else if (firstLetter === 'b'){
return 'Bourgeois'
   }
   else if (firstLetter === 'c'){
return 'Calamari'
   }
   else if (firstLetter === 'd'){
return 'Dapper'
   }
    else if (firstLetter === 'e'){
return 'Enthusiastic'
    }
    else if (firstLetter === 'f'){
return 'Fierce'
    }
    else if (firstLetter === 'g'){
return 'Ghastly'
    }
    else if (firstLetter === 'h'){
return 'Hard-Workin'
    }
    else if (firstLetter === 'i'){
return 'Iced'
    }
    else if (firstLetter === 'j'){
return 'Jumbo'
    }
    else if (firstLetter === 'k'){
return 'Keen-and-Nimble'
    }
    else if (firstLetter === 'l'){
return 'Leaping'
    }
    else if (firstLetter === 'm'){
return 'Mesmerizing'
    }
    else if (firstLetter === 'n'){
return 'Not-So-Fresh'
    }
    else if (firstLetter === 'o'){
return 'Optimistic'
    }
    else if (firstLetter === 'p'){
return 'Phoenix-Like'
    }
    else if (firstLetter === 'q'){
return 'Quiet'
    }
    else if (firstLetter === 'r'){
return 'Rare'
    }   
    else if (firstLetter === 's'){
return 'Scorching'
    }
    else if (firstLetter === 't'){
return 'Tender'
    }
    else if (firstLetter === 'u'){
return 'Uncommon'
    }   
    else if (firstLetter === 'v'){
return 'Virtual'
    }
    else if (firstLetter === 'w'){
return 'Wandering'
    }
    else if (firstLetter === 'x'){
return 'X Battle'
    }   
    else if (firstLetter === 'y'){
return 'Young'
    }
    else if (firstLetter === 'z'){
return 'Zesty'
}
                        
   else {
return '333x'
   }
}

//Generate middle name
function genMiddleName (roadType, favoriteColor){
    //adds fav color to dropdown thingy
    favoriteColor.toLowerCase()
    if (roadType === 'Chum'){
        return `${favoriteColor} Chum`
    } else if (roadType === 'Smallfry') {
        return `${favoriteColor} Smallfry`
    } else if (roadType === 'Cohock') {
        return `${favoriteColor} Cohock`
    } else if (roadType === 'Snatcher') {
        return `${favoriteColor} Snatcher`

    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "g" ||favoriteColor.charAt(0) == "f" ) {
        return `Golden Goldie`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "h") {
        return `Hazelnut Steelhead`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "e") {
        return `Electric Blue Steel Eel`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "a") {
        return `Amber Scrapper`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "m") {
        return `Metallic Stinger`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "s") {
        return `Silver Maws`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "c") {
        return `Clear Drizzler`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "p") {
        return `pink Flyfish`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "o") {
        return `orange Fish Stick`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "b") {
        return `Banana Flipper-Flopper`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "c") {
        return `Crimson Slammin' Lid`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "d") {
        return `Dandelion Big Shot`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "r") {
        return `Red Mudmouth` 
    } else{
        return `${favoriteColor} rock`
    }
}

//gen last name
function genLastName(lastName){
    const lastLetter = lastName.charAt(0).toLowerCase()
    console.log(lastName)
        //first letter changes the first part of value a-z
   if (lastLetter === 'a'){
    return 'Adventurer'
       } else if (lastLetter === 'b'){
    return 'Big Boss'
       }
       else if (lastLetter === 'c'){
    return 'Chosen One'
       }
       else if (lastLetter === 'd'){
    return 'Demon'
       }
        else if (lastLetter === 'e'){
    return 'Entertainer'
        }
        else if (lastLetter === 'f'){
    return 'Fish'
        }
        else if (lastLetter === 'g'){
    return 'Globe-Trotter'
        }
        else if (lastLetter === 'h'){
    return 'Hunter'
        }
        else if (lastLetter === 'i'){
    return 'Inkantation'
        }
        else if (lastLetter === 'j'){
    return 'Jokester'
        }
        else if (lastLetter === 'k'){
    return 'Knight'
        }
        else if (lastLetter === 'l'){
    return 'Lawyer'
        }
        else if (lastLetter === 'm'){
    return 'Mastermind'
        }
        else if (lastLetter === 'n'){
    return 'Nomad'
        }
        else if (lastLetter === 'o'){
    return 'One-Hit Wonder'
        }
        else if (lastLetter === 'p'){
    return 'Paradox'
        }
        else if (lastLetter === 'q'){
    return 'Quartet'
        }
        else if (lastLetter === 'r'){
    return 'Ranker'
        }   
        else if (lastLetter === 's'){
    return 'Salmon'
        }
        else if (lastLetter === 't'){
    return 'Traveler'
        }
        else if (lastLetter === 'u'){
    return 'Ultimate Weapon'
        }   
        else if (lastLetter === 'v'){
    return 'Victor'
        }
        else if (lastLetter === 'w'){
    return 'Warden'
        }
        else if (lastLetter === 'x'){
    return '???'
        }   
        else if (lastLetter === 'y'){
    return 'Youngster'
        }
        else if (lastLetter === 'z'){
    return 'Zipcaster User'
    }
                            
       else {
    return '.96 Gal User'
       }
    }

//last suffix
function genSuffix (favoriteAnimal){
    if (favoriteAnimal === 'SG'){
        return `of the Spawning Grounds`
    } else if (favoriteAnimal === 'MB') {
        return `of the Marooner's Bay`
    } else if (favoriteAnimal === 'LO') {
        return `of the Lost Outpost`
    } else if (favoriteAnimal === 'SS') {
        return `of the Salmonid Smokeyard`
    } else if (favoriteAnimal === 'RA') {
    return `of the Ruins of Ark Polaris`}
}


// Master Function to assemble words
function genFullName(){
    //define variables from input
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    console.log(lastName)
    const roadType = document.getElementById('roadType').value;
    const favoriteColor = document.getElementById('favColor').value.trim();
    const animal = document.getElementById('favAnimal').value.trim();

    //generate each name part w help function
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(animal)

//Functions to capitilazion words
    const capitalizedPrefix = toCapitalize(prefix)
    const capitalizedFirstName = toCapitalize(newFirstName)
    const capitalizedMiddleName = toCapitalize(middleName)
    const capitalizedLastName = toCapitalize(newLastName)
    let randomNumbers = [
        getRandomNumber(0, 54),
        getRandomNumber(0, 54),
        getRandomNumber(0, 54)
      ];
    //generate words
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedLastName} ${capitalizedMiddleName} ${suffix}`
    
    document.getElementById("response-img-1").src = images[randomNumbers[0]]
    document.getElementById("response-img-2").src = images[randomNumbers[1]]
    document.getElementById("response-img-3").src = images[randomNumbers[2]]


    document.getElementById('result').textContent = fullName; console.log(fullName)
}
//Function Capsular thingy
function toCapitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}