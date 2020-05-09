// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var grid = document.getElementById("pixelCanvas");

//function to paint the specific square. 
function paint(){
    var colour = document.getElementById("colorPicker").value;
    this.style.backgroundColor = colour;
}

//function to make the grid according given size
function makeGrid(row,col) {
    reset();
    for (var r=0; r<row; r++){
        var tr = document.createElement("tr");
        for (var c=0; c<col; c++){
           var td = document.createElement("td");
           td.addEventListener("click",paint);
           tr.appendChild(td);
        }
        grid.appendChild(tr);
    }
    
}

//fucntion to reset the grid if already exist
function reset(){
    var gridReset = document.getElementById("pixelCanvas");
    while(gridReset.firstChild){
        gridReset.removeChild(gridReset.firstChild);
    }    
}

//function to validate inputed data (even it wasn't needed)
function valid(){
    var row = document.getElementById("inputHeight").value;
    var col = document.getElementById("inputWidth").value;
    if(isNaN(row) && isNaN(col)){
        alert("Please input valid Numbers");
    }
    else{
        makeGrid(row,col);
    }
}