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

import { fromMultipleMove, fromPlusAddition } from 'ketcher-core'

function ReactionPlusTool(editor) {
  if (!(this instanceof ReactionPlusTool)) return new ReactionPlusTool(editor)

  this.editor = editor
  this.editor.selection(null)
}

ReactionPlusTool.prototype.mousedown = function (event) {
  var rnd = this.editor.render
  var ci = this.editor.findItem(event, ['rxnPluses'])
  if (ci && ci.map === 'rxnPluses') {
    this.editor.hover(null)
    this.editor.selection({ rxnPluses: [ci.id] })
    this.dragCtx = { xy0: rnd.page2obj(event) }
  }
}

ReactionPlusTool.prototype.mousemove = function (event) {
  var rnd = this.editor.render
  if ('dragCtx' in this) {
    if (this.dragCtx.action) this.dragCtx.action.perform(rnd.ctab)
    this.dragCtx.action = fromMultipleMove(
      rnd.ctab,
      this.editor.selection() || {},
      rnd.page2obj(event).sub(this.dragCtx.xy0)
    )
    this.editor.update(this.dragCtx.action, true)
  } else {
    this.editor.hover(this.editor.findItem(event, ['rxnPluses']))
  }
}

ReactionPlusTool.prototype.mouseup = function () {
  if (!this.dragCtx) return true

  if (this.dragCtx.action) {
    this.editor.update(this.dragCtx.action) // TODO investigate, subsequent undo/redo fails
  }

  delete this.dragCtx
  return true
}

ReactionPlusTool.prototype.click = function (event) {
  const rnd = this.editor.render
  const ci = this.editor.findItem(event, ['rxnPluses'])
  if (!ci) {
    this.editor.update(fromPlusAddition(rnd.ctab, rnd.page2obj(event)))
  }
}

export default ReactionPlusTool
