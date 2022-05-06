export default function checkSmall(value: string){
    const reg = /[a-z]/
    return reg.test(value)
}