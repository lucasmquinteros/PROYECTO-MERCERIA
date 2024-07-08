import puppeteer from 'puppeteer'

async function openNavegator() {
    const browser = await puppeteer.launch({
        headless: 'false',
        slowMo: 200
    }) //Abrimos el navegador
}
    const page = await browser.newPage() // Abrimos chronium
    
    await page.goto('https://www.scrapethissite.com/pages/simple/') // Aca Damos el link al que va a ingresar


async function getInfoFromWeb() {
    const result = await page.evaluate(() => {
       const quotes = document.querySelectorAll('.row') // Aca saco el elemnto html que necesito (innerText para texto y innerHTML para las caracteristicas)
       const data = [...quotes ].map((quotes) => {
        const country = quotes.querySelectorAll(".country-name").innerText;
        const countryInfo = quotes.querySelectorAll(".country-info"); 
        const countryCapital = [...countryInfo].map((countryInfo) => {
            countryInfo.querySelectorAll('.country-capital').innerText
        });
       });
    })
    return data;
}
    console.log(result)
