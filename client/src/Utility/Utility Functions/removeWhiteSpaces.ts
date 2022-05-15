export default function removeWhiteSpaces(value: string){
    value = value.trim().toLocaleLowerCase()
    if(value.includes("  ")){
        for(let i=0; i<value.length; i++){
            value = value.replace("  "," ")
        }
    }
    return value
}