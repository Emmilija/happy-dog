// import {FetchDogs} from '../context/FetchDog'
// import { useState, useEffect } from 'react';
// import '../Styles/GetDog.scss'

// function GetDog() {
//     const [dogData, setDogData] = useState([])
//     const [selectDog, setSelectDog] = useState('')
//     const [selectImage, setSelectImage] = useState(null)

//     useEffect(() => {
//         async function fetchData() {
//         try {
//             const data = await FetchDogs()
//             setDogData(data)
//         }catch(error) {
//             console.log('Error fetchin data', error)
//         }
//     }
//     fetchData()
//     }, [])


//     useEffect(() => {
        
// const selectedBreedData = dogData.find((entry) => entry.breed === selectDog)

// if(selectedBreedData) {
//     setSelectImage(selectedBreedData.imageUrl)
// }else {
//     setSelectImage(null)
// }

//     }, [selectDog, dogData])

// function chooseDog(e) {
//     const selectedBreed = e.target.value
//     setSelectDog(selectedBreed)
   
// }

//     return (
       
//         <div className='form-container'>
//             <h1>Get Dog</h1>
//           <form action="" >
//             <label className='form-label' htmlFor="dogSelect">Search for your favourite breed</label>

//             {dogData.length > 0 ? (
//                 <select 
//                 id="dogSelect" 
//                 className="select-input"
//                 onChange={chooseDog}
//                  value={selectDog}>
                   
//                         <option  value=''>Select breed</option>

//                    {dogData.map((entry, index) => (
//                     <option key={index} value={entry.breed}>{entry.breed}</option>
//                    ))}

//                 </select>
                
//             ) : (
//                 <p>Loading</p>
//             )
         
//             }
//             </form>
//             {selectImage && (
//                 <div>
//                     <h2>{selectDog}</h2>
//                     <img src={selectImage} alt={selectDog} />
//                 </div>
//             )}
      
         
//         </div>
       
//     )
// }


// export default GetDog;