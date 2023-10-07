const formatearDineroUSD = (valor) => {
    const valorFormateado = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return valorFormateado.format(valor);
};
const formatearDineroEUR = (valor) => {
    const valorFormateado = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    });
    return valorFormateado.format(valor);
};

export {
    formatearDineroUSD,
    formatearDineroEUR
} 