import React from 'react';
import FirebaseContext from '../../firebase/context';
import LinkItem from './LinkItem';

const SearchLinks = () => {
const { firebase, user } = React.useContext(FirebaseContext)
const [links, setLinks] = React.useState([])
const [filteredLinks, setFilteredLinks] = React.useState([])
    const [filter, setFilter] = React.useState("")

    React.useEffect(() => {
        getInitialLinks();
    }, [])
function handleSearch(event) {
   
    event.preventDefault()
    const query = filter.toLowerCase();
    console.log("LINKS", links)
    const matchedLinks = links.filter(link => {
        return (link.description.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.postedBy.name.toLowerCase().includes(query))
    })
    setFilteredLinks(matchedLinks)
    console.log("HANDLE SEARCH")
    console.log("QUERY", query)
    console.log("MAtched", matchedLinks)
}
function getInitialLinks() {
    firebase.db.collection('links').get().then(snapshot => {
        const links = snapshot.docs.map(doc => {
            return {id:doc.id, ...doc.data()}
        })
        setLinks(links)
    })
}
    return(
        <div>
             <form onSubmit={handleSearch}>
            <div>
               Search<input onChange={(event) => setFilter(event.target.value)}/> 
               <button type="submit">OK</button>
            </div>
        </form>
        {filteredLinks.map((filteredLink, index) => {
           return  <LinkItem index={index} key={filteredLink.id} showCount={false} link={filteredLink}></LinkItem>
        })}
        </div>
       
    )
}

export default SearchLinks