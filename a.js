let limit = prompt("Enter the testcases")
for (let i = 1; i <= limit; i++) {
    let string = prompt("Enter the number").split("")
    let a = [Number(string[0]), Number(string[1])];
    let b = [Number(string[2]), Number(string[3])];
    let c = [Number(string[4]), Number(string[5])];
    if (a[0] == b[0] && a[1] == b[1] || a[0] == b[1] && a[1] == b[0]) {
        console.log("1");
    } else if (a[0] == c[0] && a[1] == c[1] || a[0] == c[1] && a[1] == c[0]) {
        console.log("2");
    } else {
        console.log("0");
    }
}