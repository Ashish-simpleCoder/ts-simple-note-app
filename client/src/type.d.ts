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
    children?: JSX.Element | JSX.Element[] | string,
    cn?: string,
    onClick?: (() => Promise<void>) | (() => {
        type: ActionCreatorWithoutPayload<string>;
    } | void),

    mode?: BtnMode,
    isDisabled?: boolean,
    loader?: boolean
}
type BtnMode = 'hero_btn' | 'logout_btn' | 'delete_note_btn' | 'create_note_btn' | 'login_form_btn' | 'toggle-nav-btn'
type FormMode = 'login' | 'register' | 'create_note'



interface Theme  {
    theme : { value: boolean }
}
interface ColorMenu  {
    color_menu: {
        enable: boolean,
        item: {
            bg : string[],
            _id: string
        },
        position: {
            top: string,
            left: string
        }
    }
}
interface User  {
    user : {
        email?: string,
        _id?: string,
        notes?: any[]
    }
}
interface Store extends Theme, User {
}
interface Note{
    title: string,
    body: string,
    _id: string,
    bg?: Record<string>[],
    delete?: Boolean
}
interface INote{
    title: string,
    body: string,
    _id: string,
    bg?: Record<string>[],
    delete?: Boolean
}
