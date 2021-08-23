import React, {useEffect, useState} from 'react'
import Navigation from "../components/navigation.js"
import axios from 'axios'
import Article from "../components/Article.js"

const News = () => {
    const [newsData, setNewsData] = useState([])
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, []);

    function getData() {
        axios.get('http://localhost:3003/articles/')
         .then((res) => {
            setNewsData(res.data)
            setAuthor('')
            setContent('')
            })
    }

    function handleSubmit(event) {
        getData()
        if (content.length > 120) {
            axios.post("http://localhost:3003/articles", {
            author: author,
            content: content,
            date: Date.now(),
            })
            event.preventDefault()
        }
        else {
            setError(true)
        }
    }

    return (
        <div className="news-container">
           <Navigation/>
           <h1>News</h1>
           <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    onChange={(event) => {setAuthor(event.target.value)}}
                    type="text" placeholder="Nom"></input>
                <textarea
                    style={{border: error ? "1px solid red" : "1px solid #61dafb"}}
                    onChange={(event) => {setContent(event.target.value)}}>
                </textarea>
                {error && <p>Veuillez écrire au moins 120 caractères</p>}
                <input type="submit" value="Envoyer"></input>
           </form>
           <ul>{newsData
                .sort((a,b) => (b.date - a.date))
                .map((article) => (<Article key={article.id}
                data={article}/>))}
            </ul>
        </div>
    );
};


export default News;