matrix = []

for (let i = 0; i < 3; i++){
    matrix.push([])
    for (let x = 0; x < 3; x++){
        matrix[i].push(`| String I:${i} X:${x} |`)
    }
}

// console.table(matrix)

function print_matrix (arr){
    let text = ""
    for (let i = 0; i < arr.length; i++){
        for (let x = 0; x < arr[i].length; x++){
            text += arr[i][x]
        }
        console.log(text);
        text=""
    }
}

print_matrix(matrix)