import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ className, children }) {
  const language = className.replace("lang-", "");
  return (
    <div className="codeBlock">
      <SyntaxHighlighter language={language.toLowerCase()} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
