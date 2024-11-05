// EditorToolbar.tsx
import React from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import './styles.css'
import ToolbarTextFormatPlugin from './plugin/text-format.plugin'

const EditorToolbar: React.FC = () => {
  const [editor] = useLexicalComposerContext()

  return (
    <div className='editor-toolbar'>
      <ToolbarTextFormatPlugin editor={editor} />
    </div>
  )
}

export default EditorToolbar
