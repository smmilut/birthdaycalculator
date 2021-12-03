/**
 * manage how to display output
 */

/** HTML element to display day born */
let dayBornEl;
/** HTML element to display list of birthdays */
let birthdaysEl;

/** Always call init first */
export function init(dayBornId, birthdaysId) {
    dayBornEl = document.getElementById(dayBornId);
    birthdaysEl = document.getElementById(birthdaysId);
}

/**
 * Show the day of birth
 * @param {Birthday} birthday Birthday object
 */
export function showDayBorn(birthday) {
    dayBornEl.innerHTML = "";
    const birthEl = document.createElement("p");
    birthEl.innerHTML = `Born on ${datetimeToString(birthday.datetime)}`;
    dayBornEl.appendChild(birthEl);
}

/**
 * Show the list of birthdays
 * @param {Birthday} birthday Birthday object
 * @param {integer} startYearsOld first year to display
 * @param {integer} endYearsOld last year to display
 */
export function showBirthdays(birthday, startYearsOld = 0, endYearsOld = 100) {
    birthdaysEl.innerHTML = "";
    const ulEl = document.createElement("ul");
    for (let numberYearsOld = startYearsOld; numberYearsOld < endYearsOld; numberYearsOld++) {
        const liEl = document.createElement("ul");
        const yearsOldDate = birthday.getYearsOldDate(numberYearsOld)
        liEl.innerHTML = `Celebrate ${numberYearsOld} years old on ${datetimeToString(yearsOldDate)}`;
        ulEl.appendChild(liEl);
    }
    birthdaysEl.appendChild(ulEl);
}

/**
 * @param {Date} datetime 
 * @returns date formatted as string
 */
function datetimeToString(datetime) {
    const locale = undefined;  //"en-us";
    const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    // const string = datetime.toLocaleDateString(locale, options);
    const string = new Intl.DateTimeFormat(locale, options).format(datetime);
    return string;  //datetime.toString();
}