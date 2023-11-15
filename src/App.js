import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printEventInformation();
    const date = await InputView.getDate();
    OutputView.printMenu();
    const oredrMenu = await InputView.getMenu();
    
  }
}

export default App;
