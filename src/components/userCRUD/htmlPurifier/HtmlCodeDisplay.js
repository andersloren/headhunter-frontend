import DOMPurify from "dompurify";

export function htmlCodeDisplay(htmlCode) {
  const sanitizedHtml = DOMPurify.sanitize(htmlCode, {
    ALLOWED_ATTR: ["style"],
  });

  return sanitizedHtml;
}
