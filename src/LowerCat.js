import React from 'react'
//need to make catagories

function LowerCat() {
    const letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    let indexs = 0
    return(
        <div>{
            letter.map(item => {
                return(
                    <div className = "catbox" key={indexs++}>
                        <h3>{item}</h3>
                        </div>
                )
            })
            
            }
        </div>
    )
}

export default LowerCat