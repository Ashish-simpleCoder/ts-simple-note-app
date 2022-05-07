import { memo } from "react"
// import { useSelector } from "react-redux";
import H3 from "../../Components/PureComponents/H3";
import Ul from "../../Components/PureComponents/Ul";
import Check from "../../Svg/Check";
import Cross from "../../Svg/Cross";

const ValidationBox = ({validations}: {validations: {
    number: boolean;
    lowercase: boolean;
    capital: boolean;
    characters: boolean;
}
}) => {
    const {capital, characters, lowercase, number} = validations
    // const dark_theme = useSelector((state: {theme: {value: true | false}}) => state.theme.value)

    return(
        <div >
            <H3 styles={{transform:'scale(0.7)',textAlign:'center'}}>Password rules</H3>
            <Ul styles={{marginTop:'5rem'}}>
                <li style={{color:lowercase ? '#0BA61B': '#BF2626'}}>
                    {lowercase ? <Check/> :<Cross />}
                        A lowercase
                </li>
                <li style={{color:number ? '#0BA61B': '#BF2626'}}>
                    {number ? <Check/> :<Cross />}
                        A number
                </li>
                <li style={{color:capital ? '#0BA61B': '#BF2626'}}>
                    {capital ? <Check/> :<Cross />}
                        A capital letter
                </li>
                <li style={{color:characters ? '#0BA61B': '#BF2626'}}>
                    {characters ? <Check/> :<Cross />}
                        Minimum 4 characters
                </li>
            </Ul>

        </div>
    )
}
export default memo(ValidationBox)