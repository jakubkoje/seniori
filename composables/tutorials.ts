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
          text: 'If you\'re an older person who wants to learn how to check the departure times of buses on the internet, this tutorial is for you. Using the internet to check bus schedules can be a convenient and easy way to plan your trips and make sure you get where you need to go on time. Here\'s a step-by-step guide on how to do it:'
        },
        {
          id: 2,
          type: 'ordered-list',
          title: 'Všeobecný postup',
          slug: 'vseobecny-postup',
          text: [
            'Find the website of the transportation agency that operates the buses in your area. This information should be available on their official website, which you can find by doing a quick internet search. The website will likely have a domain name that includes the name of the agency, such as "citytransit.com" or "countybus.org".\n',
            'Once you\'ve found the website, look for a section that is dedicated to schedules or departure times. This section should have a list of all the routes that the agency operates, along with the corresponding departure times. The section may be labeled as "Schedules", "Departure Times", or something similar.\n',
            'Select the route and the specific stop you want to check to see the departure times for that route and stop. To do this, you\'ll need to know the route number or name, as well as the name or location of the stop you want to check. This information should be available on the website or on signs at the bus stop.\n',
            'If you\'re not sure which route to choose or which stop to select, you can use the website\'s search function to find the information you need. Simply enter the name of the route or stop you\'re looking for, and the website will provide you with the information you need. Some websites may also have a map or list of stops that you can use to find the information you need.\n',
            'Once you\'ve selected the route and stop, the website will display a list of the upcoming departure times for that route and stop. This information will be displayed in a table or schedule format, with the times listed in chronological order. The times may be listed in military time (using a 24-hour clock) or in a standard 12-hour format.\n',
            'Some websites may also offer additional features, such as the ability to set reminders or alerts for when the bus is about to arrive. This can be a great way to make sure you don\'t miss your bus, especially if you\'re not used to using public transportation. To set a reminder or alert, you\'ll need to create an account on the website and provide your contact information.\n'
          ]
        },
        {
          id: 3,
          type: 'paragraph',
          title: 'Záver',
          slug: 'zaver',
          text: 'By following these steps, you can easily check the departure times of buses on the internet and plan your trips with confidence. This can be a great way to make the most of your public transportation options and get where you need to go with ease.'
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
