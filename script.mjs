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

let c = 0;
let i = 0;
let j = 0;
let k = 0;
// let row = 0;
for (c in test_str) {
    let cell1 = ``;
    let cell2 = ``;
    let cell3 = ``;
    let cell4 = ``;
    if (test_str[c] != `\n`) {
        for (c in test_str) {
            if (test_str[c] == `,`) {
                c++;
               break;
            }
            cell1 += test_str[c];
        }
        for (i =c; i < test_str.length; i++) {
            c++;
            if (test_str[i] == `,`) {
                break;
             }
            cell2 += test_str[i]
        }
        for (j =c; j < test_str.length; j++) {
            c++;
            if (test_str[j] == `,`) {
                break;
             }
            cell3 += test_str[j]
        }
        for (k =c; k < test_str.length; k++) {
            c++;
            if (test_str[k] == `,`) {
                break;
             }
            cell4 += test_str[k]
        }
        console.log(cell1, cell2, cell3, cell4);
    } else {
        
        continue;        
    }
}
// let test_str = `Index, Mass`;
// let cell1 = ``;
// let cell2 = ``
// let c = 0;
// let i = 0;
// for (c in test_str) {
//     if (test_str[c] == `,`) {
//        break;
//     }
//     cell1 += test_str[c];
// }
// for (i =c; i < test_str.length; i++) {
//     cell2 += test_str[i]
// }
// console.log(cell1, cell2)
