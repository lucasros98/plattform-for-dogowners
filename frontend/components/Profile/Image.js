export default function Image({ image }) {


    if (!image) return <></>

    if (image.contentType) {
        return <div>
            <img src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} />
        </div>
    }
    else
        return (
            <div>
                <img src={image} />
            </div>
        );
}
