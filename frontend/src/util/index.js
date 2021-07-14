export const seePriceChange = (first, second) => {
  const currentValue = Number(first - second).toFixed(2);
  if(currentValue > 0){
    return (
      <span className="text-green-500">
        🚀 +${currentValue} 🚀
      </span>
    )
  }else{
    return (
      <span className="text-red-600">
        ❗ -${Math.abs(currentValue)} ❗
      </span>
    )
  }    
}

export const randomNumberGenerator = (min, max) => {
  return Number((Math.random() * (max - min + 1)) + min).toFixed(2);
}

export const screenSize = () => {
  const {innerWidth} = window;
  return innerWidth < 740;
}