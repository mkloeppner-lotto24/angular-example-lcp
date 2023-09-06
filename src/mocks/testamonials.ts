import { setupWorker, rest } from 'msw'
 
export const mocks = [
  rest.get('/testimonials', (req, res, ctx) => {
    const { user } = req.params
 
    return res(
      ctx.status(200),
      ctx.json({
        name: `Martin Klöppner`,
        quote: `Endless seeking for perfection will bring you nowhere.
         Just go the next better step and you arrive further.`,
        userId: 1
      }),
    )
  }),
  rest.get('/users', (req, res, ctx) => {
    const { user } = req.params
 
    return res(
      ctx.status(200),
      ctx.json([{
        id: 1,
        profileIcon: 'https://media.licdn.com/dms/image/C4D03AQFj2D9iDa7oJA/profile-displayphoto-shrink_400_400/0/1516997069619?e=1699488000&v=beta&t=1Rev1nSyFTTO8tvdhjTyBo532QrRt9Cb7yT4Q_Z7rnA'
      }]),
    )
  }),
]
 
const worker = setupWorker(...mocks)
worker.start()
 
export { worker, rest }