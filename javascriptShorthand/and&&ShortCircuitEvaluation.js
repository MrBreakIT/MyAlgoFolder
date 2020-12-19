//If calling a function only if a variable is tru, then you can use AND(&&) short circuit as an alternative for this..
//The AND(&&) short circuit shorthand is more useful in React when you want to coneditionally render a component. 
//for example:  
//<div> { this.state.isLoading && <Loading />} </div>


// longhand
if (isLoggedIn) {
    goToHomepage();
}


// shorthand
isLoggedIn && goToHomepage();