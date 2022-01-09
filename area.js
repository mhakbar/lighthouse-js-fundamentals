const calculateRectangleArea = (length, width) => {

  if (length > 0 && width > 0) {
    return length * width;
  }

};


const calculateTriangleArea = (base, height) => {
  if (base > 0 && height > 0) {

    return base * (height / 2);
  }
};


const calculateCircleArea = radius => {
  if (radius > 0) {
    return (Math.PI * radius * radius);

  }
};
