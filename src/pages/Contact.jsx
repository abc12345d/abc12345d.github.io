import "./Contact.css";

function Contact() {
  const pdfUrl = new URL(`../assets/ZhiQiLee_resume.pdf`, import.meta.url).href;
  return (
    <section className="myCV">
      <a href={pdfUrl}>If nothing shows up, click this link</a>
      <object data={pdfUrl} type="application/pdf" width="100%" height="1000vh">
        <p>
          Alternative text - include a link <a href={pdfUrl}>to the PDF!</a>
        </p>
      </object>
    </section>
  );
}
export default Contact;
