const Notification = ({ message }) => {
    
    const conditions= ["Added","modify"]

    const styles = {

      success: {

        width: `10rem`,
        background: `green`,
        padding: `.56rem`,
        marginTop: `1rem`,
        color: `white`
      },

      error: {

        width: `10rem`,
        background: `red`,
        padding: `.56rem`,
        marginTop: `1rem`,
        color: `white`
      }

        
    }

    if (message === null) {
      return null
    } else{

      const test= conditions.some(el => message.includes(el))

      if (test) {
        
        return (
          <div style={styles.success} className="success">
              {message}
            </div>
        )

      } else {

        return (
          <div style={styles.error} className="error">
          {message}
          </div>
            
        )


      }
    }

    
      
    
  }

  export default Notification