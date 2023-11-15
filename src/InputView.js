import {
    Console, 
} from "@woowacourse/mission-utils";

import { 
    INPUT_GET_DATE,
    INPUT_GET_MENU,
    ERROR_INVALIDATE_DATE,
} from "./constants.js";

const InputView = {
    async getDate() {
        try{
            const input = await Console.readLineAsync(INPUT_GET_DATE + `\n`);
            InputValidation.isValidateDate(input);
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
            Console.print(menuDictionary);
        }catch (error){
            Console.print(error.message);
            return await this.getMenu();
        }
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

    isOrderInMenu(menuDictionary) {

    }
}

export default InputView;