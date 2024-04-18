let boxes = document.querySelectorAll(".box")
let turn = "X";
let lose = false;

boxes.forEach(e=> {

    e.innerHTML = ""
    e.addEventListener('click', ()=>{
        if(!lose && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeturn()
        }
    })
    
})

function cheakWin(){

    let condition =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]

    ]

    for(let i = 0; i<condition.length; i++){
        let v0 = boxes[condition[i][0]].innerHTML;
        let v1 = boxes[condition[i][1]].innerHTML;
        let v2 = boxes[condition[i][2]].innerHTML;

        if(v0  != "" && v0 === v1 && v0 === v2){
            lose = true
            document.getElementById("win").innerHTML = turn + " "+ 'win'
            document.getElementById("result").style.display = 'inline'
            for(j=0; j<3; j++){
                boxes[condition[i][j]].style.backgroundColor = "yellow"
            }
        }

    }

    

}

function cheakDraw(){

    if(!lose){
        let draw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") draw = false;
        })

        if(draw){
            lose = true
            document.getElementById("win").innerHTML = turn + 'draw'
            document.getElementById("result").style.display = 'inline'
        }
    }

}

document.getElementById("result").addEventListener('click',()=>{
    lose = false;
    turn = 'X';
    document.getElementById("win").innerHTML =""
    document.getElementById('result').style.display = "none"

    boxes.forEach(e =>{
     e.innerHTML = ""
         e.style.removeProperty("background-color");
         e.style.color = "#"
    })
})

function changeturn(){

    if(turn === 'X'){
        turn = "O"

    }
    else{
        turn = "X"
    }

}