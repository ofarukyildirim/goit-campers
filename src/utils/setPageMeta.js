export const setPageMeta = (title, description) => {
  document.title = title
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', description)
}
