/*!
 * simple-storage.js - v@version@
 * 1k auto-casting localStorage helper
 * https://github.com/orca-scan/simple-storage
 * @author Orca Scan <orcascan.com>
 * @license MIT
 */
(function (window) {

    /*
    * Save references to long variable names, so minifier can reduce file size
    */
    var _storage = localStorage;

    /**
     * local storage helper (takes care of casting types)
     */
    var simpleStorage = {

        /**
         * Get an item from local storage
         * @param {string} key - variable name
         * @return {any} correctly cast value if it exists
         */
        get: function (key) {

            // always get value as a string
            var value = String(_storage.getItem(key));

            if (value === 'null') return null;

            if (value === 'undefined') return undefined;

            // if it's a float
            if (/^[0-9.]+$/.test(value)) return parseFloat(value);

            // if it's an integer
            if (/^[-0-9]+$/.test(value)) return parseInt(value, 10);

            // if it's a boolean
            if (value === 'true' || value === 'false') return (value === 'true');

            // if it's a JSON object
            if (value[0] === '{' || value[0] === '[') {
                try {
                    var parsed = JSON.parse(value);
                    if (typeof parsed === 'object' || Array.isArray(parsed)) {
                        return parsed;
                    }
                }
                catch (e) {
                    // Not a JSON object or array
                }
            }

            return value;
        },

        /**
         * Save an item to local storage
         * @param {string} key - variable name
         * @param {any} value - value of variable to save
         * @return {void}
         */
        set: function (key, value) {

            if (typeof key !== 'string') {
                throw new TypeError('localStorage: Key must be a string');
            }

            // auto stringify objects or arrays
            if (typeof value === 'object' || Array.isArray(value)) {
                value = JSON.stringify(value);
            }

            _storage.setItem(key, value);
        },

        /**
         * Check if item exists in local storage
         * @param {string} key - variable name
         * @return {boolean} true if key exists, otherwise false
         */
        exists: function (key) {
            return Object.prototype.hasOwnProperty.call(_storage, key);
        },

        /**
         * Remove an item from local storage
         * @param {string} key - variable name
         * @return {void}
         */
        remove: function (key) {
            _storage.removeItem(key);
        },

        /**
         * Clear all local storage values
         * @return {void}
         */
        clear: function () {
            _storage.clear();
        }
    };

    // export
    if (module && module.exports) {
        module.exports = simpleStorage;
    }
    else {
        window.simpleStorage = simpleStorage;
    }

})(this);
