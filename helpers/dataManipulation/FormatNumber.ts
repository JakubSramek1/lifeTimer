export default function FormatNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
