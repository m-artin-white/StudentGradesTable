let numOfAssign = 5;
let grade = document.getElementById("grade");
let table = document.getElementById("MainTable");
function getAverage(){

    var table = document.getElementById("MainTable");
    let average = 0;

    for(var r = 1, n = table.rows.length; r < n; r++)
    {
        for(var c = 2, m = table.rows[r].cells.length-1; c < m; c++)
        {

            if(table.rows[r].cells[c].innerHTML === "" || isNaN(table.rows[r].cells[c].innerHTML) || parseInt(table.rows[r].cells[c].innerHTML)<0 || parseInt(table.rows[r].cells[c].innerHTML)>100)
            {
                average += 0;
                table.rows[r].cells[c].style.backgroundColor = "yellow";
                table.rows[r].cells[c].innerHTML = "-";
                numOfAssign--;
            }

            else{
                if(r%2!=0){
                    table.rows[r].cells[c].style.backgroundColor="white";
                }
                else{
                    table.rows[r].cells[c].style.backgroundColor="#808080"
                }
                average += parseInt(table.rows[r].cells[c].innerHTML);
            }
        }

        average /= numOfAssign;
        
        average = Math.round(average);

        if(grade.innerHTML=="Percent Grade (%)"){

            table.rows[r].cells[c].innerHTML= average;
        }

        else if(grade.innerHTML=="Letter Grade")
        {
            
            if(average>=93)
            {
                table.rows[r].cells[c].innerHTML="A";
            }

            if(average>=90 && average<=92)
            {
                table.rows[r].cells[c].innerHTML="A-";
            }

            if(average<=89 && average>=87)
            {
                table.rows[r].cells[c].innerHTML="B+";
            }

            if(average>=83 && average<=86)
            {
                table.rows[r].cells[c].innerHTML="B";
            }

            if(average>=80 && average<= 82)
            {
                table.rows[r].cells[c].innerHTML="B-";
            }

            if(average>=77 && average<=79)
            {
                table.rows[r].cells[c].innerHTML="C+";
            }

            if(average>=73 && average<=76)
            {
                table.rows[r].cells[c].innerHTML="C";
            }

            if(average>=70 && average<=72)
            {
                table.rows[r].cells[c].innerHTML="C-";
            }

            if(average>=67 && average <= 69)
            {
                table.rows[r].cells[c].innerHTML="D+";
            }

            if(average>=63 && average<=66)
            {
                table.rows[r].cells[c].innerHTML="D";
            }

            if(average>=60 && average<=62)
            {
                table.rows[r].cells[c].innerHTML="D-";
            }

            if(average<60)
            {
                table.rows[r].cells[c].innerHTML="F";
            }
                
            
        }

        else if(grade.innerHTML=="4.0 Scale")
        {
        
            if(average>=93)
            {
                table.rows[r].cells[c].innerHTML="4.0";
            }

            if(average>=90 && average<=92)
            {
                table.rows[r].cells[c].innerHTML="3.7";
            }

            if(average<=89 && average>=87)
            {
                table.rows[r].cells[c].innerHTML="3.3";
            }

            if(average>=83 && average<=86)
            {
                table.rows[r].cells[c].innerHTML="3.0";
            }

            if(average>=80 && average<= 82)
            {
                table.rows[r].cells[c].innerHTML="2.7";
            }

            if(average>=77 && average<=79)
            {
                table.rows[r].cells[c].innerHTML="2.3";
            }

            if(average>=73 && average<=76)
            {
                table.rows[r].cells[c].innerHTML="2.0";
            }

            if(average>=70 && average<=72)
            {
                table.rows[r].cells[c].innerHTML="1.7";
            }

            if(average>=67 && average<= 69)
            {
                table.rows[r].cells[c].innerHTML="1.3";
            }

            if(average>=63 && average <=66)
            {
                table.rows[r].cells[c].innerHTML="1.0";
            }

            if(average>=60 && average<=62)
            {
                table.rows[r].cells[c].innerHTML="0.7";
            }

            if(average<60)
            {
                table.rows[r].cells[c].innerHTML="0.0";
            }
        }
        

        if(average < 60)
        {
            table.rows[r].cells[c].style.backgroundColor="red";
            table.rows[r].cells[c].style.color="white";
        }

        else if(average>=60 && r%2==0){
            table.rows[r].cells[c].style.backgroundColor="#808080";
        }

        else{
            table.rows[r].cells[c].style.backgroundColor="white";
        }

        average = 0;
        numOfAssign = 5;
    }
}


