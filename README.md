# test-freeze-vs-seal-vs-preventExtensions

:ledger: Comparing differences between `Object.freeze`, `Object.seal` and 
`Object.preventExtensions`

## `Object.freeze` vs `Object.seal` vs `Object.preventExtensions`

|   |CREATE|READ|UPDATE|DELETE|
|---|:---:|:---:|:---:|:---:|
|`Object.freeze`| ✗ | ✓ | ✗ | ✗ |
|`Object.seal`| ✗ | ✓ | ✓ | ✗ |
|`Object.preventExtensions`| ✗ | ✓ | ✓ | ✓ |

Full report of unit tests is available in file [REPORT.md](./REPORT.md).

## What I tested?

* add new property, to:
    - primary object
    - an object returned from the tested function
* read existing property, from:
    - primary object
    - an object returned from the tested function
* modify existed property, from:
    - primary object
    - an object returned from the tested function
* remove existed property, from:
    - primary object
    - an object returned from the tested function

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
