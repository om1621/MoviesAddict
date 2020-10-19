import React from 'react'
import './component-style/partition.css'

const Pagination = ({totalMovies, moviesPerPage, pageChange}) => {

    let pages = [];

    let pages_count = Math.ceil(totalMovies/moviesPerPage);

    for(let i = 1; i < pages_count; i++)
    {
        pages.push(i);
    }

    return (
        <div className="page-grid" style={{ maxWidth: "768px", margin: "2rem auto", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <ul class="pagination pagination-lg">
                    { pages.map((page) => (
                        <li key={page} className="page-item">
                            <a onClick={() => pageChange(page)} className="page-link" href="!#">{page}</a>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default Pagination;
