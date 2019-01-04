//Cyber28/cybers-js-utils on GitHub

const { RichEmbed } = require('discord.js')

/**
 * Returns a random element of the array
 * @param {Array} array
 */
exports.randArray = (array) => {
    if(!array.isArray()) throw "Invalid input.";
    let selection = array[Math.floor(Math.random() * array.length)];
    return selection;
};


/**
 * Removes an element of the array
 * @param {Array} array - An array you want to remove something from
 * @param {*} element - The element you want to remove from the array
 */
exports.remove = (array, element) => {
    if(!Array.isArray(array)) throw "Invalid input.";
    
    const index = array.indexOf(element);
    
    if(index !== -1){
        array.splice(index, 1);
    } else throw "Element not found in array.";
    
    return array;
};


/**
 * Returns a random RGB color
 */
exports.randcolor = () => {
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
};


/**
 * Checks if a number is prime
 * @param {number} number
 */
exports.isPrime = (k) => {
    let prime = true;
    let index = 2;
    while(prime && index <= Math.sqrt(k)) {
        if(k % index == 0) {
            prime = false
        } else {
            index++;
        }
    };
    return prime
}

/**
 * Returns a random number between two values
 * @param {number} smallNumber - The minimum returned value
 * @param {number} bigNumber - The maximum returned value
 */
exports.randomBetween = (i, j) => {
    let s = Math.floor(Math.random() * j) + i;
    return s
}


/**
 * Turns a timestamp into a Date
 * @param {number} timestamp - The timestamp that will be converted
 */
function timestampToDate(timestamp) {
    if (timestamp === true) {
        return new Date();
    }
    if (typeof timestamp === 'number') {
        return new Date(timestamp);
    }
    return timestamp;
}


/**
 * Returns a Discord richembed
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {Array} fields - The fields (name and value)
 * @param {Object} options - Options (image; timestamp; footer; thumbnail; author)
 */
exports.embed = (title, description, fields = [], options = {}) => {
    let url = options.url || '';
    let color = options.color || "7289DA";

    if (options.inline) {
        if (fields.length % 3 === 2) {
            fields.push({ name: '\u200b', value: '\u200b' });
        }
        fields.forEach(obj => {
            obj.inline = true;
        });
    }

    return new RichEmbed({ fields, video: options.video || url })
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setURL(url)
        .setImage(options.image)
        .setTimestamp(options.timestamp ? timestampToDate(options.timestamp) : null)
        .setFooter(options.footer ? options.footer : 'Example utils script')
        .setAuthor(options.author === undefined ? '' : options.author)
        .setThumbnail(options.thumbnail);
};