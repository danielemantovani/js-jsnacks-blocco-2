

/**
 * Description: La funzione si occuperà di creare un nuovo array contente tutti gli elementi dell'array originale meno l'ultimo elemento
 * @param {array} array
 * @returns {array}
 */
function removeFromList (array){

    let newArray = [];

    for (let i = 0; i < array.length - 1; i++){

        newArray.push (array[i])

    }

    return newArray
}