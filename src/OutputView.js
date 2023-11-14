import {
    Console,
} from "@woowacourse/mission-utils";

import {
    OUTPUT_EVENT_INFORMATION,
} from "../constants.js"
const OutputView = {

    printEventInformation() {
        Console.print(OUTPUT_EVENT_INFORMATION + `\n`);
    },

    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}

export default OutputView;
