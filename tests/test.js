describe('Home Page', function() {
  
  describe('Page title', function () {
    it('should be set to simple @watch', function () {
      browser.url('http://localhost:3000');
      expect(browser.getTitle()).to.equal('simple');
    });
  });
  describe('Counter Button', function () {
    it('should be set to 0 @watch', function () {
      var text = browser.getText('p')
      expect(text).to.equal("You've pressed the button 12 times.");
      
    });
    it('should increment count on click @watch', function () {
      browser.click('button');
      var text = browser.getText('p')
      expect(text).to.equal("You've pressed the button 1 times.");
    });
  });
  
  
  
  
});