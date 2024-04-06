/**
 * Description: La funzione dovrà trasformare l'array in una stringa, gli elementi della stringa dovranno essere divisi da una virgola
 * @param {array} array
 * @returns {string}
 */
function stamp (array){

    let stringElem = "";

    for (let i = 0; i < array.length; i++){
        
        stringElem += array [i] 

        if (i != array.length -1) {
            stringElem += ",";
        }
    }
    return stringElem
}