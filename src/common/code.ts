interface Result {
    code: number;
    message: string;
}

type Code =
    10001 |
    10002 |
    10003 |
    10004 |
    10005 |
    10006 |
    10007;

interface Codes {
    [code: number]: Result;
}

const codes: Codes = {
    10001: {
        code: 10001,
        message: `用户名不能为空.`
    },
    10002: {
        code: 10002,
        message: `密码不能为空.`
    },
    10003: {
        code: 10003,
        message: `用户名须大于6小于30个字符.`
    },
    10004: {
        code: 10004,
        message: `密码须大于6小于30个字符.`
    },
    10005: {
        code: 10005,
        message: `手机号不能为空`
    },
    10006: {
        code: 10006,
        message: `手机号不正确`
    },
    10007: {
        code: 10007,
        message: `用户名已存在.`
    }
};

export default (code: Code): Result => {
    return codes[code] as Result;
};
