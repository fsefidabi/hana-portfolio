export function getObjectHeight(ref) {
  const geometry = ref.current.geometry
  if (geometry) {
    const vertices = geometry.attributes.position.array

    let minY = Infinity
    let maxY = -Infinity
    for (let i = 1; i < vertices.length; i += 3) {
      const y = vertices[i]
      minY = Math.min(minY, y)
      maxY = Math.max(maxY, y)
    }

    return maxY - minY
  }
}

export function getRadiusBasedOnViewportSize(viewport, initRadius) {
  if (!viewport) throw new Error("missing viewport argument")
  if (!viewport.hasOwnProperty("width") || !viewport.hasOwnProperty("height")) throw new Error(`invalid value passed as viewport argument. viewport: ${JSON.stringify(viewport)}`)
  const scaleFactor = 0.013
  const radiusBasedOnViewportSize = (viewport.width - 200) * scaleFactor
  console.log("radiusBasedOnViewportSize", radiusBasedOnViewportSize)
  return radiusBasedOnViewportSize < initRadius ? initRadius : radiusBasedOnViewportSize
}
