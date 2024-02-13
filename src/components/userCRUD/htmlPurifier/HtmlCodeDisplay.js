import DOMPurify from "dompurify";

export default function HtmlCodeDisplay({ htmlCode }) {
  const sanitizedHtml = DOMPurify.sanitize(htmlCode);

  return (
    <div className="htmlCode-display-box">
      <pre dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  );
}
