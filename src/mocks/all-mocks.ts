import { setupWorker, rest } from 'msw'

function getRandomArbitrary(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}
 
export const mocks = [
  rest.get('/testimonials', (req, res, ctx) => {
    const { user } = req.params
 
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({
        name: `Martin Klöppner`,
        quote:  getRandomArbitrary(0, 3),
        userId: 1
      }),
    )
  }),
  rest.get('/users', (req, res, ctx) => {
    const { user } = req.params
 
    return res(
      ctx.delay(4000),
      ctx.status(200),
      ctx.json([{
        id: 1,
        profileIcon: 'https://media.licdn.com/dms/image/C4D03AQFj2D9iDa7oJA/profile-displayphoto-shrink_400_400/0/1516997069619?e=1699488000&v=beta&t=1Rev1nSyFTTO8tvdhjTyBo532QrRt9Cb7yT4Q_Z7rnA'
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
        quote: 'You can avoid complexity in the first place, or you can try to fix it'
      },
      {
        userId: 1,
        quote: 'Many dependencies are better then hirarchical and conditional ones.',
      },
      {
        userId: 1,
        quote: 'The same people on the same tasks will always do the same mistakes until they admit them.',
      },
      {
        userId: 1,
        quote: 'You need to be capable AND willing to achieve great results.',
      }]),
    )
  }),
]
 
const worker = setupWorker(...mocks)
worker.start()
 
export { worker, rest }