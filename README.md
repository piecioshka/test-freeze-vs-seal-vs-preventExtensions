# test-freeze-vs-seal-vs-preventExtensions

> :ledger: Compare differences between `Object.freeze`, `Object.seal` and 
`Object.preventExtensions`

## `Object.freeze` vs `Object.seal` vs `Object.preventExtensions`

|   |CREATE|READ|UPDATE|DELETE|
|---|:---:|:---:|:---:|:---:|
|`Object.freeze`| ✗ | ✓ | ✗ | ✗ |
|`Object.seal`| ✗ | ✓ | ✓ | ✗ |
|`Object.preventExtensions`| ✗ | ✓ | ✓ | ✓ |

Full report of unit tests is available in file [REPORT.md](./REPORT.md).

## What I was tested?

* add new property, to:
    - primary object
    - returned object from tested function
* read existed property, from:
    - primary object
    - returned object from tested function
* modify existed property, from:
    - primary object
    - returned object from tested function
* remove existed property, from:
    - primary object
    - returned object from tested function

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
