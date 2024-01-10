function checkNumberEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

function checkStringEmpty(e: string): boolean {
    return e === undefined || e === null || e.trim() === ''
}

function checkLengthPassword(e: string): boolean {
    if(e.length < 8) {
    }
        return e.length < 8
}

export { 
    checkNumberEmpty, 
    checkLengthPassword, 
    checkStringEmpty 
}