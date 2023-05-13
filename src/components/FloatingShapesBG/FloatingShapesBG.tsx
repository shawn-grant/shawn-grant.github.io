import { useEffect, useRef } from 'react'
import './floatingshapes.scss'

function FloatingShapesBG() {
    const shapeDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        var html = '';
        for (var i = 1; i <= 80; i ++) {
            html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
        }
            
        shapeDiv.current!.innerHTML += html;
    }, [])

    return (
        <div className="floatingshapes">
            <div className="inner-container">
                <div className="shape" ref={shapeDiv}>
                </div>
            </div>
        </div>
    )
}

export default FloatingShapesBG