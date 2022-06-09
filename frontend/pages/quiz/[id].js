import {useRouter} from 'next/router'

export default function Quiz({quiz}) {
    const router = useRouter()
    const {id} = router.query
    return <h1>{quiz.test}</h1>
}


export async function getStaticProps({params}) {
    //send request
    const data = {test:"yes"}

    return {
        props: {
            quiz:data
        }
    }
}

export async function getStaticPaths() {
    const paths = {params : {id:"yes"}}

    return {
        paths,
        fallback:false
    }
}