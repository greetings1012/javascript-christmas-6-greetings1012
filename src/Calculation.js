import { Console } from "@woowacourse/mission-utils";
import {
    MENU_APPITIZER,
    MENU_MAIN,
    MENU_DESSERT,
    MENU_DRINK
} from "./constants.js"

const Calculation = {
    calculateTotalOrderPrice(menuDictionary){
        let totalPrice = 0
        for (let i = 0; i < menuDictionary.length; i++) {
            const order = menuDictionary[i];
            const menuName = Object.keys(order)[0];
            const count = order[menuName];

            const menuPrice = this.calculateEachOrderPrice(menuName);
            totalPrice += menuPrice * count;
        }
        Console.print(totalPrice);
        return totalPrice;
    },
    
    calculateEachOrderPrice(menuName){
        switch (true) {
            case MENU_APPITIZER.some(menu => menu.hasOwnProperty(menuName)):
                return MENU_APPITIZER.find(menu => menu.hasOwnProperty(menuName))[menuName];
            case MENU_MAIN.some(menu => menu.hasOwnProperty(menuName)):
                return MENU_MAIN.find(menu => menu.hasOwnProperty(menuName))[menuName];
            case MENU_DESSERT.some(menu => menu.hasOwnProperty(menuName)):
                return MENU_DESSERT.find(menu => menu.hasOwnProperty(menuName))[menuName];
            case MENU_DRINK.some(menu => menu.hasOwnProperty(menuName)):
                return MENU_DRINK.find(menu => menu.hasOwnProperty(menuName))[menuName];
            default:
                return;
        }
    }
}

export default Calculation;