import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printEventInformation();
    await InputView.getDate();
    OutputView.printMenu();
  }
}

export default App;
