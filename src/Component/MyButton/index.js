function MyButton({title, handleClick}){
    
    
console.log('render MyButton')

return(
    <button onClick={handleClick}>{title}</button>
)
}

export default MyButton