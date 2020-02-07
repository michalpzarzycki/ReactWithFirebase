import React from 'react';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const LinkItem = ({ link, index, showCount}) => {

    return(
        <div>
            <div>
    {showCount && <span>{index}</span>}
    <div>
        ^
    </div>
    <div>
        {link.description}, {link.url}
    </div>
    <div>
        {link.votes.length} votes by {link.postedBy.name} {formatDistanceToNow(link.created)}
    </div>
    <Link to={`/link/${link.id}`}>
        {link.comments.length > 0 ? `${link.comments.length} comments` : "discuss"}
    </Link>
            </div>
        </div>
    )
}

export default LinkItem