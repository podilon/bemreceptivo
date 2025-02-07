import "react";

const ShortVideoCard = ({ url, title }) => {
    return (
        <div className="w-full flex justify-center">
            <iframe
                width="315"
                height="560"
                src={url}
                title={title}
                allowFullScreen
                className="w-full max-w-xs rounded-lg shadow-lg"
            ></iframe>
        </div>
    );
};

export default ShortVideoCard;
