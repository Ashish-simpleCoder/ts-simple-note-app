export default function checkNumber(value: string,){
    const reg = /[0-9]/
    return reg.test(value)
}