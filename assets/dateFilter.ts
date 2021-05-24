export default {
    toDate(val: string) {
        const date = new Date(val);
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}` 
    }
}