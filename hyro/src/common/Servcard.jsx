import serv from './serv.module.css'
const Servcard = ({pic, desc, price}) => {
    return(
        <div className={serv.card}>
            <div className={serv.pic}>
                <img src={pic} alt="" />
            </div>
            <div>
                <h3 className={serv.name}>{desc}</h3>
                <p className={serv.price}>$ {price} /-</p>
            </div>
        </div>
    )
}
export {Servcard}
