export default function Updates({ image }) {
    console.log(image.data.toString('base64'))
    if(!image) return <></>
    return (
        <div>
            <img src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} />
        </div>
    );
}
