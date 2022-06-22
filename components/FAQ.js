
export default function FAQ({question,content}) {
  return (
    <details className="mb-4">
    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
      {question}
    </summary>
    <p className="px-4 py-2">
      {content}
    </p>
  </details>
  );
}
