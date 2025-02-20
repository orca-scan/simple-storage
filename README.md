# simple-storage

[![Tests](https://github.com/orca-scan/simple-storage/actions/workflows/ci.yml/badge.svg)](https://github.com/orca-scan/simple-storage/actions/workflows/ci.yml)

**simpleStorage** is a lightweight JavaScript library designed to enhance the usability and functionality of the browser's `localStorage`. It simplifies the process of storing, retrieving, and managing data by automatically handling data type casting. This means you can store and retrieve various data types, including objects, arrays, booleans, and numbers, without worrying about manual serialization or deserialization.

### Key features
* **Auto-casting** automatically casts data types when saving and retrieving from localStorage
* **Simplified API** provides an easy-to-use API to interact with localStorage
* **No dependencies** implemented in vanilla JavaScript
* **Lightweight** less than 1k of pure JS

### Why simple-storage?

Working directly with localStorage often requires repetitive type checking and conversion, which can lead to cluttered code and increased potential for errors. simple-storage abstracts these complexities, allowing developers to focus on the logic and functionality of their applications, not on the nuances of data storage.

## Usage

Add [simple-storage.min.js](dist/simple-storage.min.js) to your project:

```html
<script src="simple-storage.min.js"></script>
```

And use it in your web app:

```js
// save an item (no need to JSON.stringify)
simpleStorage.set('userSettings', {
  theme: 'dark',
  notifications: true
});

// get an item (no need to JSON.parse)
var userSettings = simpleStorage.get('userSettings');

// check if item exists
if (simpleStorage.exists('userSettings')) {
  console.log('User settings available!');
}

// remove an item
simpleStorage.remove('userSettings');

// clear local storage
simpleStorage.clear();
```

See [unit tests](/tests/simple-storage-casting-spec.js) for more examples.

### Methods

Method            | Description
:-----------------|:----------------------------------------------------------------------------
`set(key, value)` | Saves an item to localStorage, automatically stringifying objects and arrays
`get(key)`        | Retrieves an item from localStorage, auto-casting to its original data type
`exists(key)`     | Checks if a given key exists in localStorage
`remove(key)`     | Removes an item from localStorage
`clear()`         | Clears all entries in localStorage

## Contributing

Pull requests are welcomed:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

### Update .min files

To generate a new [simple-storage.min.js](dist/simple-storage.min.js) from source, tweak the version number in `package.json` and run:

```bash
npm run build
```

## Star the repo

If you find this useful ⭐ the repo, it helps me prioritise which bugs to work on.

## History

For change-log, check [releases](https://github.com/orca-scan/simple-storage/releases).

## Star the repo

Find this useful? Star the repo - it help us priorities open source tasks 🌟

## License

[MIT License](LICENSE) © Orca Scan - a [barcode app](https://orcascan.com) with simple [barcode tracking APIs](https://orcascan.com/guides?tag=for-developers).