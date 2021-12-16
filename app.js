const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [userName, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(userName, github), err => {
    if(err) throw err;

    console.log('Portfolio comlete! Check out index.html to see the output!')
})




// reference code blocks

// what does this do? it prints the two items in the array that we provide
/* const printProfileData = profileDataArr => {
    // This...
    for(let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }

    console.log('======================');

    // is the same as this...
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });
};

printProfileData(profileDataArgs); */
