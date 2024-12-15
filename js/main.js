const cardToContextualize = document.getElementById("contextual-card");
const buttonDropdown = document.getElementsByClassName("dropdown-toggle")[0];

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function replaceClassNameOfElement(element, classNameToKeep, newClassName) {
    // Remove other class than the class we want to keep
    element.classList.forEach((className) => {
        if (!classNameToKeep.includes(className)) {
            element.classList.remove(className);
        }
    });
    // Add new class
    element.classList.add(newClassName);
}
      
function changeTheme(newTheme) {
    // Change theme of the card
    replaceClassNameOfElement(cardToContextualize, ["card"], `card-${newTheme}`);

    // Change theme of the button dropdown & replace its text
    replaceClassNameOfElement(buttonDropdown, ["btn", "dropdown-toggle"], `btn-${newTheme}`);
    buttonDropdown.textContent = capitalizeFirstLetter(newTheme);
}