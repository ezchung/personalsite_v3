import React from 'react'
import { motion } from 'framer-motion'
//React and the motion component from Framer Motion, which we'll use for animations.

interface Symbol {
  id: number
  content: string
  x: number
  y: number
  size: number
  duration: number
  color: string
}

//define two interfaces: Symbol (for each animated symbol) and AnimatedSymbolsProps (for the component props).


/**
 * 
 * @returns AnimatedSymbols Component
 */
const AnimatedSymbols: React.FC = () => {
  const symbols: Symbol[] = React.useMemo(() => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      content: ['{}', '()', '[]'][Math.floor(Math.random() * 5)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 32 + 24,
      duration: Math.random() * 20 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  }, [])

  /** Notes for codebase
   * useMemo is used to memoize the symbol generation, preventing unnecessary re-renders.
   * We create an array of 30 symbols, each with random properties (position, size, color, etc.).
   * The content is randomly chosen from {}, (), or [].
   */


  /**
   * We map over the symbols array, creating a motion.div for each symbol.
   * Each symbol is positioned absolutely based on its x and y values.
   * The animate prop defines the movement: symbols move diagonally from top-left to bottom-right and back, while fading in and out.
   * The transition prop sets the animation duration and behavior (infinite repeat, reversing direction).
    
  So result should be in practice
  1. When component mounts, generates an array of 30 random symbols
  2. These symbols are rendered as absolutely positioned motion.div elements
  3. Each symbol animates continuously, moving diagonally 
  4. The content passed as children to this component is rendered on top of the animated background.
  */
  return (
    <div className="w-full h-full">
      {symbols.map((symbol) => (
        <motion.div
          key={symbol.id}
          className="absolute font-mono font-bold"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            fontSize: `${symbol.size}px`,
            color: symbol.color,
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            x: {
              duration: symbol.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            },
            y: {
              duration: symbol.duration * 1.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            },
            opacity: {
              duration: symbol.duration / 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            },
          }}
        >
          {symbol.content}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedSymbols