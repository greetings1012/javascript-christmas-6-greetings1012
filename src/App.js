import { InputView, OutputView } from "./View/index.js";

class App {
  async run() {
    OutputView.printEventInformation();
    InputView.getDate();
  }
}

export default App;
