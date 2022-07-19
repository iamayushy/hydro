import { useEffect, useState } from 'react'
import { Servcard } from '../common/Servcard'
import serv from './serv.module.css'
const Services = () => {
    const [list, setList] = useState([])

    const fetchProducts = async() =>{
        const response = await fetch('https://hyptofresh.herokuapp.com/products')
        const data = await response.json()
        setList(data)
    }

    useEffect(() => {
        fetchProducts()
    } , [])



    return(
        <div className={serv.service}>
            <div className={serv.head}>
            <h3 className={serv.title}>Our Products</h3>
                <div className={serv.layout}>

                {list && list.map((ele) => {

                    return(
                        <Servcard key={ele.id}
                        pic={ele.image}
                        desc={ele.name}
                        price={ele.price}/>
                    )
                })}
                </div>
                <br />
            </div>
        </div>
    )
}
export {Services}
