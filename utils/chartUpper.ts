export const chartUpper = ( name: string ): string => {
    const toChartUpper = name.charAt(0).toUpperCase() + name.split("-").join(" ").slice(1)
    return toChartUpper
}