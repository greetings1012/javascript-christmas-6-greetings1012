import {
    Console,
} from "@woowacourse/mission-utils";
import {
    EVENT_INFORMATION, 
} from "/Constants/constants.js"
const OutputView = {

    printEventInformation() {
        Console.print(EVENT_INFORMATION);
    },

    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}

export default OutputView;
