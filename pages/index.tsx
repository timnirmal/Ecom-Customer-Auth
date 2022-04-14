import {useState, useEffect} from 'react'
import {NextPage} from 'next'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'


// define the shape of the SignUp form's fields
type SignUpFieldProps = {
    email: string,
    password: string
}

// the value we'd like to initialize the SignUp form with
const FORM_VALUES: SignUpFieldProps = {
    email: '',
    password: ''
}

const myLoader = ({src, width, quality}) => {
    return `https://localhost:3000/public/${src}?w=${width}&q=${quality || 75}`
}

const IndexPage: NextPage<NextAppPageProps> = ({}) => {
    return (
        <div>
            <Layout useBackdrop={true} usePadding={false}>
                <h1 className="">Hello Next.js</h1>
            </Layout>
        </div>
    )
}

export default IndexPage

IndexPage.defaultProps = {
    meta: {
        title: 'Ecom'
    }
}
