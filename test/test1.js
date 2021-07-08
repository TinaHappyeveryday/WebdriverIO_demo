const { expect } = require("chai");
describe("test1", () => {
  before(function() {
    browser.openURL("https://www.volvocars.com/intl/v/car-safety/a-million-more/");
    browser.pause('1000')
    browser.waitForVisible("/html/body/div[1]/div[2]/div[4]/div[2]/div/button")
    browser.click("/html/body/div[1]/div[2]/div[4]/div[2]/div/button")
  });

  it("enter 'Our Cars'", () => {
    browser.waitForVisible("/html/body/div[4]/div[2]/div/div[2]/nav/button") //wait our cars
    browser.click("/html/body/div[4]/div[2]/div/div[2]/nav/button") //click our cars
    browser.pause('2000') // wait 2 sec
    let val = browser.getText("/html/body/div[4]/div[1]/div/div/div[1]/div/div[1]/div/div/div/div[1]/div/button[1]/h2");

    expect(val).equal("Electric"); // 
  });

  it("exit 'Our Cars' ", () => {
    browser.waitForVisible("/html/body/div[4]/div[1]/div/div/div[1]/div/div[2]/button") //wait 'X'button
    browser.click("/html/body/div[4]/div[1]/div/div/div[1]/div/div[2]/button") //click 'X' button
    browser.pause('2000') // wait 2 sec
    let val = browser.getText("/html/body/div[5]/div/div/main/div[2]/section/div/div/div/button");

    expect(val).contains("WATCH THE STORY"); // 
  });


  // after(function(){  //这个作用域的所有测试用例运行完之后运行
  //   //
  // })
});
