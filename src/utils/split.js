export function chars(word) {
  const characters = Array.from(String(word));
  return characters.map((char, index) => (
    <span key={index} className="char-span">
      {char}
    </span>
  ));
}
export default chars;
