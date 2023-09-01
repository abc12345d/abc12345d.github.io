import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./NoteDetails.css";
import Code from "./Code";

function NoteDetails() {
  const { noteId } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdowns/notes/${noteId}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [noteId]);

  return (
    <div className="noteDetailsContainer">
      <div className="markdownContainer">
        <Markdown>{post}</Markdown>
      </div>
      {/* <div className="markdownContainer">
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
              },
            },
          }}
        >
          {post}
        </Markdown>
      </div> */}
    </div>
  );
}

export default NoteDetails;
