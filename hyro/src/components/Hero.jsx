import hero from './hero.module.css'
import { Nabvar } from './Navbar'
const Hero = () => {
    return(
        <div className={hero.home}>
            <Nabvar/>
        <div className={hero.image}>
        <div className={hero.desc}>
            <p>We make nature to become more natural 😁,</p>
            <p>We are <span className={hero.log}>Acme Fresh</span></p>

        </div>

        <img className={hero.bgimage} src="https://img.freepik.com/free-photo/hydroponics-system-planting-vegetables-herbs-without-using-soil-health_1150-8153.jpg?w=2000"  alt="plant image" />

        </div>
        </div>
    )
}

export {Hero}
