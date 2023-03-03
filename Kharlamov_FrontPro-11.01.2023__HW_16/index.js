/* я вроде разобрался в Math.round(Math.random() * (max - min) + min) если округлять round то рандомное число
включает как max так и min. Если округлять ceil то не включает min но включает max. Если floor то включает min но не max.
 В нашей задаче рандомное число это индеек элемента строки characters.at(рандомное число), поэтому
 надо предусмотреть выдачу 0 при рандоме, но не должен генерировать число равное characters.length так как такого индекса нет,
 а последним индексом является characters.length - 1, так как счет индексов начинается с 0.
 И по этому мы используем округление floor при max = characters.length.
Так как диапазон  min max у нас по задаче уже имеет определённые значения которые зависят от размера строки characters,
я не стал использовать и определять min max переменные, что бы не увеличивать код.

 */

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let key = '';
    for (let i =0; i < length; i++) {
        key += characters.at(Math.floor(Math.random() * characters.length));
    }
    return key;
}

alert('Key : ' + generateKey(prompt(`Enter to length key`), characters))

