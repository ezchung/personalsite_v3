import React from 'react'
import { motion } from 'framer-motion'

interface Symbol {
  id: number
  content: string
  x: number
  y: number
  size: number
  duration: number
  color: string
}

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