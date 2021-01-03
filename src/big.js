import cons from './con';
import sum from './sum';

const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(sum(1, 3));
        console.log(cons);
    })
})

export default b;
