import {
    Console, 
} from "@woowacourse/mission-utils";

import { 
    INPUT_GET_DATE,
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
    }
}

const InputValidation = {
    isValidateDate (input){
        if(Number.isNaN(input) || input < 1 || input > 31){
            throw new Error(ERROR_INVALIDATE_DATE + `\n`);
        }
    }
}

export default InputView;