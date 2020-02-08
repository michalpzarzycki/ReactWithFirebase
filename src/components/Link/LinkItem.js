import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import FirebaseContext from '../../firebase/context';
const LinkItem = ({ link, index, showCount, history }) => {
    const { firebase, user } = React.useContext(FirebaseContext)
    function handleVote() {
        if (!user) {
            history.push('/login')
        } else {
            const voteRef = firebase.db.collection('links').doc(link.uid)
            voteRef.get().then(doc => {
                if (doc.exists) {
                    const previousVotes = doc.data().votes;
                    const vote = { votedBy: { id: user.uid, name: user.displayName } }
                    const updatedVotes = [...previousVotes, vote];
                    voteRef.update({ votes: updatedVotes })
                }
            })
        }
    }
    function handleDelete() {
        const linkRef = firebase.db.collection('links').doc(link.uid)
        linkRef.delete().then(() => {
            console.log(`Document with id ${link.uid} deleted`)
        })
            .catch(err => {
                console.error("Error deleting document", err)
            })

    }

    // const postedByAuthUser = user && user.id === link.postedBy.uid
    const postedByAuthUser = true

    return (
        <div>
            <div>
                {showCount && <span>{index}</span>}
                <div onClick={handleVote}>
                    ^
    </div>
                <div>
                    {link.description}, {link.url}
                </div>
                <div>
                    {link.votes.length} votes by {link.postedBy.name} {formatDistanceToNow(link.created)}
                </div>
                <Link to={`/link/${link.uid}`}>
                    {link.comments.length > 0 ? `${link.comments.length} comments` : "discuss"}
                </Link>
                {postedByAuthUser && (
                    <>
                        <span onClick={handleDelete}>DELETE</span>
                    </>
                )}
            </div>
        </div>
    )
}

export default withRouter(LinkItem)