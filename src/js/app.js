

function User(id, name) {
    this.id = Date.now() + id * 10
    this.name = name
}

function Post(id, userId, text) {
    this.id = id
    this.userId = userId
    this.text = text
}

function Comment(id, postId,text){
    this.id = id
    this.postId = postId
    this.text = text
}

const getUsers = (num) => {
    const users = [];
    for (let i=1; i<=num; i++) {
        users.push( createUser(i) )
    }
    return users
}

const createUser = (idx) => {
    return new User(idx,`USER ${idx}`)
}

const getPosts = () => {
    const posts = []
    users.forEach( (user) => {
        let numPosts = Math.floor(Math.random() * 25) + 1
        for (let i = 1; i <= numPosts; i++) {
            posts.push( new Post( Date.now() + Math.floor(Math.random() * 100000), user.id, `Text from ${user.name} #${i}` ) )
        }  
        
    } )
    return posts
}   

    const getComment = () => {
        const comments = []
        posts.forEach( (post) => {
            let numComment = Math.floor(Math.random()*10) + 1
            
            for (let i = 1; i <= numComment; i++) {
                comments.push(  new Comment( Date.now() + Math.floor(Math.random() * 100000), post.id, `Comment from ${post.id} #${i}` ) )
            }
            
        } )  
        return comments
    }
      
    
const renderUsers = () => {
    const lBlock = document.querySelector('#l')
    lBlock.innerHTML = ''
    users.forEach( user => {
        const card = document.createElement('div')
        card.id = `user_${user.id}`
        card.innerText = user.name
        card.addEventListener('click', onUserClickHandle)
        lBlock.appendChild(card)
        

    } )
}


const onUserClickHandle = event => {
    console.log( event.target )
    const commentsBlock = document.querySelector('.comments')
    commentsBlock.innerHTML = '' 
    let userId = +event.target.id.split('_')[1]
    const filteredPosts = posts.filter( post => post.userId === userId )
    if (!filteredPosts.length) {
        return false
    }
    renderPosts( filteredPosts )
    
}


const onPostClickHandleComment = event => {
    console.log( event.target )

    let postsId = +event.target.id.split('_')[1]
     const filteredComment = comments.filter( comment => comment.postId === postsId )
     
     if (!filteredComment.length) {
         return false
     }
     
    
    return renderComments(filteredComment);
}

const renderPosts = ( fPosts ) => {
    const rBlock = document.querySelector('#r')
    rBlock.innerHTML = ''
    fPosts.forEach( post => {
        const postCard = document.createElement('div')
        postCard.id = `card_${post.id}`
        postCard.innerText = post.text
        postCard.addEventListener('click', onPostClickHandleComment)
        rBlock.appendChild(postCard)
    } )
}

const renderComments = (fComment) => {
    const commentsBlock = document.querySelector('.comments')
    commentsBlock.innerHTML = ''
    fComment.forEach(comment => {
        const commentCard = document.createElement('div')
        commentCard.innerText = comment.text
        commentsBlock.appendChild(commentCard)
    })

}

const users = getUsers(10)
const posts = getPosts()
const comments = getComment()
// posts.sort((a,b) => a.id-b.id)

renderUsers();

import user from './index'

document.querySelector('h5 span').textContent = user.getInfo()