const Uppy = require('@uppy/core')
const Dashboard = require('@uppy/dashboard')
const Tus = require('@uppy/tus')

const isOnTravis = !!(process.env.TRAVIS && process.env.CI)
const endpoint = isOnTravis ? 'http://companion.test:1080' : 'http://localhost:1080'

const uppyDashboard = new Uppy({
  id: 'uppyDashboard',
  debug: true,
})

uppyDashboard
  .use(Dashboard, {
    target: '#uppyDashboard',
    inline: true,
  })
  .use(Tus, { endpoint: `${endpoint}/files/` })
