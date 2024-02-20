// Libraries, functions, etc.
import DOMPurify from "dompurify";

export function htmlCodeDisplay(htmlCode) {
  const sanitizedHtml = DOMPurify.sanitize(htmlCode, {
    ALLOWED_TAGS: ["style"],
  });

  return sanitizedHtml;
}
