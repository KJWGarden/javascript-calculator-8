import { Console } from "@woowacourse/mission-utils";

let message = "";
class App {
  async run() {
    await this.userInput();
    await Console.print(message);
    let parseMessage = this.parseInput(message);
    Console.print(parseMessage);
  }

  async userInput() {
    message = await Console.readLineAsync(message);
  }

  parseInput(string) {
    const result = string.split(/[, :]/);
    return result;
  }
}

export default App;
