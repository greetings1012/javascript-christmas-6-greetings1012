import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Calculation from "./Calculation.js";

class App {
  async run() {
    OutputView.printEventInformation();
    const date = await InputView.getDate();
    OutputView.printMenu();
    const orderMenu = await InputView.getMenu();
    const totalPrice = Calculation.calculateTotalOrderPrice(orderMenu);
    const discountArray = Calculation.calculateEvents(date, totalPrice, orderMenu);
    OutputView.printOrder(date, orderMenu);
    OutputView.printEvent(totalPrice, discountArray);
    OutputView.printClosingRemarks(date);
  }
}

export default App;
