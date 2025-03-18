const input = document.getElementById('button')
const imguser = document.getElementById('imguser')
const imgcomp = document.getElementById('imgcomp')
    input.addEventListener('click', (e) =>{
        // console.log(e.target);
        if(e.target.textContent == 'Rock'){
            imguser.src = "assets/rock.png";     
        }
        if(e.target.textContent == 'Paper'){
            imguser.src = "assets/paper.png";     
        } 
        if(e.target.textContent == 'Scissors'){
            imguser.src = "assets/scissors.png";     
        } 
        assets = ["assets/rock.png","assets/paper.png","assets/scissors.png"] 
        random = Math.floor(Math.random() * 2) 
        console.log(assets[random])
        imgcomp.src = assets[random]
         
    })