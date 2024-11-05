import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { theme } from './theme'
import { EditorState, LexicalEditor } from 'lexical'
import './styles.css'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import EditorToolbar from './toolbar'

export default function CoreComposeModule() {
  const onError = (error: Error) => {
    console.error('Lexical Error:', error)
  }

  const handleEditorChange = (editorState: EditorState, editor: LexicalEditor) => {
    editorState.read(() => {
      const htmlContent = editor.getEditorState().toJSON()
      console.log('🚀 ~ editorState.read ~ htmlContent:', htmlContent)
    })
  }

  const initialConfig = {
    namespace: 'MyEditor',
    theme: theme,
    onError: onError
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className='flex flex-col'>
        <EditorToolbar />
        <div className='editor-container'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<div className='editor-placeholder'>Enter some text...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={handleEditorChange} />
          <HistoryPlugin />
        </div>
      </div>
    </LexicalComposer>
  )
}
