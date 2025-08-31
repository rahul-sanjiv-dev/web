import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
            {title}
            {/* Animated underline */}
            <motion.span
              className="absolute left-0 bottom-[-6px] h-[3px] w-full rounded-full"
              style={{ background: "linear-gradient(90deg, var(--neon), var(--neon2))" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </h2>
          {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
        </div>
        {children}
      </motion.div>
    </section>
  )
}
