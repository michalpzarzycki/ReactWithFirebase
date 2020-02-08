import React from 'react';
import FirebaseContext from '../../firebase/context';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import LinkItem from './LinkItem';

const LinkDetail = (props) => {
    const { firebase, user } = React.useContext(FirebaseContext)
    const [link, setLink] = React.useState(null)
    const [commentText, setCommentText] = React.useState("")
const linkId = props.match.params.linkId;

React.useEffect(()=> {
    getLink()
}, [])

function getLink() {
const linkRef = firebase.db.collection('links').doc(linkId)
linkRef.get().then(doc => {
    setLink({ ...doc.data(), id:doc.id })
})
}
function handleAddComment() {
 if(!user) {
     props.history.push('/login')
 } else {
     

     firebase.db.collection('links').doc(linkId).get().then(doc => {
         if(doc.exists) {
             console.log("USER", user)
             const previousComments = doc.data().comments
             const comment = {
                 postedBy: {id:"unknown", name: user.displayName},
                 creted: Date.now(),
                 text: commentText
             }
             const updatedComments = [...previousComments, comment]
             firebase.db.collection('links').doc(linkId).update({comments: updatedComments})
             setLink(prevState => ({
                 ...prevState, 
                 comments: updatedComments
             }))
             setCommentText("")
         }
     })
 }
}
    return !link ? (
        <div>Loading ...</div>
    ) : (
        <div>
            <LinkItem showCount={false} link={link}/>
            <textarea 
            onChange={event => setCommentText(event.target.value)}
            value={commentText}
            rows='6'
            cols='60'
            />
            <div>
                <button onClick={handleAddComment}>AddCommnet</button>
            </div>
            {console.log(link.comments)}
            {link.comments.map((comment, index) => {
                return <div key={index}>
                    {console.log("KOMY", comment)}
                    <p>
                        Name: {comment.postedBy.name} | created: {formatDistanceToNow(comment.creted)}
                    </p>
            <p>{comment.text}</p>
                </div>
            })}
        </div>

    )
}

export default LinkDetail