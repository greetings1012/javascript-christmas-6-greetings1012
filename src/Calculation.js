import { Console } from "@woowacourse/mission-utils";
import {
    DISCOUNT_VALUE,
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
    },

    calculateEvents(date, totalPrice, orderMenu){
        let eventListArray = []
        eventListArray.push(this.calculateGiveaway(totalPrice));
        eventListArray.push(this.calaulateDDayDiscount(date));
        eventListArray.push(this.calculateWeekDayDiscount(date, orderMenu));
        eventListArray.push(this.calculateWeekEndDiscount(date, orderMenu));
        eventListArray.push(this.calculateSpecialDiscount(date));
        eventListArray.push(this.calculateGiveawayDiscount(totalPrice));
        Console.print(eventListArray);
        return eventListArray;
    },

    calculateGiveaway(totalPrice){
        let count = 0;
        if(totalPrice >= 120000){
            count += 1;
        }
        return count;
    },

    calaulateDDayDiscount(date){
        let discount = 0;
        if(date < 26){
            discount = 1000 + ((date - 1) * 100);
        }
        return discount
    },

    calculateWeekDayDiscount(date, orderMenu){
        const targetDate = new Date(2023, 11, date);
        if (targetDate.getDay() > 4){
            return 0;
        }
        let weekDayDiscount = 0;
        for (let i = 0; i < orderMenu.length; i++) {
            const menu = orderMenu[i];
            const menuName = Object.keys(menu)[0];
            const menuCount = menu[menuName];
            if (MENU_DESSERT.some(item => menuName in item)) {
                weekDayDiscount += DISCOUNT_VALUE * menuCount;
            }
        }
        return weekDayDiscount;
    },

    calculateWeekEndDiscount(date, orderMenu){
        const targetDate = new Date(2023, 11, date);
        if (targetDate.getDay() <= 4) {
            return 0;
        }
        let weekEndDiscount = 0;
        for (let i = 0; i < orderMenu.length; i++) {
            const menu = orderMenu[i];
            const menuName = Object.keys(menu)[0];
            const menuCount = menu[menuName];
            if (MENU_MAIN.some(item => menuName in item)) {
                weekEndDiscount += DISCOUNT_VALUE * menuCount;
            }
        }
        return weekEndDiscount;
    },

    calculateSpecialDiscount(date){
        const targetDate = new Date(2023, 11, date);
        if (targetDate.getDay() == 0 || date == 25) {
            return 1000;
        }
        return 0;
    },

    calculateGiveawayDiscount(totalPrice){
        if (this.calculateGiveaway(totalPrice) == 1){
            return 25000;
        }
        return 0;
    }
}

export default Calculation;