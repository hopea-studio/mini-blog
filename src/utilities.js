export const docsWithId = (doc) => {
  return { id: doc.id, ...doc.data() }
}
