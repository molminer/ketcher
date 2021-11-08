import 'miew/dist/Miew.min.css'
import 'ketcher-react/dist/index.css'

import { Ketcher, RemoteStructServiceProvider } from 'ketcher-core'

import { Editor, ButtonsConfig } from 'ketcher-react'
// @ts-ignore
import Miew from 'miew'

const getHiddenButtonsConfig = (): ButtonsConfig => {
  const searchParams = new URLSearchParams(window.location.search)
  const hiddenButtons = searchParams.get('hiddenControls')

  if (!hiddenButtons) return {}

  return hiddenButtons.split(',').reduce((acc, button) => {
    if (button) acc[button] = { hidden: true }

    return acc
  }, {})
}

;(global as any).Miew = Miew

let structServiceProvider: any = new RemoteStructServiceProvider(
  process.env.API_PATH || process.env.REACT_APP_API_PATH!
)
if (process.env.MODE === 'standalone') {
  const { StandaloneStructServiceProvider } = require('ketcher-standalone')
  structServiceProvider = new StandaloneStructServiceProvider()
}

const App = () => {
  const hiddenButtonsConfig = getHiddenButtonsConfig()

  return (
    <>
    <br/>
    <span>.....<Input prefix={<UserOutlined />}></Input></span>
    <Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      buttons={hiddenButtonsConfig}
      structServiceProvider={structServiceProvider}
      onInit={(ketcher) => {
        var mol = [
          '',
          '  Ketcher 02151213522D 1   1.00000     0.00000     0',
          '',
          '  6  6  0     0  0            999 V2000',
          '   -1.1750    1.7500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
          '   -0.3090    1.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
          '   -0.3090    0.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
          '   -1.1750   -0.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
          '   -2.0410    0.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
          '   -2.0410    1.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
          '  1  2  1  0     0  0',
          '  2  3  2  0     0  0',
          '  3  4  1  0     0  0',
          '  4  5  2  0     0  0',
          '  5  6  1  0     0  0',
          '  6  1  2  0     0  0',
          'M  END'
        ].join('\n')
        ketcher.setMolecule(mol)
      }}
    />
    </>
  )
}

export default App
