export const VIEW_POSITIONS = {
  DEFAULT: {
    name: "default",
    position: {
      x: 44.836230735619225,
      y: 0.04379796909032912,
      z: -31.854520796272656,
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
      x: 11.36961050277297,
      y: 0.01144296521803678,
      z: -3.04,
    },
    target: {
      x: -3.34,
      y: -2.184068485410255,
      z: -3.65,
    },
    boundary: {
      size: {
        w: 11,
        h: 7,
        d: 16,
      },
      position: {
        x: 6,
        y: 1.2,
        z: -8,
      },
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
      x: 7.777700902604394,
      y: 1.2923363495224176,
      z: -8.743577120772898,
    },
    target: {
      x: -4.31,
      y: -0.5388834663898199,
      z: -9.120345488118305,
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
      x: -3.01,
      y: 1.37697427289935,
      z: 2.799228006114001,
    },
    target: {
      x: -3.26876992208233297,
      y: 1.28572131999348,
      z: 3.116591629914474,
    },
    control: {
      maxPolarAngle: 1.57,
      minPolarAngle: 1,
      maxAzimuthAngle: 3.5,
      maxDistance: 55,
    },
    boundary: {
      size: {
        w: 9.5,
        h: 7,
        d: 9,
      },
      position: {
        x: 2,
        y: 1.2,
        z: 7,
      },
    },
  },
  BEDROOM: {
    name: "bedroom",
    position: {
      x: -4.0924584568755975,
      y: 0.3622074853513704,
      z: -17.41,
    },
    target: {
      x: -3.7274615707826846,
      y: -2.1056511543599408,
      z: -3.44,
    },
    boundary: {
      size: {
        w: 8.5,
        h: 7,
        d: 14,
      },
      position: {
        x: -6.5,
        y: 1.2,
        z: -10,
      },
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
      x: -4.32185818360163,
      y: 1.0273643074040844,
      z: 4.620680296448086,
    },
    target: {
      x: -7.426046417333625,
      y: -1.026579666262824,
      z: 6.140135582787579,
    },
    boundary: {
      size: {
        w: 4.8,
        h: 7,
        d: 7.5,
      },
      position: {
        x: -6.5,
        y: 1.2,
        z: 7,
      },
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
      x: 17.048383662406344,
      y: -0.12307933548138861,
      z: 7.49517797770301,
    },
    target: {
      x: -3.23,
      y: -1.1315315854105599,
      z: -2.79,
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
