import { useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { Data } from '../../Assests/data'
import { addBasket } from '../../Reducer/reducer/MarketSlice'
import { useDispatch } from 'react-redux'
import { addBasketToLocalStorage } from '../../Reducer/reducer/MarketSlice'
function DataLocation() {
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const handleClick = useCallback((imgSrc) => {
    dispatch(addBasket(imgSrc))
    if (!localStorage.getItem('market')?.includes(imgSrc)) {
     addBasketToLocalStorage(imgSrc)
   }
 } ,[dispatch])
  
    return (
        <div  className='Main_More' >
            {
                Data.filter((item) => item.imgSrc === decodeURIComponent(id)).map((datas, key) => (
                    <div key={key} className='Main_More-details'>
                       
                        <div className='Main_More-details-up'>
                            <div data-aos="fade-right" className='Main_More-details-img'>
                                <img src={datas.imgSrc} alt={datas.imgSrc} />
                            </div>
                            <div data-aos="fade-left" className='Main_More-details-market'>
                               <div className='Main_More-details-title'>
                                  <h3> {datas.location}</h3>
                                  <h3> {datas.grade} </h3>
                                        
                               </div>
                               <div className='Main_More-details-market-descripton' >
                                  <div className='date'>
                                   <div className="date-content">
                                   <span> Start:</span>
                                     <h3>{datas.date}</h3>
                                   </div>
                                    <div className="date-content">
                                    <span>Finish:</span>
                                     <h3> {datas.dateFinish}</h3>
                                    </div>
                                  </div>
                                  <div className='payment-slogan'>
                                       <h2> Tour of Your Dreams for Only </h2>
                                       <h1> {datas.fees} $</h1>
                                 </div>

                                 <div className='descption'>
                                   <p>
                                    {datas.descripton}  
                                   </p> 
                                 </div> 
                               </div>
                               
                               <button onClick={() => handleClick(datas.imgSrc)} className='btn'>
                              
                                 <span>Add To Basket </span>
                               </button>
                            </div>
                        </div >
                        <div  className='Main_More-details-content'>
                          <h2 data-aos="fade-down"> Travel Details </h2>
                        {
                           datas.details && datas.details.map((contents, i) => (
                                <div data-aos="fade-down" key={i} className='sections'>
                                   <span> {i+1} {"."} </span>
                                   <p> {contents.content}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }

        </div>



    )
}




export default DataLocation