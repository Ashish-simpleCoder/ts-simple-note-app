import { memo } from "react"
import If from "../../Utility/Utility Components/If"
import Map from '../../Utility/Utility Components/Map'


const ErrorBox = (props: {error?: string, errors?: any[]}) => {
    const {error, errors} = props
    return(
        <div style={{backgroundColor: 'var(--dan-100)',width:'100%',paddingInlineStart:'1rem',marginTop: 'auto'}}>
            <If condition={error}>
                <p  style={{color: 'var(--dan-300)', fontSize:'1.4rem'}}>{error}</p>
            </If>
            <If condition={Array.isArray(errors)}>
                {
                    errors?.map(e => <p key={e} style={{color: 'var(--dan-300)', fontSize:'1.4rem'}}>{e}</p>)
                }
            </If>
        </div>
    )
}
export default memo(ErrorBox)