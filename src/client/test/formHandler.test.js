import { handleSubmit } from "../js/formHandler";


describe('Testing the handleSubmit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        expect(typeof handleSubmit).toBe("function");
        expect(handleSubmit).toBeDefined();
    });
});