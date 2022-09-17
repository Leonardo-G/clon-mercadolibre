export const formatDate = ( date: number ): string => {
    const dateFormat = new Date( date ).toLocaleString( "es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
    } )

    return dateFormat
}