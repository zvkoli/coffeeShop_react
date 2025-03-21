import { useSpring , animated } from 'react-spring';

const NotFound = () => {

  const springPropsOne = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    config: { duration: 800 },
  })

  const springPropsTwo = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    config: { duration: 600 },
  })

  const springPropsThree = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    config: { duration: 400 },
  })

  return (
    <div className='h-screen w-full flex flex-row justify-center items-center font-Urbanist uppercase bg-zinc-100 pt-14'>
      <div className='h-full w-7/12 flex flex-col justify-center items-center gap-2 pb-24'>
        <animated.h1
        className='text-9xl font-extrabold text-orange-400'
        style={springPropsOne}>
          Oops !
        </animated.h1>
        <animated.h1
        className='text-3xl font-extrabold text-black/80'
        style={springPropsTwo}>
          404 - page not found
        </animated.h1>
        <animated.p 
        className='text-xl font-extrabold text-black/80' 
        style={springPropsThree}>
          the requested url badpage wes not found on this server .
        </animated.p>
      </div>
    </div>
  );
}

export default NotFound;