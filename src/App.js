import { Console } from "@woowacourse/mission-utils";

let message = "";

class App {
  async run() {
    await this.userInput();
    await Console.print(message);
  }

  async userInput() {
    message = await Console.readLineAsync(message);
  }
}

export default App;
