import fn from './';

describe('Test index.ts', () => {
    test('測試 fn 相加是否正確', () => {
        expect(fn.add(5, 5)).toBe(10);
    });

    // toBeNull：測試回傳值是否為 null
    test('測試 fn 是否為 Null', () => {
        expect(fn.isNull()).toBeNull();
    });

    // toBeUndefined：測試回傳值是否為 undefined
    test('測試 fn 是否為 Undefined', () => {
        expect(fn.isUndefined()).toBeUndefined();
    });

    test('測試 fn 是否為 是否為 NaN', () => {
        expect(fn.isNaN()).toBeNaN();
    })

    test('測試 fn 是否為 是否為假值', () => {
        expect(fn.checkValue(0)).toBeFalsy();
    });

    test('測試 fn 是否為 是否為真值', () => {
        expect(fn.checkValue(1)).toBeTruthy();
    });

    test('測試 fn 是否為 是否為假值', () => {
        expect(fn.checkValue(0)).toBeFalsy();
    });

    test('測試 fn 是否為 是否為真值', () => {
        expect(fn.checkValue(1)).toBeTruthy();
    });
})

describe('Testcase from https://www.casper.tw/development/2020/02/02/jest-intro/', () => {

    test('測試 fn 是否為 小明', () => {
        expect({
            name: '小明'
        }).toBe({
            name: '小明'
        });
    });

    test('測試 fn 是否為 小明', () => {
        expect({
            name: '小明'
        }).toEqual({
            name: '小明'
        });
    });

    test('測試數值 是否小於 2000', () => {
        const num1 = 1000;
        const num2 = 900;
        expect(num1 + num2).toBeLessThan(2000);
    });

    // test('測試數值 是否小於 2000', () => {
    //     const num1 = 1000;
    //     const num2 = 1000;
    //     expect(num1 + num2).toBeLessThan(2000);
    // });

    test('測試數值 是否小於或等於 2000', () => {
        const num1 = 1000;
        const num2 = 1000;
        expect(num1 + num2).toBeLessThanOrEqual(2000);
    });

    test('測試 email 格式是否正確', () => {
        expect('gres@gmail.com').toMatch(
            /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        );
    });

    // test('測試 email 格式是否正確 2', () => {
    //     expect('gres@gmail').toMatch(
    //         /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    //     );
    // });

    test('陣列是否包含 Casper', () => {
        const newArray = ['Bob', 'Someone', 'Casper'];
        expect(newArray).toContain('Casper');
    });
});