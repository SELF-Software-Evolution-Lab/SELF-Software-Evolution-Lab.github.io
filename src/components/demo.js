import React from "react"
import "./header.css"
import "./demo.css"

export default ({ id, type }) => {
  return (
    <div className="video">
      <iframe
        className="embed"
        src={type === "youtube"? `https://www.youtube.com/embed/${id}` : `https://player.vimeo.com/video/${id}`}
        frameBorder="0"
      />
    </div>
  )
};