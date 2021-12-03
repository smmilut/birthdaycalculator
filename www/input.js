import * as Controller from "./controller.js";
/**
 * manage user input and communicate with the Controller
 */

/** HTML element for inputting birth datetime */
let birthdatetimeEl;

/** Always call init first */
export function init(datetimeLocalId) {
    birthdatetimeEl = document.getElementById(datetimeLocalId);
    birthdatetimeEl.addEventListener("change", birthChanged);
}

/** Birth date input changed */
function birthChanged(event) {
    /// stop the regular form submission
    event.preventDefault();
    const birthdatetimeString = birthdatetimeEl.value;
    const birthdatetime = new Date(birthdatetimeString);  //new Date(birthdatetimeString + "Z");
    Controller.onNewBirthDate(birthdatetime);
}