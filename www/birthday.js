/** Sidereal year, in mean solar days [D=86400s] */
const SIDEREAL_YEAR = 365.256363004;

/**
 * object representing a birth datetime, for calculating birthday celebrations
 */
const Birthday = {
    init: function Birthday_init(datetime) {
        this.daysInYear = SIDEREAL_YEAR;
        this.datetime = datetime;
    },
    getYearsOldDate: function Birthday_getYearsOldDate(numberYearsOld) {
        const msElapsed = numberYearsOld * this.daysInYear * 24 * 60 * 60 * 1000;
        const birthTime = this.datetime.getTime();
        const yearsOldDate = new Date(birthTime + msElapsed);
        return yearsOldDate;
    },
};

/**
 * Instantiate a new Birthday object
 * @param {Date} datetime date/time of birth
 * @returns new initialized Birthday object
 */
export function newBirthday(datetime) {
    const birthday = Object.create(Birthday);
    Birthday.init(datetime);
    return birthday;
}