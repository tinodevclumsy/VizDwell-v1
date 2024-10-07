const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -26, 0]} receiveShadow>
      <planeGeometry args={[150, 150]} receiveShadow />
      <meshStandardMaterial color="#333232" receiveShadow />
    </mesh>
  );
};

export default Ground;
