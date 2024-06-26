const Uppy = require('@uppy/core')
const DragDrop = require('@uppy/drag-drop')
const XHRUpload = require('@uppy/xhr-upload')
const ProgressBar = require('@uppy/progress-bar')
const DeepFrozenStore = require('../../resources/DeepFrozenStore.js')

const uppyi18n = new Uppy({
  id: 'uppyi18n',
  debug: true,
  autoProceed: true,
  store: DeepFrozenStore(),
})

uppyi18n
  .use(DragDrop, {
    target: '#uppyi18n',
    locale: {
      strings: {
        dropHereOr: 'Перенесите файлы сюда или %{browse}',
        browse: 'выберите',
      },
    },
  })
  .use(ProgressBar, { target: '#uppyi18n-progress' })
  .use(XHRUpload, { endpoint: 'https://xhr-server.herokuapp.com/upload' })
