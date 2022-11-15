import React from 'react'
//need to make catagories

function LowerCat({letterIndex}) {
    const letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    let indexs = 0
    return(
        <div>{
            letter.map(object => {
                return(
                    <div className = "catbox" key={indexs++} onClick={() =>letterIndex(object)}>
                        <h3>{object}</h3>
                        </div>
                )
            })
            
            }
        </div>
    )
}

export default LowerCat