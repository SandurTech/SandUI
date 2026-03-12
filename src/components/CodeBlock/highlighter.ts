/**
 * A minimal, fast, and regex-based syntax highlighter for CodeBlock.
 * Mimics a modern VS Code theme palette using a single-pass-safe masking technique.
 */
export function highlightCode(code: string): string {
  if (!code) return '';

  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const tokens: string[] = [];
  const mask = (match: string, type: string) => {
    const id = `___TOKEN_${tokens.length}___`;
    tokens.push(`<span class="token-${type}">${match}</span>`);
    return id;
  };

  // 1. Comments (highest priority)
  html = html.replace(/\/\/.*/g, (m) => mask(m, 'comment'));
  html = html.replace(/\/\*[\s\S]*?\*\//g, (m) => mask(m, 'comment'));

  // 2. Strings
  html = html.replace(/(["'`])(?:\\.|[^\\])*?\1/g, (m) => mask(m, 'string'));

  // 3. Booleans, Null, Undefined
  html = html.replace(/\b(true|false|null|undefined)\b/g, (m) => mask(m, 'boolean'));

  // 4. Keywords
  html = html.replace(
    /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|class|extends|type|interface|enum|async|await|try|catch|finally|throw|new|this|super|public|private|protected|readonly|static|get|set|as|in|of|void|any|number|string|boolean|symbol|bigint)\b/g,
    (m) => mask(m, 'keyword')
  );

  // 5. Common React/TS Built-ins
  html = html.replace(
    /\b(React|useState|useEffect|useMemo|useCallback|useId|useRef|forwardRef|ComponentPropsWithoutRef|ReactNode|FC|HTMLAttributes)\b/g,
    (m) => mask(m, 'class')
  );

  // 6. Functions
  html = html.replace(/\b([a-z_][a-z0-9_]*)(?=\s*\()/gi, (m) => mask(m, 'function'));

  // 7. JSX Components and Tags
  html = html.replace(/&lt;[A-Z][a-zA-Z0-9]*/g, (m) => mask(m, 'component'));
  html = html.replace(/&lt;\/?[a-z][a-z0-9]*/g, (m) => mask(m, 'tag'));
  html = html.replace(/&lt;\/[a-zA-Z0-9]+&gt;/gi, (m) => mask(m, 'tag'));

  // 8. Attributes
  html = html.replace(/\b([a-z][a-zA-Z0-9]*)(?=\s*=\s*[{"])/g, (m) => mask(m, 'attr'));

  // 9. Numbers
  html = html.replace(/\b(\d+)\b/g, (m) => mask(m, 'number'));

  // 10. Operators
  html = html.replace(/(=&gt;|===|==|=|\+|-|\*|\/|&amp;&amp;|\|\||!)/g, (m) => mask(m, 'operator'));

  // Final Pass: Restore tokens
  tokens.forEach((content, i) => {
    html = html.replace(`___TOKEN_${i}___`, content);
  });

  return html;
}
