import DOMPurify from "dompurify";

export default function HtmlCodeDisplay({ htmlCode }) {
  const sanitizedHtml = DOMPurify.sanitize(htmlCode);

  return (
    <div className="html-display-box">
      <pre dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  );
}
