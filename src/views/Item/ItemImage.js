import React from 'react'

import {
  createShorthandFactory,
  getUnhandledProps,
  META,
} from '../../lib'
import Image from '../../elements/Image'

/**
 * An item can contain an image.
 */
function ItemImage(props) {
  const { size } = props
  const rest = getUnhandledProps(ItemImage, props)

  return <Image {...rest} size={size} ui={!!size} wrapped />
}

ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemImage.propTypes = {
  /** An image may appear at different sizes. */
  size: Image.propTypes.size,
}

ItemImage.create = createShorthandFactory(ItemImage, src => ({ src }))

export default ItemImage
