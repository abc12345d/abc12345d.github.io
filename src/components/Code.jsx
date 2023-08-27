import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ className, children }) {
  const language = className.replace("lang-", "");
  return (
    <div className="codeBlock">
      <SyntaxHighlighter language={language.toLowerCase()} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
