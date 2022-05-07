export default function checkCapital(value: string){
    const reg = /[A-Z]/
    return reg.test(value)
}