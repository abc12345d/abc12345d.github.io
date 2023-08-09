import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./NoteDetails.css";

function NoteDetails() {
  const { noteId } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdowns/${noteId}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [noteId]);

  return (
    <div className="markdownContainer">
      <Markdown>{post}</Markdown>
    </div>
  );
}

export default NoteDetails;
