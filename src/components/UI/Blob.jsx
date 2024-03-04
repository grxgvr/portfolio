export const AnimatedBlob = ({className}) => {

  return <div 
    className={`animate-blob absolute w-[100vh] h-full rounded-[60% 40% 80% 35% / 45% 45% 80% 66%] will-change-[border-radius, transform] opacity-5 blur-sm ${className} z-10`}
  />
}
 
