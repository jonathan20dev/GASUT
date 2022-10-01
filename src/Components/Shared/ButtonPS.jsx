import React from 'react'

const styles = {
  claseB: {
    backgroundColor: "#395B45",
    display: "block",
    margin: "0 auto",
    width: "100%",
    borderRadius:" 20px",
  }
}


const ButtonPS = ({ name }) => {
  return (
    <button type="button" style={styles.claseB} className="btn btn-success mt-4">{ name }</button>
  )
}

export { ButtonPS }