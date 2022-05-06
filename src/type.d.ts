// type UserType = {
//     email?: string,
//     notes?: {}[]


// }
type ChildrenType =
    ({ children }: {
        children?: JSX.Element | JSX.Element[] | undefined;
    }) => JSX.Element



interface UserType {
    user: {
        email?: string,
        notes?: {}[]
    }
}

interface PropType {
    children: JSX.Element | JSX.Element[] | string,
    cn?: string,
    onClick?: () => {
        type: ActionCreatorWithoutPayload<string>;
    } | void,

    mode?: BtnMode,
    isDisabled?: boolean
}
type BtnMode = 'hero_btn' | 'logout_btn' | 'delete_note_btn' | 'create_note_btn' | 'login_form_btn' | 'toggle-nav-btn'
type FormMode = 'login' | 'register' | 'create_note'



interface Theme  {
    theme : { value: boolean }
}
interface User  {
    user : {
        email?: string,
        notes?: any[]
    }
}
interface Store extends Theme, User {
    // user:{
    //     email?:string, notes?: {}[]
    // },
    // theme: {value?: true | false}
}
