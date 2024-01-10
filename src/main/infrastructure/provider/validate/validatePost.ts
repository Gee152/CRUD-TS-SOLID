function checkLengthContent(e: string): boolean {
        return e.length >= 255
}

//function (e: string): boolean {
    //return e === undefined || e === null || e.trim() === ''
//}

function checkPostStringEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

export { 
    checkLengthContent,
    checkPostStringEmpty
}