import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

import('prismjs/themes/prism-tomorrow.css')
import('prismjs/plugins/line-numbers/prism-line-numbers.css')


export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
