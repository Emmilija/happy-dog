import '../Styles/WhyUs.scss'
import { useState } from 'react'


function WhyUs() {
    const [selectBox, setSelectBox] = useState(1)

function openBox(boxNumber) {
    setSelectBox(boxNumber)
}


    return(
        <div className='why-us'>


            <div className="boxes">
                <div className={`box ${selectBox === 1 ? 'selected' : ''}`} onClick={() => openBox(1)}>1</div>
                <div className={`box ${selectBox === 2 ? 'selected' : ''}`} onClick={() => openBox(2)}>2</div>
                <div className={`box ${selectBox === 3 ? 'selected' : ''}`} onClick={() => openBox(3)}>3</div>
                <div className={`box ${selectBox === 4 ? 'selected' : ''}`} onClick={() => openBox(4)}>4</div>
            </div>


{selectBox && (
<div className='explain'>

{selectBox === 1 && (
<div className='show'>
<h2 className='title'>Best games</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
orem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
</p>
</div>

)}
{selectBox === 2 && (
<div className='show'>
<h2 className='title'>Best Team</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
orem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
</p>
</div>
)}

{selectBox === 3 && (
<div className='show'>
<h2 className='title'>Ancius of distance</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
orem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
</p>
</div>
)}

{selectBox === 4 && (
<div className='show'>
<h2 className='title'>Routine</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
orem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid debitis voluptas non beatae ratione omnis dignissimos quo, nobis soluta provident rem ad error officiis architecto vero animi reiciendis. Architecto!
</p>
</div>
)}
</div>
    )}    </div>
    
    )
}

export default WhyUs