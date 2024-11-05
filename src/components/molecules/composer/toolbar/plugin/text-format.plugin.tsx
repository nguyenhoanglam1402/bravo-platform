import {
  Bold,
  ChevronDown,
  EllipsisVertical,
  Italic,
  Redo2,
  StrikethroughIcon,
  Subscript,
  Superscript,
  Underline,
  Undo2
} from 'lucide-react'
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND
} from 'lexical'
import { useCallback, useEffect, useState } from 'react'
import { mergeRegister } from '@lexical/utils'
import ToolbarButton from '../component/button'
import { Divider } from 'antd'
import ToolbarPropover from '../component/popover/popover'

export default function ToolbarTextFormatPlugin({ editor }: { editor: LexicalEditor }) {
  const [isBold, setBold] = useState<boolean>(false)
  const [isItalic, setItalic] = useState<boolean>(false)
  const [isUnderline, setUnderline] = useState<boolean>(false)
  const [isStrikeThrough, setIsStrikethrough] = useState<boolean>(false)
  const [canUndo, setCanUndo] = useState<boolean>(false)
  const [canRedo, setCanRedo] = useState<boolean>(false)
  const [isSuperscript, setIsSuperscript] = useState<boolean>(false)
  const [isSubscript, setIsSubscript] = useState<boolean>(false)

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      setBold(selection.hasFormat('bold'))
      setItalic(selection.hasFormat('italic'))
      setUnderline(selection.hasFormat('underline'))
      setIsStrikethrough(selection.hasFormat('strikethrough'))
      setIsSuperscript(selection.hasFormat('superscript'))
      setIsSubscript(selection.hasFormat('subscript'))
    }
  }, [])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $updateToolbar()
          return false
        },
        1
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload)
          return false
        },
        1
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload)
          return false
        },
        1
      )
    )
  }, [editor, $updateToolbar])

  const handleFormat = (format: 'bold' | 'italic' | 'underline' | 'strikethrough' | 'subscript' | 'superscript') => {
    editor.update(() => {
      const selection = $getSelection()

      if ($isRangeSelection(selection)) {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)
      }
    })
  }

  return (
    <>
      <div className='flex gap-1'>
        <ToolbarButton onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)} disabled={!canUndo}>
          <Undo2 size={20} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)} disabled={!canRedo}>
          <Redo2 size={20} />
        </ToolbarButton>
      </div>

      <Divider type='vertical' className='h-[34px]' />

      <div className='flex gap-1'>
        <ToolbarButton onClick={() => handleFormat('bold')} actived={isBold}>
          <Bold size={20} strokeWidth={3} />
        </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('italic')} actived={isItalic}>
          <Italic size={20} />
        </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('underline')} actived={isUnderline}>
          <Underline size={20} />
        </ToolbarButton>
        <ToolbarPropover icon={<ChevronDown size={20} />}>
          <div className='flex gap-1'>
            <ToolbarButton onClick={() => handleFormat('strikethrough')} actived={isStrikeThrough}>
              <StrikethroughIcon size={20} />
            </ToolbarButton>
            <ToolbarButton onClick={() => handleFormat('subscript')} actived={isSubscript}>
              <Subscript size={20} />
            </ToolbarButton>
            <ToolbarButton onClick={() => handleFormat('superscript')} actived={isSuperscript}>
              <Superscript size={20} />
            </ToolbarButton>
          </div>
        </ToolbarPropover>
      </div>
    </>
  )
}
