import { EditorThemeClasses } from 'lexical'

export const theme: EditorThemeClasses = {
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    subscript: 'align-text-bottom text-xs',
    superscript: 'align-text-top text-xs'
  },
  heading: {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-semibold'
  },
  alignLeft: 'text-left',
  alignCenter: 'text-center',
  alignRight: 'text-right',
  blockquote: 'pl-4 border-l-2 italic',
  link: 'text-blue-500 underline',
  highlight: 'bg-yellow-200'
}
