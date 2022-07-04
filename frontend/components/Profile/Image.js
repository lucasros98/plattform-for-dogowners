export default function Image({ image }) {
    if(!image) return <></>
    return (
        <div>
            <img src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} />
        </div>
    );
}
