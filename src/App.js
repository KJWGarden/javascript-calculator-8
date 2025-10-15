import { Console } from "@woowacourse/mission-utils";

let message = "";
class App {
  async run() {
    await this.userInput();
    let parseMessage = this.parseInput(message);
    const sum = parseMessage.reduce((a, b) => a + b, 0);
    console.log(`${sum}`);
  }

  async userInput() {
    message = await Console.readLineAsync(message);
  }

  parseInput(string) {
    const result = string.split(/[, :]/).map(Number);
    return result;
  }
}

export default App;
