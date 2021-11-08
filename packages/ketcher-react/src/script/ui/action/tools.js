/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import { RxnArrowMode, SimpleObjectMode } from 'ketcher-core'

import { bond as bondSchema } from '../data/schema/struct-schema'
import { toBondType } from '../data/convert/structconv'

const toolActions = {
  select: {
    hidden: options => isHidden(options, 'select')
  },
  'select-lasso': {
    title: 'Lasso Selection',
    shortcut: 'Escape',
    action: { tool: 'select', opts: 'lasso' },
    hidden: options => isHidden(options, 'select-lasso')
  },
  'select-rectangle': {
    title: 'Rectangle Selection',
    shortcut: 'Escape',
    action: { tool: 'select', opts: 'rectangle' },
    hidden: options => isHidden(options, 'select-rectangle')
  },
  'select-fragment': {
    title: 'Fragment Selection',
    shortcut: 'Escape',
    action: { tool: 'select', opts: 'fragment' },
    hidden: options => isHidden(options, 'select-fragment')
  },
  erase: {
    title: 'Erase',
    shortcut: ['Delete', 'Backspace'],
    action: { tool: 'eraser', opts: 1 }, // TODO last selector mode is better
    hidden: options => isHidden(options, 'erase')
  },
  chain: {
    title: 'Chain',
    action: { tool: 'chain' },
    hidden: options => isHidden(options, 'chain')
  },
  'enhanced-stereo': {
    shortcut: 'Alt+e',
    title: 'Stereochemistry',
    action: { tool: 'enhancedStereo' }
  },
  'charge-plus': {
    shortcut: '5',
    title: 'Charge Plus',
    action: { tool: 'charge', opts: 1 },
    hidden: options => isHidden(options, 'charge-plus')
  },
  'charge-minus': {
    shortcut: '5',
    title: 'Charge Minus',
    action: { tool: 'charge', opts: -1 },
    hidden: options => isHidden(options, 'charge-minus')
  },
  transforms: {
    hidden: options => isHidden(options, 'transforms')
  },
  'transform-rotate': {
    shortcut: 'Alt+r',
    title: 'Rotate Tool',
    action: { tool: 'rotate' },
    hidden: options => isHidden(options, 'transform-rotate')
  },
  'transform-flip-h': {
    shortcut: 'Alt+h',
    title: 'Horizontal Flip',
    action: { tool: 'rotate', opts: 'horizontal' },
    hidden: options => isHidden(options, 'transform-flip-h')
  },
  'transform-flip-v': {
    shortcut: 'Alt+v',
    title: 'Vertical Flip',
    action: { tool: 'rotate', opts: 'vertical' },
    hidden: options => isHidden(options, 'transform-flip-v')
  },
  sgroup: {
    shortcut: 'Mod+g',
    title: 'S-Group',
    action: { tool: 'sgroup' }
  },
  'sgroup-data': {
    shortcut: 'Mod+g',
    title: 'Data S-Group',
    action: { tool: 'sgroup', opts: 'DAT' }
  },
  'reaction-arrow': {
    title: 'Reaction Arrow Tool',
    action: { tool: 'reactionarrow', opts: RxnArrowMode.simple }
  },
  'reaction-arrow-equilibrium': {
    title: 'Reaction Arrow Equilibrium Tool',
    action: { tool: 'reactionarrow', opts: RxnArrowMode.equilibrium }
  },
  'reaction-plus': {
    title: 'Reaction Plus Tool',
    action: { tool: 'reactionplus' }
  },
  'reaction-map': {
    title: 'Reaction Mapping Tool',
    action: { tool: 'reactionmap' }
  },
  'reaction-unmap': {
    title: 'Reaction Unmapping Tool',
    action: { tool: 'reactionunmap' }
  },
  'rgroup-label': {
    shortcut: 'Mod+r',
    title: 'R-Group Label Tool',
    action: { tool: 'rgroupatom' }
  },
  'rgroup-fragment': {
    shortcut: ['Mod+Shift+r', 'Mod+r'],
    title: 'R-Group Fragment Tool',
    action: { tool: 'rgroupfragment' }
  },
  'rgroup-attpoints': {
    shortcut: 'Mod+r',
    title: 'Attachment Point Tool',
<<<<<<< HEAD
    action: { tool: 'apoint' }
=======
    action: { tool: 'apoint' },
    hidden: options => isHidden(options, 'rgroup-attpoints')
  },
  shapes: {
    hidden: options => isHidden(options, 'shapes')
>>>>>>> f020fdd2 (#862 add possibility to hide controls by query parameter and fixed the ability to hide groups for transforms, bonds (#884))
  },
  'shape-ellipse': {
    title: 'Shape Ellipse',
    action: { tool: 'simpleobject', opts: SimpleObjectMode.ellipse }
  },
  'shape-rectangle': {
    title: 'Shape Rectangle',
    action: { tool: 'simpleobject', opts: SimpleObjectMode.rectangle }
  },
  'shape-line': {
    title: 'Shape Line',
    action: { tool: 'simpleobject', opts: SimpleObjectMode.line }
  },
  text: {
    title: 'Add text',
<<<<<<< HEAD
    action: { tool: 'text' }
=======
    action: { tool: 'text' },
    hidden: options => isHidden(options, 'text')
  },
  bonds: {
    hidden: options => isHidden(options, 'bonds')
>>>>>>> f020fdd2 (#862 add possibility to hide controls by query parameter and fixed the ability to hide groups for transforms, bonds (#884))
  }
}

const bondCuts = {
  single: '1',
  double: '2',
  triple: '3',
  up: '1',
  down: '1',
  updown: '1',
  crossed: '2',
  any: '0',
  aromatic: '4'
}

const typeSchema = bondSchema.properties.type

export default typeSchema.enum.reduce((res, type, i) => {
  res[`bond-${type}`] = {
    title: `${typeSchema.enumNames[i]} Bond`,
    shortcut: bondCuts[type],
    action: {
      tool: 'bond',
      opts: toBondType(type)
    },
    hidden: options => isHidden(options, `bond-${type}`)
  }
  return res
}, toolActions)
