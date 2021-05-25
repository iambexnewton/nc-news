import {useParams} from 'react-router-dom';

const ArticleDetails = ()=>{
    const {id} = useParams()

    return (
        <div className='article-details'>
        <h2>Article<h2/>
        <div/>
    )
}

export default ArticleDetails;