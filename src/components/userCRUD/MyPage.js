import DOMPurify from "dompurify";

export default function MyPage() {
  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    h1 {
      color: red;
    }
    </style>
</head>
<body>
    <h1 style='color:red'>Testing</h1>
</body>
</html>`;

  const sanitizedHtml = DOMPurify.sanitize(htmlExample, {
    ALLOWED_ATTR: ["style"],
  });

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
    </div>
  );
}
