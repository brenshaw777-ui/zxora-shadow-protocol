import { motion } from "framer-motion";

const DataStreamBackground = () => {
  // Generate 18 columns of data across the viewport
  const columns = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i + 1) * 5.5}%`,
    duration: 28 + Math.random() * 22, // 28-50 seconds
    delay: Math.random() * 10,
    isAccent: Math.random() > 0.88, // 12% chance of accent color
  }));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="absolute font-mono text-[9px] leading-5"
          style={{ 
            left: col.left,
            color: col.isAccent 
              ? 'hsla(159, 100%, 45%, 0.35)'
              : 'rgba(255,255,255,0.08)'
          }}
          initial={{ y: '-120%' }}
          animate={{ y: '120%' }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            delay: col.delay,
            ease: "linear",
          }}
        >
          {Array.from({ length: 100 }, (_, idx) => (
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
