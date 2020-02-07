import React, { useState } from 'react';
import FirebaseContext from '../../firebase/context';
import LinkItem from './LinkItem';

const LinkList = (props) => {
  const { firebase } = React.useContext(FirebaseContext);
  const [links, setLinks] = useState([]);

  React.useEffect(()=>{
      getLinks()
  }, [])

  function getLinks() {
    firebase.db.collection('links').onSnapshot(handleSnapshot)

  }

  function handleSnapshot(snapshot) {
const links = snapshot.docs.map(doc => {
    return { id:doc.id, ...doc.data() }
})
 setLinks(links);
  }
    return(
        <div>
            {links.map((link, index) => {
              return  <LinkItem key={link.id} showCount={true} link={link} index={index+1}/>
            })}
        </div>
    )
}

export default LinkList