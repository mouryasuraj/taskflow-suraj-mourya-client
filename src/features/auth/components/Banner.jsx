
import BannerImg from '../../../assets/login-banner.avif'
import Logo from '../../../components/Logo/Logo'

const Banner = () => {
    return (
        <div>
            <Logo fontSize='3vw' />
            <img src={BannerImg} alt="" />
        </div>
    )
}

export default Banner