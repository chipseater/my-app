import React from 'react';

const Article = (props) => {

    const article = props.data
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR',
        {month:"long", year: "numeric", day:"numeric"})
        return newDate
    }

    return (
        <div className="article">
            <div className="card-header">
                <h1>{article.author}</h1>
                <em className="date">Posté le {dateParser(article.date)}</em>
                <p>{article.content}</p>
                <div className="btn-container">
                    <button className="button">Edit</button>
                    <button className="button">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Article;