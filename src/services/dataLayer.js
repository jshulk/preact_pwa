export const fetchEmojis = (text) => {
  return fetch(`https://emoji.getdango.com/api/emoji?q=${text}`)
    .then(response => response.json())
    .then( ({results}) => results)
}
