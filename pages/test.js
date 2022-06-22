
export const getServerSideProps = ({ res }) => ({
    props: {
        dbData: res.dbData
    }
})


function Test({ data }) {
    <div>
        {JSON.stringify(data)}
    </div>
}

export default Test
