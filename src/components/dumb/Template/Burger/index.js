import React from 'react';
import { useSpring, animated } from 'react-spring';

const Burger = ({ toggleBurger, isOpenBurger }) => {
  const first = useSpring({
    transform: isOpenBurger ? 'translate(5px, 32px) rotate(-45deg)' : 'translate(2px, 7px) rotate(0deg)',
  });
  const second = useSpring({
    transform: isOpenBurger ? 'translate(10px, 4px) rotate(45deg)' : 'translate(2px, 19px) rotate(0deg)',
  });
  const third = useSpring({
    transform: isOpenBurger ? 'translate(5px, 32px) rotate(-45deg)' : 'translate(2px, 31px) rotate(0deg)',
  });

  return (
    <div style={{ background: 'transparent', padding: '20px' }}>
      <svg
        onClick={() => toggleBurger(!isOpenBurger)}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#fafafa"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="60" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </div>
  );
};

export default Burger;
