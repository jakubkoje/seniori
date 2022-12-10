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
          img_url: 'https://play-lh.googleusercontent.com/8X_oMEeL66WOKhLYhInEROjFpSCFWyrXpjcHNr1Ed1zkgLZ1Ia-2sgT-p0zLcq8V2kAv=w480-h960-rw'
        }
      ]
    },
    {
      id: 1,
      title: 'Ako spraviť odpočet elektriny cez aplikáciu',
      slug: 'ako-spravit-odpocet-elektriny-cez-aplikaciu',
      category: 'financie',
      author: 'Západoslovenská distribučná',
      image: 'https://images.unsplash.com/photo-1663608786776-72e279f45a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
      summary: '',
      content: [],
      recommended: []
    },
    {
      id: 1,
      title: 'Ako si nájsť recepty na internete',
      slug: 'ako-si-najst-recepty-na-internete',
      category: 'volny-cas',
      author: 'MIRRI',
      image: 'https://images.unsplash.com/photo-1615224299941-04a854c101d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      summary: '',
      content: [],
      recommended: []
    }
  ])
}