document.getElementById("MainTable").addEventListener("click",getAverage);

function numberUnsub(){
    let table = document.getElementById("MainTable");
    let unsub=0;
    for(var r = 1, n = table.rows.length; r < n; r++)
    {
        for(var c = 2, m = table.rows[r].cells.length-1; c < m; c++)
        {
            if(table.rows[r].cells[c].innerHTML === "-")
            {
                unsub++;
            }
        }
    }

    document.getElementById("unsubmitted").innerHTML="Number of unsubmitted assignments: "+unsub;
}

document.getElementById("MainTable").addEventListener("click",numberUnsub);

var check = 1;

table.addEventListener('click', (event) => {
    var clickedCell = event.target;
    var clickedRow = clickedCell.parentElement;
    var lastCellIndex = clickedRow.cells.length - 1;
    
    if (clickedCell.cellIndex === lastCellIndex) {
      if(check == 0)
      {
        grade.innerHTML="Percent Grade (%)";
        check++;
      }

      else if(check == 1)
      {
        grade.innerHTML="Letter Grade";
        check++;
      }

      else
      {
        grade.innerHTML="4.0 Scale";
        check = 0;
      }
    }

    getAverage();
  });

  let colCheck=1;
  function addCol()
  {
    for (let i = 0; i < table.rows.length; i++) {
        


        const newCell = table.rows[i].insertCell(7);
        newCell.contentEditable="true";
        

        if(i>0){
        newCell.textContent = "-";
        newCell.style.textAlign="right";
            if(colCheck%2!=0)
            {
                newCell.style.backgroundColor="white";
            }
            else{
                newCell.style.backgroundColor="#808080";
            }
            colCheck++;
        }
        else{
        newCell.textContent="Assignment X"
        newCell.style.backgroundColor="#585858"
        newCell.style.color="#ffffff";
        newCell.style.padding="12px 15px"
        newCell.style.fontFamily="Poppins, san-serif"
        newCell.style.textAlign="center";   
        newCell.style.fontWeight="bold";  
      }

  }

  
}

let rowCheck =1;
function addRow(){
    let newRow = table.insertRow(-1);

    let colNum = table.rows[0].cells.length;

    // Insert cells in the new row
    for (let i = 0; i < colNum; i++) {
    let newCell = newRow.insertCell(i);
        if(i==0)
        {
            newCell.innerHTML = "Name";
            newCell.style.textAlign="left";
            newCell.contentEditable="true";

            if(rowCheck%2!=0)
            {
                newCell.style.backgroundColor="white";
            }

            else{
                newCell.style.backgroundColor="#808080";
            }
        }

        if(i==1)
        {
            newCell.innerHTML = "ID";
            newCell.style.textAlign="left";
            newCell.contentEditable="true";

            if(rowCheck%2!=0)
            {
                newCell.style.backgroundColor="white";
            }

            else{
                newCell.style.backgroundColor="#808080";
            }
        }

        if(i>1)
        {
            newCell.innerHTML = "-";
            newCell.style.textAlign="right";
            newCell.contentEditable="true";
            if(rowCheck%2!=0)
            {
                newCell.style.backgroundColor="white";
            }

            else{
                newCell.style.backgroundColor="#808080";
            }
        }

    }

    rowCheck++;

}

var currentState = null;
var previousState = null;

function saveButton() {
  currentState = document.getElementById("MainTable").innerHTML;
  previousState = currentState;
}

function restoreButton() {
  if (previousState != null) 
    document.getElementById("MainTable").innerHTML = previousState;
}

  

