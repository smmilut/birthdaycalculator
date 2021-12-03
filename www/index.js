import * as CollapseSystem from "./collapseSystem.js";
import * as Controller from "./controller.js";
import * as Input from "./input.js";
import * as Output from "./output.js";

(function init() {
    CollapseSystem.init();
    Controller.init();
    Input.init("birthdatetime");
    Output.init("ouputDayBorn", "resultbox");
})();
