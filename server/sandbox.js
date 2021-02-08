/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const MudJeansbrand = require('./sources/MudJeansbrand');
const AdresseParisbrand = require('./sources/AdresseParisbrand');

const pages = await dedicatedbrand.getPages('https://www.dedicatedbrand.com');

async function sandbox (eshop = 'https://www.dedicatedbrand.com/en/men/news') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await dedicatedbrand.scrape(eshop);

    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}


async function steelbox (ishop = 'https://adresse.paris/602-nouveautes') {
  try {
    console.log(`🕵️‍♀️  browsing ${ishop} source`);

    const products = await AdresseParisbrand.scrape(ishop);

    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function silverbox (yshop = 'https://mudjeans.eu/collections/men-buy-jeans') {
  try {
    console.log(`🕵️‍♀️  browsing ${yshop} source`);

    const products = await MudJeansbrand.scrape(yshop);

    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;
const [,, ishop] = process.argv;
const [,, yshop] = process.argv;

//sandbox(eshop);
//steelbox(ishop);
silverbox(yshop);
