const WhatsappLink = ({ phone }) => {
    const whatsappUrl = `https://wa.me/${phone}`;

    return whatsappUrl; // Retorna apenas o link
};

export default WhatsappLink;
