import {
    Console,
} from "@woowacourse/mission-utils";

import{
    MENU_APPETIZER,
    MENU_MAIN,
    MENU_DESSERT,
    MENU_DRINK
} from "./constants.js"

import {
    OUTPUT_EVENT_INFORMATION,
    OUTPUT_MENU,
} from "./constants.js"
const OutputView = {

    printEventInformation() {
        Console.print(OUTPUT_EVENT_INFORMATION + `\n`);
    },

    printMenu(){
        Console.print(`\n` + OUTPUT_MENU + `\n`);
    },

    printOrder(date, orderMenu) {
        Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!` + `n`);
        Console.print("<주문 메뉴>");
        this.printEachMenuByCategory(orderMenu, MENU_APPETIZER);
        this.printEachMenuByCategory(orderMenu, MENU_MAIN);
        this.printEachMenuByCategory(orderMenu, MENU_DESSERT);
        this.printEachMenuByCategory(orderMenu, MENU_DRINK); 
        Console.print(`\n`);  
    },

    printEachMenuByCategory(orderMenu, category){
        orderMenu.forEach(menu => {
            const menuName = Object.keys(menu)[0];
            const menuCount = menu[menuName];
            if (category.find(menu => menu.hasOwnProperty(menuName))) {
                Console.print(`${menuName} ${menuCount}개`);
            }
        })
    }
}

export default OutputView;
