import {memo} from 'react'
import useUser from '../../Redux/hooks/useUser'
import useFetchUser from '../../Utility/Hooks/useFetchUser'
import HeroSection from './Hero.section'

const Home = () => {
    const {user} = useUser()
    useFetchUser({shouldCheckIfUserLogged: !user.email})


    return(
        <HeroSection/>
    )
}
export default memo(Home)