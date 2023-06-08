const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  if(message.includes('sucessfully') ){
    return (
      <div className="sucessfull">
        {message}
      </div>
    )
  } 
  
  return (
    <div className="error">
      {message}
    </div>
  )
}

export default Notification