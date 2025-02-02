import 'react';
import WhatsappLink from './WhatsappLink';  // Importe o componente filho

const WhatsappButton = ({ phone, containerClassName }) => {
    return (
        <div>
            {/* Caso você queira um botão fixo */}
            <WhatsappLink phone={phone} />

            {/* Caso queira renderizar o botão dentro de uma div personalizada */}
            {/* Passa a classe da div personalizada */}
            {/*Aplicação do componente:
       <WhatsappLink phone="555199999999" containerClassName="my-custom-class" />
        */}
            <WhatsappLink phone={phone} containerClassName={containerClassName} />
        </div>
    );
};

export default WhatsappButton;
