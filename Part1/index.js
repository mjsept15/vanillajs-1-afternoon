const game = []

function play(clicked){
const playerSpan = document.getElementById('player')
const clicked2 = document.getElementById(clicked)

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clicked2.innerText = 'X'
        game[clicked] = 'X'
    }   else {
        playerSpan.innerText = "X"
        clicked2.innerText = "O"
        game[clicked2] = 'O'
    }
    console.log(game)
    const topLeft = game[0]
    const topCenter = game[1]
    const topRight = game[2]
    const midLeft = game[3]
    const midCenter = game [4]
    const midRight = game[5]
    const bottomLeft = game [6]
    const bottomCenter = game [7]
    const bottomRight = game[8]

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`${topLeft} is the winner`)
        return 
    }
    
    if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
        alert (`${midLeft} is the winner`)
        return
    }

    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert (`${bottomLeft} is the winner`)
        return
    }

    if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner`)
        return
    }
    if (topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter){
        alert (`${topCenter} is the winner`)
        return
    }
    if (topRight !== undefined && topRight === midRight && topRight === bottomRight){
        alert(`${topRight} is the winner`)
    }
    if (topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner`)
        return
    }
        if (bottomLeft !== undefined && bottomLeft === midCenter && bottomLeft === topRight){
            alert(`bottomLeft is the winner`)
            return
        } 


    
        let fullBaord = true
        for (let i =0; i <= 8; i ++){
           if (game[i] === undefined){
               fullBaord = false
           }
        }
           if (fullBaord === true){
            alert("no winner!!!")
        
        }
    

}

   