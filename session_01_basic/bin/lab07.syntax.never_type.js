"use strict";
const show_error = (message) => {
    console.error('--- Start show_error');
    throw new Error(message);
    console.error('--- Start show_error');
};
const calculate = () => {
    try {
        console.log('-- Start calculation');
        show_error('Something is failed');
        console.log('-- End calculation');
    }
    catch (e) {
        console.error(e);
    }
};
calculate();
//# sourceMappingURL=lab07.syntax.never_type.js.map