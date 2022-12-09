export const useCategories = () => {
  return useState('categories', () => [
    {
      id: 1,
      title: 'Doprava',
      slug: 'doprava'
    },
    {
      id: 2,
      title: 'Bezpečnost',
      slug: 'bezpecnost'
    },
    {
      id: 3,
      title: 'Financie',
      slug: 'financie'
    },
    {
      id: 4,
      title: 'Voľný čas',
      slug: 'volny-cas'
    }
  ])
}
