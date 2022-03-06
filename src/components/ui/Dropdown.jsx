import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Button from './Button'

import styles from './Dropdown.module.css'

export default function Dropdown({ children }) {
  const [isShowing, setIsShowing] = useState(false)

  const toggleShow = () => setIsShowing(currentValue => !currentValue)

  return (
    <div className={ styles.dropdown }>
      <Button
        className={ styles.btn }
        variant='text'
        label='Другое'
        onClick={ toggleShow }
      />
      <AnimatePresence>
        { isShowing && (
          <motion.div
            className={ styles.menu }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ul className={ styles.list } onClick={ () => setIsShowing(false) }>
              { children }
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DropdownItem({ label, href }) {
  return (
    <li>
      <Button
        className={ styles.menuItem }
        variant='text'
        href={ href }
        label={ label }
      />
    </li>
  )
}

Dropdown.Item = DropdownItem