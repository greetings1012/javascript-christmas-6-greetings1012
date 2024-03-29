const MAX_ORDER = 20;

const DISCOUNT_VALUE = 2023;

const MENU_APPETIZER = [{ "양송이수프": 6000 }, { "타파스": 5500 }, { "시저샐러드": 8000 }]

const MENU_MAIN = [{ "티본스테이크": 55000 }, { "바비큐립": 54000 }, { "해산물파스타": 35000 }, { "크리스마스파스타": 25000 }]

const MENU_DESSERT = [{ "초코케이크": 15000 }, { "아이스크림": 5000 }]

const MENU_DRINK = [{ "제로콜라": 3000 }, { "레드와인": 60000 }, { "샴페인": 25000 }]

const INPUT_GET_DATE = `안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`;

const INPUT_GET_MENU = `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)`;

const OUTPUT_EVENT_INFORMATION = `크리스마스를 맞아 우테코 식당에서 이벤트를 진행합니다!

- 고객님을 위해 준비된 혜텍

1. 크리스마스 디데이 할인
1,000원으로 시작하여 크리스마스가 다가올수록 날마다 할인 금액이 100원씩 증가합니다!
ex - 시작일인 12월 1일에 1,000원, 2일에 1,100원, ..., 25일엔 3,400원 할인

2. 평일 디저트 할인
평일에는 모든 디저트 메뉴를 개당 2,023원 할인된 금액에 판매합니다!

3. 주말 디저트 할인(금요일, 토요일)
주말에는 모든 메인 메뉴를 개당 2,023원 할인된 금액에 판매합니다!

4. 특별 할인(일요일, 크리스마스 당일)
일요일과 크리스마스 당일에는 총주문 금액에서 1,000원이 무조건 할인됩니다!

5. 증정 이벤트
할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 한 병을 무료로 제공합니다!

6. 2024 새해 준비 이벤트
총혜택 금액에 따라 금액별 이벤트 배지를 드립니다.
배지에 따라 새해 이벤트 참여 시 각각 다른 새해 선물을 증정할 예정입니다.

모든 할인과 이벤트 혜택은 중복 적용됩니다!

- 진행 기간
크리스마스 디데이 할인은 2023년 12월 1일 ~ 2023년 12월 25일
그 외 모든 할인과 이벤트 - 2023년 12월 1일 ~ 2023년 12월 31일

- 안내 및 주의사항
1. 모든 할인과 이벤트는 총주문 금액 10,000원 이상부터 적용됩니다.
2. 주문에는 메인 메뉴가 포함되어 있어야 합니다.
3. 메뉴는 한 번에 최대 20개까지 주문하실 수 있습니다.`;

const OUTPUT_MENU = `<< MENU >>

<애피타이저>
양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>
초코케이크(15,000), 아이스크림(5,000)

<음료>
제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)`;

const ERROR_INVALIDATE_DATE = `[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.`;

const ERROR_INVALIDATE_ORDER_INPUT = `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`;

const ERROR_INVALIDATE_ORDER_COUNT = `[ERROR] 메뉴는 한 번에 최대 20개까지 주문하실 수 있습니다.`;

const ERROR_INVALIDATE_ORDER_ONLYDRINK = `[ERROR] 음료만 주문하실 수 없습니다.`;

const ERROR_INVALIDATE_ORDER_TOO_MANY = `[ERROR] 메뉴는 한 번에 최대 ${MAX_ORDER}개까지 주문하실 수 있습니다.`;

export { 
    MAX_ORDER,
    DISCOUNT_VALUE,
    MENU_APPETIZER,
    MENU_MAIN,
    MENU_DESSERT,
    MENU_DRINK,
    INPUT_GET_DATE,
    INPUT_GET_MENU,
    OUTPUT_EVENT_INFORMATION,
    OUTPUT_MENU, 
    ERROR_INVALIDATE_DATE,
    ERROR_INVALIDATE_ORDER_INPUT,
    ERROR_INVALIDATE_ORDER_COUNT,
    ERROR_INVALIDATE_ORDER_ONLYDRINK,
    ERROR_INVALIDATE_ORDER_TOO_MANY
};