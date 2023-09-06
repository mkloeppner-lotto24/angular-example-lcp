import { setupWorker, rest } from 'msw'
import { getRandomArbitrary } from 'src/app/utils/random'

export const mocks = [
  rest.get('/testimonials', (req, res, ctx) => {
    const { user } = req.params

    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json([{
        name: `Martin Klöppner`,
        quote: getRandomArbitrary(0, 3),
        userId: 1
      },
      {
        name: `Homer Simpson`,
        quote: getRandomArbitrary(0, 3),
        userId: 2
      },
      {
        name: `Bart Simpson`,
        quote: getRandomArbitrary(0, 3),
        userId: 3
      },
      {
        name: `Iron Man`,
        quote: getRandomArbitrary(0, 3),
        userId: 4
      },
      {
        name: `Iron Man`,
        quote: getRandomArbitrary(0, 3),
        userId: 5
      },
      {
        name: `Iron Man`,
        quote: getRandomArbitrary(0, 3),
        userId: 6
      }
      ]),
    )
  }),
  rest.get('/users', (req, res, ctx) => {
    const { user } = req.params

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json([{
        id: 1,
        profileIcon: 'https://media.licdn.com/dms/image/C4D03AQFj2D9iDa7oJA/profile-displayphoto-shrink_400_400/0/1516997069619?e=1699488000&v=beta&t=1Rev1nSyFTTO8tvdhjTyBo532QrRt9Cb7yT4Q_Z7rnA'
      }, 
      {
        id: 2,
        profileIcon: 'https://i1.sndcdn.com/avatars-000683197436-xmzgxf-t500x500.jpg'
      },
      {
        id: 3,
        profileIcon: 'https://whatsondisneyplus.com/wp-content/uploads/2021/09/bart-.png'
      }, 
      {
        id: 4,
        profileIcon: 'https://i.pinimg.com/originals/0e/f2/fb/0ef2fb13f53e1a50271b2e3bc2714a0f.jpg'
      },
      {
        id: 5,
        profileIcon: 'https://i.pinimg.com/originals/0e/f2/fb/0ef2fb13f53e1a50271b2e3bc2714a0f.jpg'
      },
      {
        id: 6,
        profileIcon: 'https://i.pinimg.com/originals/0e/f2/fb/0ef2fb13f53e1a50271b2e3bc2714a0f.jpg'
      }]),
    )
  }),

  rest.get('/quotes', (req, res, ctx) => {
    const { user } = req.params

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json([{
        userId: 1,
        quote: 'You can avoid complexity in the first place, or you can try to fix it.'
      },
      {
        userId: 1,
        quote: 'Many flat dependencies are better then hirarchical and conditional ones.',
      },
      {
        userId: 1,
        quote: 'Simple aint easy, just because it feels easy for you does not mean that a harder solution aint be more simple.',
      },
      {
        userId: 1,
        quote: 'You need to be capable AND willing to achieve great results.',
      },
      {
        userId: 2,
        quote: 'D\'oooohhh. I need some burger from Krusty! And a Donut.'
      },
      {
        userId: 2,
        quote: 'If God didn’t want me to eat chicken in church, then he would have made gluttony a sin.',
      },
      {
        userId: 2,
        quote: 'Kids are great. You can teach them to hate what you hate and, with the Internet and all, they practically raise themselves.',
      },
      {
        userId: 2,
        quote: 'I want to share something with you: The three little sentences that will get you through life. Number 1: Cover for me. Number 2: Oh, good idea, Boss! Number 3: It was like that when I got here.',
      },
      {
        userId: 3,
        quote: 'Eat my shorts! Eat my shorts! Eat my shorts! Eat my shorts!'
      },
      {
        userId: 3,
        quote: 'No, you don’t understand. I tried. I really tried.',
      },
      {
        userId: 3,
        quote: 'You’re asking the wrong guy, Milhouse, you’re asking the wrong guy.',
      },
      {
        userId: 3,
        quote: 'Well, we hit a little snag when the universe sort of collapsed on itself. But Dad seemed cautiously optimistic.',
      },
      {
        userId: 4,
        quote: 'D\'oooohhh'
      },
      {
        userId: 4,
        quote: 'Pass auf junge ich ... 😵.',
      },
      {
        userId: 4,
        quote: 'Flanders!!',
      },
      {
        userId: 4,
        quote: 'Bart!!!.',
      },
      {
        userId: 5,
        quote: 'D\'oooohhh'
      },
      {
        userId: 5,
        quote: 'Pass auf junge ich ... 😵.',
      },
      {
        userId: 5,
        quote: 'Flanders!!',
      },
      {
        userId: 5,
        quote: 'Bart!!!.',
      },
      {
        userId: 6,
        quote: 'D\'oooohhh'
      },
      {
        userId: 6,
        quote: 'Pass auf junge ich ... 😵.',
      },
      {
        userId: 6,
        quote: 'Flanders!!',
      },
      {
        userId: 6,
        quote: 'Bart!!!.',
      }]),
    )
  }),
]

const worker = setupWorker(...mocks)
worker.start()

export { worker, rest }