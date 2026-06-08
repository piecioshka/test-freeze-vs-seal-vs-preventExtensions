'use strict';

['freeze', 'seal', 'preventExtensions'].forEach((name) => {
    let method = Object[name];

    describe(`${name} (strict mode: enabled)`, () => {
        describe('[C] add new property', () => {
            it('primary object', () => {
                let emptyObject = {};
                method(emptyObject);

                expect(() => {
                    emptyObject.test = 1;
                }).not.toThrow();
                expect(emptyObject.test).toEqual(1);
            });

            it('returned object', () => {
                let emptyObject = {};
                let emptyWrappedObject = method(emptyObject);

                expect(() => {
                    emptyWrappedObject.test = 1;
                }).not.toThrow();
                expect(emptyWrappedObject.test).toEqual(1);
            });
        });

        describe('[R] read existing property', () => {
            it('primary object', () => {
                let emptyObject = {
                    test: 2
                };
                method(emptyObject);
                expect(emptyObject.test).toEqual(2);
            });

            it('returned object', () => {
                let emptyObject = {
                    test: 2
                };
                let emptyWrappedObject = method(emptyObject);
                expect(emptyWrappedObject.test).toEqual(2);
            });
        });

        describe('[U] modify existed property', () => {
            it('primary object', () => {
                let emptyObject = {
                    test: 2
                };
                method(emptyObject);

                expect(() => {
                    emptyObject.test = 3;
                }).not.toThrow();
                expect(emptyObject.test).toEqual(3);
            });

            it('returned object', () => {
                let emptyObject = {
                    test: 2
                };
                let emptyWrappedObject = method(emptyObject);

                expect(() => {
                    emptyWrappedObject.test = 3;
                }).not.toThrow();
                expect(emptyWrappedObject.test).toEqual(3);
            });
        });

        if (name === 'seal') {
            describe('[U] redefine property descriptor', () => {
                it('allows changing only value via Object.defineProperty', () => {
                    let emptyObject = {
                        test: 2
                    };
                    method(emptyObject);

                    expect(() => {
                        Object.defineProperty(emptyObject, 'test', {
                            value: 3
                        });
                    }).not.toThrow();
                    expect(emptyObject.test).toEqual(3);
                });

                it('throws when redefining with configurable: true', () => {
                    let emptyObject = {};
                    let descriptor = {
                        value: 2,
                        writable: true,
                        configurable: true
                    };
                    Object.defineProperty(emptyObject, 'test', descriptor);
                    method(emptyObject);
                    descriptor.value = 3;

                    expect(() => {
                        Object.defineProperty(emptyObject, 'test', descriptor);
                    }).toThrowError(TypeError);
                });
            });
        }

        describe('[D] remove existed property', () => {
            it('primary object', () => {
                let emptyObject = {
                    test: 2
                };
                method(emptyObject);

                expect(() => {
                    delete emptyObject.test;
                }).not.toThrow();
                expect(emptyObject.test).toEqual(undefined);
            });

            it('returned object', () => {
                let emptyObject = {
                    test: 2
                };
                let emptyWrappedObject = method(emptyObject);

                expect(() => {
                    delete emptyWrappedObject.test;
                }).not.toThrow();
                expect(emptyWrappedObject.test).toEqual(undefined);
            });
        });
    });
});
