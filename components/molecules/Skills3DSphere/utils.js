export function getRadiusBasedOnViewportSize(viewport, initRadius) {
  if (!viewport) throw new Error("missing viewport argument")
  if (!viewport.hasOwnProperty("width") || !viewport.hasOwnProperty("height")) throw new Error(`invalid value passed as viewport argument. viewport: ${JSON.stringify(viewport)}`)
  const scaleFactor = 0.04
  const radiusBasedOnViewportSize = viewport.width * scaleFactor
  return Math.min(radiusBasedOnViewportSize, initRadius)
}
