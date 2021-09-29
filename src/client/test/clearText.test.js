import { clearText} from "../js/clearText";


describe('Testing the clearText functionality', () => {
    test('Testing the clearText() function', () => {
        expect(clearText).toBeDefined();
        expect(typeof clearText).toBe("function");
    });
})