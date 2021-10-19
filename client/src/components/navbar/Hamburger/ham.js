import React from 'react'
import './ham.css'
export const ham = () => {
    function handler(){
        document.querySelector('.burger').classList.toggle('open');

    }
    return (
        <div>
            <div class="burger" onClick={handler}>
             <div class="ham">
             </div>
      </div>
        </div>
    )
}
export default ham;