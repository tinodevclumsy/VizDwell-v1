export const VIEW_POSITIONS = {
  DEFAULT: {
    name: "default",
    position: {
      x: 42.559498227315224,
      y: 13.406391056253087,
      z: -32.155214032656815,
    },
    target: {
      x: 0,
      y: 0,
      z: 0,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 55,
    },
  },
  LIVING_ROOM: {
    name: "living room",
    position: {
      x: 11.22501920307197,
      y: -0.6524913452611196,
      z: -12.518756964138614,
    },
    target: {
      x: -0.34610188818456467,
      y: -2.184068485410255,
      z: -0.6554313118264463,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 18,
    },
  },
  KITCHEN: {
    name: "kitchen",
    position: {
      x: 10.777700902604394,
      y: 1.2923363495224176,
      z: -5.743577120772898,
    },
    target: {
      x: -1.3124170154176065,
      y: -0.5388834663898199,
      z: -6.120345488118305,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 12,
    },
  },
  MASTER_ROOM: {
    name: "master room",
    position: {
      x: -0.01609038809726987,
      y: 1.37697427289935,
      z: 5.799228006114001,
    },
    target: {
      x: 0.26876992208233297,
      y: 1.28572131999348,
      z: 6.116591629914474,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 55,
    },
  },
  BEDROOM: {
    name: "bedroom",
    position: {
      x: -7.0924584568755975,
      y: 0.3622074853513704,
      z: -13.418864301137548,
    },
    target: {
      x: -0.7274615707826846,
      y: -2.1056511543599408,
      z: -0.44409231423614043,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 55,
    },
  },
  WASHROOM: {
    name: "washroom",
    position: {
      x: -1.32185818360163,
      y: 1.0273643074040844,
      z: 7.620680296448086,
    },
    target: {
      x: -4.426046417333625,
      y: -1.026579666262824,
      z: 9.140135582787579,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 55,
    },
  },
  // CLOSET_DEN: {
  //   name: "closet/den",
  //   position: {
  //     x: 0,
  //     y: 0,
  //     z: 0,
  //   },
  //   target: {
  //     x: 0,
  //     y: 0,
  //     z: 0,
  //   },
  // },
  BALCONY: {
    name: "balcony",
    position: {
      x: 20.048383662406344,
      y: -0.12307933548138861,
      z: 10.49517797770301,
    },
    target: {
      x: -0.23971390688602712,
      y: -1.1315315854105599,
      z: 1.7925742294216043,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 55,
    },
  },
};

export const INDOOR_POSITIONS = [
  { nane: "kitchen", value: "KITCHEN" },
  { name: "bedroom", value: "BEDROOM" },
  { name: "living room", value: "LIVING_ROOM" },
  { name: "washroom", value: "WASHROOM" },
  { name: "closet/den", value: "CLOSET_DEN" },
  { name: "balcony", value: "BALCONY" },
];
