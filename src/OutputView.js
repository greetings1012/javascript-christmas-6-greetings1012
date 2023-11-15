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
        Console.print(`\n12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
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
    },

    printEvent(totalPrice, discountArray){
        this.printTotalAmount(totalPrice);
        this.printGiveaway(discountArray[0]);
        this.printBenefitDetail(discountArray);
        const totalBenefitAmount = this.printTotalBenefitAmount(discountArray[6]);
        this.printChargeAmount(totalPrice, discountArray[6]);
        this.printEventBadge(totalBenefitAmount);
    },

    printTotalAmount(totalPrice){
        const formattedAmount = new Intl.NumberFormat('ko-KR').format(totalPrice);
        Console.print(`<할인 전 총주문 금액>`)
        Console.print(`${formattedAmount}원` + `\n`);
    },

    printGiveaway(champange){
        Console.print(`<증정 메뉴>`);
        switch (champange){
            case 0:
                Console.print(`없음`);
                break;
            default:
                Console.print(`샴페인 ${champange}개`);
                break;
        }
        Console.print(" ")
    },

    printBenefitDetail(discountArray){
        Console.print(`<혜택 내역>`);
        this.printDDayDiscount(discountArray[1])
        this.printWeekdayDiscount(discountArray[2]);
        this.printWeekendDiscount(discountArray[3]);
        this.printSpecialDiscount(discountArray[4]);
        if (discountArray.slice(1, 6).every(element => element === 0)) {
            Console.print("없음");
        }
        Console.print(" ");
    },

    printDDayDiscount(dDayDiscountAmount){
        if(dDayDiscountAmount) {
            dDayDiscountAmount *= -1
            const formattedAmount = new Intl.NumberFormat('ko-KR').format(dDayDiscountAmount);
            Console.print(`크리스마스 디데이 할인: ${formattedAmount}원`);
        }
    },
    printWeekdayDiscount(weekdayDiscountAmount){
        if (weekdayDiscountAmount) {
            weekdayDiscountAmount *= -1
            const formattedAmount = new Intl.NumberFormat('ko-KR').format(weekdayDiscountAmount);
            Console.print(`평일 할인: ${formattedAmount}원`);
        }

    },
    printWeekendDiscount(weekendDiscountAmount){
        if (weekendDiscountAmount) {
            weekendDiscountAmount *= -1
            const formattedAmount = new Intl.NumberFormat('ko-KR').format(weekendDiscountAmount);
            Console.print(`주말 할인: ${formattedAmount}원`);
        }
    },
    printSpecialDiscount(specialDiscountAmount){
        if (specialDiscountAmount) {
            specialDiscountAmount *= -1
            const formattedAmount = new Intl.NumberFormat('ko-KR').format(specialDiscountAmount);
            Console.print(`특별 할인: ${formattedAmount}원`);
        }
    },
    printGiveawayDiscount(giveawayDiscountAmount){
        if (giveawayDiscountAmount) {
            giveawayDiscountAmount *= -1
            const formattedAmount = new Intl.NumberFormat('ko-KR').format(giveawayDiscountAmount);
            Console.print(`증정 이벤트: ${formattedAmount}원`);
        }
    },

    printTotalBenefitAmount(totalBenefitAmount){
        if(totalBenefitAmount > 0){
            totalBenefitAmount *= -1;
        }
        let formattedAmount = new Intl.NumberFormat('ko-KR').format(totalBenefitAmount);
        Console.print(`<총혜택 금액>`)
        Console.print(`${formattedAmount}원` + `\n`);
        return totalBenefitAmount * -1;
    },

    printChargeAmount(totalPrice, totalBenefitAmount){
        if(totalPrice > 120000){
            totalBenefitAmount -= 25000;
        }
        const formattedAmount = new Intl.NumberFormat('ko-KR').format(totalPrice - totalBenefitAmount);
        Console.print(`<할인 후 예상 결제 금액>`);
        Console.print(`${formattedAmount}원` + `\n`);
    },
    printEventBadge(totalBenefitAmount){
        Console.print(`<12월 이벤트 배지>`);
        if(totalBenefitAmount > 20000){
            Console.print(`산타\n`);
        }
        else if (totalBenefitAmount > 10000) {
            Console.print(`트리\n`);
        }
        else if (totalBenefitAmount > 5000) {
            Console.print(`별\n`);
        }
        else if (totalBenefitAmount >= 0){
            Console.print(`없음\n`);
        }
    },

    printClosingRemarks(date){
        Console.print(`2023년 12월 ${date}일로 예약이 완료되었습니다.
고객님이 따뜻하고 행복한 연말 보내시길 진심으로 바라겠습니다.
감사합니다!`);
    }
}

export default OutputView;
