import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    return logSpy;
};

const getOutput = (logSpy) => {
    return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
    expectedLogs.forEach((log) => {
        expect(received).toContain(log);
    });
};

describe("입력 테스트", () => {
    test("날짜가 숫자가 아닐 경우", async () => {
         // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["a", " ","숫자 아님", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });
    test("날짜가 1 ~ 31을 벗어날 경우", async () => {
        // given
        const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
        const INPUTS_TO_END = ["1", "해산물파스타-2"];
        const logSpy = getLogSpy();
        mockQuestions(["-1", "32", "1000", ...INPUTS_TO_END]);

        // when
        const app = new App();
        await app.run();

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });

    test("음식이 메뉴판에 없을 경우", async () => {
        // given
        const INVALID_DATE_MESSAGE = `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        const INPUTS_TO_END = ["1", "집밥-1", "해산물파스타-2"];
        const logSpy = getLogSpy();
        mockQuestions(INPUTS_TO_END);

        // when
        const app = new App();
        await app.run();

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });

    test("음식의 형식이 보기와 다를 경우", async () => {
        // given
        const INVALID_DATE_MESSAGE = `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        const INPUTS_TO_END = ["1", "해산물파스타-해산물파스타", "해산물파스타-1"];
        const logSpy = getLogSpy();
        mockQuestions(INPUTS_TO_END);

        // when
        const app = new App();
        await app.run();

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });
    test("중복 메뉴를 입력할 경우", async () => {
        // given
        const INVALID_DATE_MESSAGE = `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        const INPUTS_TO_END = ["1", "해산물파스타-1,해산물파스타-2", "해산물파스타-1"];
        const logSpy = getLogSpy();
        mockQuestions(INPUTS_TO_END);

        // when
        const app = new App();
        await app.run();

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });
});