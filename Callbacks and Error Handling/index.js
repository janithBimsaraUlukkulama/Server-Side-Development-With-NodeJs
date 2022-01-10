const rec = require('./rectangle');

const solveRect = (l, b) => {
    rec(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message);

        } else {
            console.log("The area of the rectangle is: ", rectangle.area());
            console.log("The perimeter of the rectangle is: ", rectangle.perimeter());
        }
    });
    console.log("After call rec.");
}

solveRect(10, 10);
solveRect(1, 10);
solveRect(9, 9);
solveRect(8, 1);
solveRect(3, 1);
solveRect(2, -4);