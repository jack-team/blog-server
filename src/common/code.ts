interface Result {
    code: number;
    message: string;
}

type Code = 5000 | 10001 | 10002 | 10003 |
    10004 | 10005 | 10006 | 10007 | 10008 |
    20001 | 20002 | 20003 | 20004 | 20005 |
    20006 | 20007;

interface Codes {
    [code: number]: Result;
}

const codes: Codes = {
    5000: {
        code: 5000,
        message: `系统错误，请稍后再试.`
    },
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
    },
    10008: {
        code: 10008,
        message: `用户名或密码错误.`
    },
    20001: {
        code: 20001,
        message: `文章分类标题不能为空.`
    },
    20002: {
        code: 20002,
        message: `文章分类描述不能为空.`
    },
    20003: {
        code: 20003,
        message: `该文章分类已存在.`
    },
    20004: {
        code: 20004,
        message: `文章分类Id不能为空.`
    },
    20005: {
        code: 20005,
        message: `文章标题不能为空.`
    },
    20006: {
        code: 20006,
        message: `文章内容不能为空.`
    },
    20007: {
        code: 20007,
        message: `文章描述不能为空.`
    }
};

export default (code: Code): Result => {
    return codes[code] as Result;
};
