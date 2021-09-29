import  getWeather  from '../../server/index.js'


  describe('Testing the getWeather functionality', () => {
    test('Testing the getWeather() function', () => {
        expect(getWeather).toBeDefined();
        expect(typeof getWeather).toBe("function");
    });
})
