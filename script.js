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
        return `the ${favoriteColor} Chum`
    } else if (roadType === 'Smallfry') {
        return `the ${favoriteColor} Smallfry`
    } else if (roadType === 'Cohock') {
        return `the ${favoriteColor} Cohock`
    } else if (roadType === 'Snatcher') {
        return `the ${favoriteColor} Snatcher`

    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "g") {
        return `the Golden Goldie`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "h") {
        return `the Hazelnut Steelhead`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "e") {
        return `The Electric Blue Steel Eel`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "a") {
        return `The Amber Scrapper`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "m") {
        return `The Metallic Stinger`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "s") {
        return `The Silver Maws`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "c") {
        return `The Clear Drizzler`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "p") {
        return `The pink Flyfish`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "o") {
        return `The orange Fish Stick`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "b") {
        return `The Banana Flipper-Flopper`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "c") {
        return `The Crimson Slammin' Lid`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "d") {
        return `The Dandelion Big Shot`
    } else if (roadType === 'Boss' && favoriteColor.charAt(0) == "r") {
        return `The Red Mudmouth` 
    } else{
        return `${favoriteColor}rock`
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
    return`of the ${favoriteAnimal}`
}

// Master Function to assemble words
function genFullName (){
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

    //generate words
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedLastName} ${capitalizedMiddleName} ${suffix}`

    document.getElementById('result').textContent = fullName; console.log(fullName)
}

//Function Capsular thingy
function toCapitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}