//функция создание даты 
export const createDate=()=>{
    const date =` ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    return date
}