//Generating prefix of name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//Generate First Name of Name
function genFirstName(firstName){
   const firstLetter = firstName.charAt(0).toLowerCase()
   //first leter changes the first part of value a-z
   if (firstLetter === 'a'){
    return 'Jeff'
   } else if (firstLetter === 'b'){
return 'Gary'
   }
   else if (firstLetter === 'c'){
return 'Barry'
   }
   else if (firstLetter === 'd'){
return 'Mary'
   }
    else if (firstLetter === 'e'){
return 'Barry'
    }
    else if (firstLetter === 'f'){
return 'Mary'
    }
    else if (firstLetter === 'g'){
return 'Gary'
    }
    else if (firstLetter === 'h'){
return 'Barry'
    }
    else if (firstLetter === 'i'){
return 'Mary'
    }
    else if (firstLetter === 'j'){
return 'Gary'
    }
    else if (firstLetter === 'k'){
return 'Barry'
    }
    else if (firstLetter === 'l'){
return 'Mary'
    }
    else if (firstLetter === 'm'){
return 'Gary'
    }
    else if (firstLetter === 'n'){
return 'Barry'
    }
    else if (firstLetter === 'o'){
return 'Mary'
    }
    else if (firstLetter === 'p'){
return 'Gary'
    }
    else if (firstLetter === 'q'){
return 'Barry'
    }
    else if (firstLetter === 'r'){
return 'Mary'
    }   
    else if (firstLetter === 's'){
return 'Gary'
    }
    else if (firstLetter === 't'){
return 'Barry'
    }
    else if (firstLetter === 'u'){
return 'Mary'
    }   
    else if (firstLetter === 'v'){
return 'Gary'
    }
    else if (firstLetter === 'w'){
return 'Barry'
    }
    else if (firstLetter === 'x'){
return 'Mary'
    }   
    else if (firstLetter === 'y'){
return 'Gary'
    }
    else if (firstLetter === 'z'){
return 'Barry'
}
                        
   else {
return '333x'
   }
}

//Generate middle name
function genMiddleName (roadType, favoriteColor){
    //adds fav color to dropdown thingy
    if (roadType === 'road'){
        return `${favoriteColor}ridge`
    } else if (roadType === 'street') {
        return `${favoriteColor}valley`
    } else if (roadType === 'ave') {
        return `${favoriteColor}woods`
    } else{
        return `${favoriteColor}rock`
    }
}

//gen last name
function genLastName(lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
       //first leter changes the first part of value a-z

    if (lastLetter === 'a'){
        return 'Shadow'
    } else if (lastLetter === 'e'){
        return 'Storm'
    } else{
        return 'Blaze'
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
    const capitalizedFirstName = toCapitalize(firstName)
    const capitalizedMiddleName = toCapitalize(middleName)
    const capitalizedLastName = toCapitalize(lastName)

    //generate words
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedMiddleName} ${suffix}`

    document.getElementById('result').textContent = fullName; console.log(fullName)
}

//Function Capsular thingy
function toCapitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}