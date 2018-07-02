const quadraticRegex = RegExp(/^Q/ || /^q/)

const isQuadraticCurve = (coordinates: string) => (quadraticRegex.test(coordinates))

export const extractQuadraticCurve = (svgElement: HTMLElement) => {
  const svgShapeCoordinates = svgElement.getAttribute('d')
  let quadraticCurve: string[] = []
  svgShapeCoordinates.split(' ').forEach((element, index, array) => {
    if (isQuadraticCurve(element)) {
      quadraticCurve.push(`${element} ${array[index + 1]}`)
    }
  });
  return quadraticCurve
}