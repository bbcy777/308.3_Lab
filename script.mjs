// //Part 1
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log(`Fizz`)
//     } else if (i % 5 == 0) {
//         console.log(`Buzz`)
//     }
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`Fizz Buzz`)
//     } else if (i % 3 != 0 && i % 5 != 0) {
//         console.log(i)
//     }
// }

// //Part 2: Prime Time
// let n = 5;
// while(true) {
//     n++;
//     if (n % 2 != 0 && n % 3 != 0) {
//         console.log(n);
//         break;
//     }
// }

//Part 3: Feeling Loopy
let test_str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let count = 0;
let i = 0;
while(count < test_str.length) {
    let cell1 = ``;
    let cell2 = ``;
    let cell3 = ``;
    let cell4 = ``; 
    for (i = count; i < test_str.length; i++) {
        count++;
        if (test_str[i] == `,`) {                
        break;
        }
        cell1 += test_str[i];
    }
    for (i =count; i < test_str.length; i++) {
        count++;
        if (test_str[i] == `,`) {
            break;
        }
        cell2 += test_str[i];
    }
    for (i =count; i < test_str.length; i++) {
        count++;
        if (test_str[i] == `,`) {
            break;
        }
        cell3 += test_str[i]
    }
    for (i =count; i < test_str.length; i++) {
        count++;
        if (test_str[i] == `\n`) {
            break;
        }
        cell4 += test_str[i]
    }
    console.log(cell1, cell2, cell3, cell4);
}

