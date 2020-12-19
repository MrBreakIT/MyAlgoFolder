// We can use OR(||) short circuit evaluation to assigna default value to a variable in case the expected value found falsy.


// longhand

let imagePath;
let path = getImagePath();
if (path !== null && path !== undefined && path !== '') {
    imagePath = path;
} else {
    imagePath = 'default.jpg';
}

// shorthand
let imagePath = getImagePath() || 'default.jpg';