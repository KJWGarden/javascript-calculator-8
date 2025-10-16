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
    string = string.replace("\\n", "\n"); // 문자열 안 \n 을 실제 줄바꿈으로 치환
    const customCheck = /^\/\/(.)\n/;
    if (customCheck.test(string)) {
      // 커스텀 구분자 일 때
      const match = string.match(customCheck);
      const customDivider = match[1]; // 커스텀 구분자 저장
      const numstr = string.split("\n")[1];

      return numstr.split(customDivider).map(Number);
    } else {
      return string.split(/[, :]/).map(Number);
    }
  }
}

export default App;
