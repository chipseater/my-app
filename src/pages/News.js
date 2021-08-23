import React, {useEffect, useState} from 'react'
import Navigation from "../components/navigation.js"
import axios from 'axios'
import Article from "../components/Article.js"

const News = () => {
    const [newsData, setNewsData] = useState([])
    const [author, setAuthor] = useState('')

    useEffect(() => {
        getData()
    }, []);

    function getData() {
        axios.get('http://localhost:3003/articles/').then((res) => setNewsData(res.data))
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:3003/articles", {
            author: author,
            content:"cc sa va ?",
            date: Date.now(),
        })
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
                 onChange={(event) => {setAuthor(event.target.value)}}>
                </textarea>
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