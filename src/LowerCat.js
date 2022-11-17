import React from 'react'


function LowerCat({letterIndex}) {
    const letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
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