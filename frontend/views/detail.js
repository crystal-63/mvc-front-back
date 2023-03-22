export default function Detail ({
    brand,
    model,
    price,
    spec
}) {
    return `
        <h1>Brand: ${ brand } </h1>
        <h1>Model: ${ model } </h1>
        <h1>Price: ${ price } </h1>
        <h1>Spec: ${ spec } </h1>
    `;
}