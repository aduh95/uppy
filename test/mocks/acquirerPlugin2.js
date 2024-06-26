const { UIPlugin } = require('../../packages/@uppy/core')

module.exports = class TestSelector2 extends UIPlugin {
  constructor (uppy, opts) {
    super(uppy, opts)
    this.type = 'acquirer'
    this.id = 'TestSelector2'
    this.name = this.constructor.name

    this.mocks = {
      run: jest.fn(),
      update: jest.fn(),
      uninstall: jest.fn(),
    }
  }

  run (results) {
    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results,
    })
    this.mocks.run(results)
    return Promise.resolve('success')
  }

  update (state) {
    this.mocks.update(state)
  }

  uninstall () {
    this.mocks.uninstall()
  }
}
