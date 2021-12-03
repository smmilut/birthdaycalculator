import * as Output from "./output.js";
import * as Birthday from "./birthday.js";
/**
 * manage what to do on input
 */

/** Always call init first */
export function init() {
    /// pass
}

/** Input sent a new birth date */
export function onNewBirthDate(birthdatetime) {
    const birthday = Birthday.newBirthday(birthdatetime);
    Output.showDayBorn(birthday);
    Output.showBirthdays(birthday, 1, 101);
}
