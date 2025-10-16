import { Console } from "@woowacourse/mission-utils";

let message = "";
class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    await this.userInput();
    let parseMessage = this.parseInput(message);
    this.validate(parseMessage);
    const sum = parseMessage.reduce((a, b) => a + b, 0);
    Console.print(`결과 : ${sum}`);
  }

  async userInput() {
    message = await Console.readLineAsync(message);
  }

  parseInput(string) {
    string = string.replace("\\n", "\n"); // 문자열 안 \n 을 실제 줄바꿈으로 치환
    const customCheck = /^\/\/(.)\n/;

    // 커스텀 구분자 예외처리
    if (string.startsWith("//") && !customCheck.test(string)) {
      throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다.");
    }

    // 빈 문자열 입력 시 0 반환 처리
    if (!string || string.trim() === "") {
      return [0];
    }

    // 커스텀 구분자 일 때
    if (customCheck.test(string)) {
      const match = string.match(customCheck);
      const customDivider = match[1]; // 커스텀 구분자 저장
      const numstr = string.split("\n")[1];
      return numstr.split(customDivider).map(Number);
    } else {
      return string.split(/[, :]/).map(Number);
    }
  }

  // 예외 처리 함수
  validate(string) {
    // 숫자가 아닌 값 입력 시 에러
    if (string.some((num) => isNaN(num))) {
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }

    // 음수 입력 시 에러
    if (string.some((num) => num < 0)) {
      throw new Error("[ERROR] 음수는 사용할 수 없습니다.");
    }
  }
}

export default App;
