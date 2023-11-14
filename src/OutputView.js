import {
    Console,
} from "@woowacourse/mission-utils";

import {
    OUTPUT_EVENT_INFORMATION,
    OUTPUT_MENU,
} from "./constants.js"
const OutputView = {

    printEventInformation() {
        Console.print(OUTPUT_EVENT_INFORMATION + `\n`);
    },

    printMenu(){
        Console.print(`n` + OUTPUT_MENU + `\n`);
    },

    printOrder() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}

export default OutputView;
