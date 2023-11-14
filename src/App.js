import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printEventInformation();
    InputView.getDate();
  }
}

export default App;
