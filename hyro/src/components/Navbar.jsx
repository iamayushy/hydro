import nav from './nav.module.css'
const Nabvar = () => {
    return(
        <div className={nav.navbar}>

            <div className={nav.navlinks}>
            <div className={nav.logo}>
                <img src="https://assets.website-files.com/622b1d16a9f2759eca2a0424/622b1d16a9f27578ab2a0470_Hypto.svg" alt="logo" />
                <sub style={{fontSize:'1.1rem', fontWeight:'600'}}>Acme Fresh Inc.</sub>
            </div>
            <div className={nav.links}>
                <div>Home</div>
                <div>Shopping</div>
                <div>Contact Us</div>
                <div>About</div>
            </div>
            </div>
        </div>
    )
}
export {Nabvar}
