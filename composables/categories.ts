export const useCategories = () => {
  return useState('categories', () => [
    {
      id: 1,
      title: 'Doprava',
      slug: 'doprava',
      fake: false
    },
    {
      id: 2,
      title: 'Bezpečnost',
      slug: 'bezpecnost',
      fake: true
    },
    {
      id: 3,
      title: 'Financie',
      slug: 'financie',
      fake: true
    },
    {
      id: 4,
      title: 'Voľný čas',
      slug: 'volny-cas',
      fake: true
    }
  ])
}
