export const useTutorials = () => {
  return useState('tutorials', () => [
    {
      id: 1,
      title: 'Ako nájsť čas odchodu autobusu',
      slug: 'ako-najst-cas-odchodu-autobusu',
      category: 'doprava',
      author: 'cp.hnonline.sk',
      image: 'https://images.unsplash.com/photo-1565557625275-27f409ad4639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3693&q=80',
      summary: '',
      fake: false,
      content: [
        {
          id: 1,
          type: 'paragraph',
          title: 'Úvod',
          slug: 'uvod',
          text: 'V tomto návode Vám ukážeme, ako si nájsť odchod autobusu, aby ste vedeli kedy vyraziť na cestu. Vďaka internetu je to veľmi rýchle a jednoduché. Po trocha tréningu to zvládnete za pár minút.'
        },
        {
          id: 2,
          type: 'ordered-list',
          title: 'Postup pre imhd.sk',
          slug: 'postup-pre-imhd-sk',
          text: [
            'Najprv si otvoríte vo svojom prehliadači nové okno, následne do miesta vyhľadávania zadáte – imhd.sk',
            'Vľavo hore si vyberiete mesto v ktorom sa nachádzate.',
            'V strede stránky uvidíte text – Kam chcete cestovať? Pod týmto textom máte dve kolonky. Pýtajú sa vás tam na začiatok cesty a cieľ cesty. Zadáte tam vašu počiatočnú zástavku a konečnú zástavku. ',
            'Teraz máte na výber z dvoch možností, buď stlačíte ENTER, alebo jednoducho kliknete na lupu, ktorá symbolizuje vyhľadaj.',
            'Vyhľadá vám to jednotlivé spojenia, vďaka ktorým sa dokážete dostať na cieľ cesty.',
            'Viete si jednoducho pozrieť čas odchod autobusu zo zastávky, a rovnako aj čas príchodu autobusu do cieľovej destinácie.'
          ]
        },
        {
          id: 4,
          type: 'ordered-list',
          title: 'Všeobečný postup',
          slug: 'vseobecny-postup',
          text: [
            'Už čoskoro...'
          ]
        },
        {
          id: 3,
          type: 'paragraph',
          title: 'Záver',
          slug: 'zaver',
          text: 'Tento postup môže byť skvelý spôsob, ako čo najlepšie využiť možnosti verejnej dopravy a ľahko sa dostať tam, kam potrebujete. V pravo nájdete zopár stránok, na ktorých si to viete vyskúšať'
        },
        {
          id: 4,
          type: 'questions',
          title: 'Úlohy',
          slug: 'otazky',
          questions: [
            {
              id: 1,
              question: 'Kedy ide prvá ranná električka číslo 9 zo zastávky Poštová smer Ružinov cez pracovné dni?',
              answer: '',
              answered: false,
              answers: [
                '4:23',
                '04:23',
                '423',
                '4 23',
                '4-23',
                '4.23',
                '4,23'
              ]
            },
            {
              id: 2,
              question: 'V akom intervale chodí autobus číslo 94 o 8. ráno?',
              answer: '',
              answered: false,
              answers: [
                '4',
                '4 minuty',
                'kazde 4 minuty',
                'styri',
                'štyri',
                'každé 4 minúty',
                'kazde styri minuty',
                'kazde štyri minúty'
              ]
            }
          ]
        }
      ],
      recommended: [
        {
          id: 1,
          url: 'https://cp.hnonline.sk/',
          img_url: 'https://cp.hnonline.sk/Portal/MAFRASK/Part/Img/logo-192x192.png'
        },
        {
          id: 2,
          url: 'https://imhd.sk/',
          img_url: 'https://pbs.twimg.com/profile_images/1258132950966648833/Y_O47XCh_400x400.jpg'
        },
        {
          id: 3,
          url: 'https://www.arriva.sk/',
          img_url: 'data:image/png;base64,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'
        }
      ]
    },
    {
      id: 2,
      title: 'Ako spraviť odpočet elektriny cez aplikáciu',
      slug: 'ako-spravit-odpocet-elektriny-cez-aplikaciu',
      category: 'financie',
      author: 'Západoslovenská distribučná',
      image: 'https://images.unsplash.com/photo-1663608786776-72e279f45a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
      summary: '',
      fake: true,
      content: [],
      recommended: []
    },
    {
      id: 3,
      title: 'Ako si nájsť recepty na internete',
      slug: 'ako-si-najst-recepty-na-internete',
      category: 'volny-cas',
      author: 'MIRRI',
      image: 'https://images.unsplash.com/photo-1615224299941-04a854c101d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      summary: '',
      fake: true,
      content: [],
      recommended: []
    }
  ])
}
