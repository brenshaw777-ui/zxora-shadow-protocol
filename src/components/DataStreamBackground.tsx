import { motion } from "framer-motion";

const DataStreamBackground = () => {
  // Generate 16 columns of data across the viewport
  const columns = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${(i + 1) * 6}%`,
    duration: 25 + Math.random() * 20, // 25-45 seconds
    delay: Math.random() * 10,
    isAccent: Math.random() > 0.85, // 15% chance of accent color
  }));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="absolute top-0 font-mono text-[10px] leading-5"
          style={{ 
            left: col.left,
            color: col.isAccent 
              ? `hsla(${Math.random() > 0.5 ? 'var(--cool-ember)' : 'var(--iris-steel)'}, 0.15)`
              : 'rgba(255,255,255,0.06)'
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '150vh' }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            delay: col.delay,
            ease: "linear",
          }}
        >
          {Array.from({ length: 80 }, (_, idx) => (
            <div key={idx}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default DataStreamBackground;
