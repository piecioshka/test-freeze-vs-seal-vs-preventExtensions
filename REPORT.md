# Report of unit tests

```markdown
Spec started

  1 freeze (strict mode: enabled)

    1.1 [C] add new property
      ✗ primary object (0.005 sec)
        - Expected function not to throw, but it threw TypeError: Can't add property test, object is not extensible.
        - Expected undefined to equal 1.
      ✗ returned object (0 sec)
        - Expected function not to throw, but it threw TypeError: Can't add property test, object is not extensible.
        - Expected undefined to equal 1.

    1.2 [R] read existed property
      ✓ primary object (0.001 sec)
      ✓ returned object (0 sec)

    1.3 [U] modify existed property
      ✗ primary object (0 sec)
        - Expected function not to throw, but it threw TypeError: Cannot assign to read only property 'test' of object '#<Object>'.
        - Expected 2 to equal 3.
      ✗ returned object (0 sec)
        - Expected function not to throw, but it threw TypeError: Cannot assign to read only property 'test' of object '#<Object>'.
        - Expected 2 to equal 3.

    1.4 [D] remove existed property
      ✗ primary object (0 sec)
        - Expected function not to throw, but it threw TypeError: Cannot delete property 'test' of #<Object>.
        - Expected 2 to equal undefined.
      ✗ returned object (0.001 sec)
        - Expected function not to throw, but it threw TypeError: Cannot delete property 'test' of #<Object>.
        - Expected 2 to equal undefined.

  2 seal (strict mode: enabled)

    2.1 [C] add new property
      ✗ primary object (0 sec)
        - Expected function not to throw, but it threw TypeError: Can't add property test, object is not extensible.
        - Expected undefined to equal 1.
      ✗ returned object (0 sec)
        - Expected function not to throw, but it threw TypeError: Can't add property test, object is not extensible.
        - Expected undefined to equal 1.

    2.2 [R] read existed property
      ✓ primary object (0 sec)
      ✓ returned object (0 sec)

    2.3 [U] modify existed property
      ✓ primary object (0.001 sec)
      ✓ returned object (0.001 sec)

    2.4 [D] remove existed property
      ✗ primary object (0 sec)
        - Expected function not to throw, but it threw TypeError: Cannot delete property 'test' of #<Object>.
        - Expected 2 to equal undefined.
      ✗ returned object (0.001 sec)
        - Expected function not to throw, but it threw TypeError: Cannot delete property 'test' of #<Object>.
        - Expected 2 to equal undefined.

  3 preventExtensions (strict mode: enabled)

    3.1 [C] add new property
      ✗ primary object (0 sec)
        - Expected function not to throw, but it threw TypeError: Can't add property test, object is not extensible.
        - Expected undefined to equal 1.
      ✗ returned object (0 sec)
        - Expected function not to throw, but it threw TypeError: Can't add property test, object is not extensible.
        - Expected undefined to equal 1.

    3.2 [R] read existed property
      ✓ primary object (0 sec)
      ✓ returned object (0 sec)

    3.3 [U] modify existed property
      ✓ primary object (0 sec)
      ✓ returned object (0.001 sec)

    3.4 [D] remove existed property
      ✓ primary object (0 sec)
      ✓ returned object (0 sec)

Executed 24 of 24 specs (12 FAILED) in 0.037 sec.
npm ERR! Test failed.  See above for more details.
```
