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

import {
  ToolbarGroupItem,
  ToolbarGroupItemCallProps,
  ToolbarGroupItemProps
} from '../../ToolbarGroupItem'

import React from 'react'
import { makeItems } from '../../ToolbarGroupItem/utils'

const shapeOptions = makeItems([
  'shape-ellipse',
  'shape-rectangle',
  'shape-line'
])

interface ShapeProps extends Omit<ToolbarGroupItemProps, 'id' | 'options'> {
  height?: number
}
interface ShapeCallProps extends ToolbarGroupItemCallProps {}

type Props = ShapeProps & ShapeCallProps

const Shape = (props: Props) => {
<<<<<<< HEAD
  return (
    <ToolbarGroupItem id="shape-ellipse" options={shapeOptions} {...props} />
  )
=======
  return <ToolbarGroupItem id="shapes" options={shapeOptions} {...props} />
>>>>>>> f020fdd2 (#862 add possibility to hide controls by query parameter and fixed the ability to hide groups for transforms, bonds (#884))
}

export type { ShapeProps, ShapeCallProps }
export { Shape }
