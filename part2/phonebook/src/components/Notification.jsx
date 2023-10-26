const Notification = ({ message }) => {


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
    }

    if (message.includes(`removed`)) {
        
        return (

            <div style={styles.error} className="error">
             {message}
            </div>
        )

      } else {

        return (
            <div style={styles.success} className="success">
              {message}
            </div>
          )


      }
  
    
  }

  export default Notification