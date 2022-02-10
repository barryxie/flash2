

function starOutGrid(grid) {
    let yIndex = []
    let xIndex = []
    for(let y=0; y<= grid.length-1; y++){
        for (let x=0; x <= grid[y].length -1; x++){
            if (grid[y][x] === "*"){
                yIndex.push(y)
                xIndex.push(x)
           }
        }
    }

    for(let y=0; y<= grid.length-1; y++){
        for(let idx of xIndex){
            grid[y][idx] = "*"
            
        }
        
    }
    for(let idx of yIndex){
        for (let x=0; x <= grid[idx].length -1; x++){
            grid[idx][x] = "*"
        }
        
    }
    return grid
}



