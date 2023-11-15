import {
    Console, 
} from "@woowacourse/mission-utils";

import { 
    MAX_ORDER,
    MENU_APPITIZER,
    MENU_MAIN,
    MENU_DRINK,
    MENU_DESSERT,
    INPUT_GET_DATE,
    INPUT_GET_MENU,
    ERROR_INVALIDATE_DATE,
    ERROR_INVALIDATE_ORDER_COUNT,
    ERROR_INVALIDATE_ORDER_INPUT,
    ERROR_INVALIDATE_ORDER_ONLYDRINK,
    ERROR_INVALIDATE_ORDER_TOO_MANY
} from "./constants.js";

const InputView = {
    async getDate() {
        try{
            const input = await Console.readLineAsync(INPUT_GET_DATE + `\n`);
            InputValidation.isValidateDate(input);
            return input;
        } catch (error) {
            Console.print(error.message);
            return await this.getDate();
        }
    },

    async getMenu() {
        try{
            const input = await Console.readLineAsync(INPUT_GET_MENU + `\n`);
            const menuAndCount = ModifyMenu.splitByMenu(input);
            const menuDictionary = ModifyMenu.splitMenuAndCount(menuAndCount);
            this.checkMenu(menuDictionary);
            return menuDictionary;
        }catch (error){
            Console.print(error.message);
            return await this.getMenu();
        }
    },

    checkMenu(menuDictionary){
        InputValidation.isOrderInMenu(menuDictionary);
        InputValidation.isOrderNotZero(menuDictionary);
        InputValidation.isOrderNotInForm(menuDictionary);
        InputValidation.isOrderOverlapping(menuDictionary);
        InputValidation.isOrderOnlyDrink(menuDictionary);
        InputValidation.isOrderTooMany(menuDictionary);
    }
}

const ModifyMenu = {
    splitByMenu(input) {
        const menuAndCount = input.split(',');
        return menuAndCount;
    },
    
    splitMenuAndCount(menuAndCount) {
        let menuDictionary = [];
        for (let i = 0; i < menuAndCount.length; i++){
            let menuCountSplit = menuAndCount[i].split('-');
            let menuObject = {};
            menuObject[menuCountSplit[0]] = parseInt(menuCountSplit[1], 10);
            menuDictionary.push(menuObject);
        }
        return menuDictionary;
    }
}

const InputValidation = {
    isValidateDate(input) {
        if(Number.isNaN(Number(input)) || input < 1 || input > 31){
            throw new Error(ERROR_INVALIDATE_DATE + `\n`);
        }
    },

    isOrderNotZero(menuDictionary){
        for(let i = 0; i < menuDictionary.length; i++){
            if (menuDictionary[i] < 1){
                throw new Error(ERROR_INVALIDATE_ORDER_COUNT + `\n`)
            }
        }
    },

    isOrderInMenu(menuDictionary) {
        const allMenu = [MENU_APPITIZER, MENU_MAIN, MENU_DRINK, MENU_DESSERT];
        for (let i = 0; i < menuDictionary.length; i++) {
            const orderMenuName = Object.keys(menuDictionary[i])[0];
            if (!allMenu.flat().some(item => orderMenuName in item)) {
                throw new Error(ERROR_INVALIDATE_ORDER_INPUT + `\n`);
            }
        }   
    },

    isOrderNotInForm(menuDictionary){
        for (let i = 0; i < menuDictionary.length; i++) {
            const menuItem = menuDictionary[i];
            const menuName = Object.keys(menuItem)[0];
            const menuCount = menuItem[menuName];
            if (typeof menuName !== 'string' || isNaN(menuCount)) {
                throw new Error(ERROR_INVALIDATE_ORDER_INPUT + `\n`);
            }
        }
    },

    isOrderOverlapping(menuDictionary){
        const seenMenus = new Set();
        for (let i = 0; i < menuDictionary.length; i++) {
            const menu = menuDictionary[i];
            const menuName = Object.keys(menu)[0];

            if (seenMenus.has(menuName)) {
                throw new Error(ERROR_INVALIDATE_ORDER_INPUT + `\n`);
            } 
            seenMenus.add(menuName);
        }
    },

    isOrderOnlyDrink(menuDictionary){
        let hasNonDrink = false;
        for (let i = 0; i < menuDictionary.length; i++) {
            const menu = menuDictionary[i];
            const menuName = Object.keys(menu)[0];
            if (!MENU_DRINK.some(item => menuName in item)) {
                hasNonDrink = true;
                break;
            }
        }
        if(hasNonDrink === false){
            throw new Error(ERROR_INVALIDATE_ORDER_ONLYDRINK + `\n`);
        }
    },

    isOrderTooMany(menuDictionary){
        let orderCount = 0;
        for(let i = 0; i < menuDictionary.length; i++){
            orderCount += menuDictionary[i][Object.keys(menuDictionary[i])[0]];
        }
        if (orderCount > MAX_ORDER){
            throw new Error(ERROR_INVALIDATE_ORDER_TOO_MANY + `\n`)
        }
    }
}

export default InputView;