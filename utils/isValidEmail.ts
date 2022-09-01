export const isEmailValid = ( email: string ): boolean => {
    const regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    
    if ( !regExp.test( email ) ) {
        return false
    }

    return true
} 