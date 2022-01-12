import React from 'react'
import 'miew/dist/Miew.min.css'
import 'ketcher-react/dist/index.css'

import { RemoteStructServiceProvider } from 'ketcher-core'
import {Input} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Editor, ButtonsConfig } from 'ketcher-react'
// @ts-ignore
import Miew from 'miew'

const getHiddenButtonsConfig = (): ButtonsConfig => {
  // const searchParams = new URLSearchParams(window.location.search)
  // const hiddenButtons = searchParams.get('hiddenControls')
  const hiddenButtons = 'zoom-in,zoom-out,undo,redo'
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
      errorHandler={msg=>console.log(msg)}
      staticResourcesUrl={process.env.PUBLIC_URL}
      buttons={hiddenButtonsConfig}
      structServiceProvider={structServiceProvider}
      onInit={(ketcher) => {
        ;(global as any).ketcher = ketcher
        // var mol = [
        //   '',
        //   '  Ketcher 02151213522D 1   1.00000     0.00000     0',
        //   '',
        //   '  6  6  0     0  0            999 V2000',
        //   '   -1.1750    1.7500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
        //   '   -0.3090    1.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
        //   '   -0.3090    0.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
        //   '   -1.1750   -0.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
        //   '   -2.0410    0.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
        //   '   -2.0410    1.2500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0',
        //   '  1  2  1  0     0  0',
        //   '  2  3  2  0     0  0',
        //   '  3  4  1  0     0  0',
        //   '  4  5  2  0     0  0',
        //   '  5  6  1  0     0  0',
        //   '  6  1  2  0     0  0',
        //   'M  END'
        // ].join('\n')
        const mol =
  "\n     RDKit          2D\n\n 28 31  0  0  0  0  0  0  0  0999 V2000\n    2.5554   -0.6816    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4718    1.0639    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7191   -0.9561    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.0594    1.9215    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4648    2.6875    0.0000 S   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.0204    0.6293    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6738   -1.1892    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5511    1.0547    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2968    0.8274    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.6083   -1.9238    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.4450   -2.5236    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5518   -1.6893    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.9862   -0.7448    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4648    1.4145    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0535    0.1757    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.3239   -2.1183    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.4227   -1.1210    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.0621    0.1819    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.6384   -0.5433    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1888   -0.1757    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4747    2.4226    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1903    1.2328    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5625    1.0460    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.8976   -0.3428    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.8823   -0.3119    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.9008    0.6972    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.7750   -0.7113    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2616    1.8724    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n 18 25  1  0\n 13 20  1  0\n 18 26  1  0\n  9 14  1  0\n  4  5  1  0\n 17 19  1  0\n  3 10  1  0\n  1 15  1  0\n  8 18  1  0\n  6 24  1  0\n  3 24  1  0\n 18 27  1  0\n 23 28  1  0\n  1 12  1  0\n 11 16  1  0\n 15 23  1  0\n  2 14  1  0\n  9 22  1  0\n  6 22  2  0\n 10 11  2  0\n  2  4  2  0\n  5 21  1  0\n 13 24  2  0\n 16 17  2  0\n  3 19  2  0\n  9 20  2  0\n  1  7  1  0\n 14 21  2  0\n  8 23  1  0\n  1 27  1  0\n  4 28  1  0\nM  END\n$$$$\n";
        ketcher.setMolecule(mol)
      }}
    />
    </>
  )
}

export default App
