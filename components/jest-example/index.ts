export default {
    add: (num1: number, num2: number) => num1 + num2,
    isNull: () => null,
    isUndefined: () => undefined,
    isNaN: () => NaN,
    checkValue: (val: number) => val,
    createUser: () => {
        return {
            name: '小明'
        }
    }
}