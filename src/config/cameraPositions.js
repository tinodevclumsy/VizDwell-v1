export const CAMERA_POSITIONS = {
  DEFAULT: {
    name: "default",
    position: {
      x: 42.559498227315224,
      y: 13.406391056253087,
      z: -32.155214032656815,
    },
    // position: {
    //   x: 13.133409242885865,
    //   y: 4.137069926706318,
    //   z: -9.922757616358032,
    // },
    target: {
      x: 0,
      y: 0,
      z: 0,
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
  },
  KITCHEN: {
    name: "kitchen",
    position: {
      x: 6.708414228028381,
      y: 0.675985174404057,
      z: -5.870389656888741,
    },
    target: {
      x: -1.3124170154176065,
      y: -0.5388834663898199,
      z: -6.120345488118305,
    },
  },
  BEDROOM: {
    name: "bedroom",
    position: {
      x: 2.5856790906215967,
      y: 0.7897954858867193,
      z: 0.6579728132629915,
    },
    target: {
      x: 1.8077078150483388,
      y: 0.4291104257000378,
      z: 1.4327799374627903,
    },
  },
  // WASHROOM: {
  //   name: "washroom",
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
