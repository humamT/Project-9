export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
  // 1: "janvier",
  // 2: "février",
  // 3: "mars",
  // 4: "avril",
  // 5: "mai",
  // 6: "juin",
  // 7: "juillet",
  // 8: "août",
  // 9: "septembre",
  // 10: "octobre",
  // 11: "novembre",
  // 12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];
// export const getMonth = (date) => MONTHS[date.getMonth() -1 ]; // added -1

// if i change how the month value starts it fixes both slider and cards
// but if i change "-1" it only fixes the slider