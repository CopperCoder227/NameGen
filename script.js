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
   else {
return 'Harry'
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