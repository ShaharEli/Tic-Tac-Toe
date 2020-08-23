const faker = require('faker');
const puppeteer = require('puppeteer');


describe('App Text', () => {
    test('correct sign after click', async () => {
      let browser = await puppeteer.launch({
        headless: false
      });
      let page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector("[id='0']", {visible: true});
      const div0 = await page.$("[id='0']")
      await div0.click()
      const html = await page.$eval("[id='0']", e => e.innerText);
      expect(html).toBe('x');
      const div1 = await page.$("[id='1']")
      await div1.click()
      const html1 = await page.$eval("[id='1']", e => e.innerText);
      expect(html1).toBe('o');
  
      browser.close();
    }, 16000);
    test('correct sign after click', async () => {
        let browser = await puppeteer.launch({
          headless: false
        });
        let page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector("[id='0']", {visible: true});
        const div0 = await page.$("[id='0']")
        await div0.click()
        const div3 = await page.$("[id='3']")
        await div3.click()
        const div1 = await page.$("[id='1']")
        await div1.click()
        const div4 = await page.$("[id='4']")
        await div4.click()
        const div2 = await page.$("[id='2']")
        await div2.click()
        await page.waitForSelector("[id='post']", {visible: true});
        const winner = await page.$("[id='post']")
        await page.screenshot({
            path: "./screenshots.jpg",
            type: "jpeg",
            fullPage: true
          });

    
        browser.close();
      }, 16000);
  });