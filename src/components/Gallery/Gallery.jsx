import clsx from 'clsx'
import { useState } from 'react'
import css from './Gallery.module.css'

const Gallery = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  return (
    <div className={css.gallery}>
      <img
        className={css.main}
        src={activeImage.original}
        alt={`${name} — photo ${activeIndex + 1}`}
        width="638"
        height="505"
      />
      <ul className={css.thumbs}>
        {images.map(({ thumb }, index) => (
          <li key={thumb}>
            <button
              type="button"
              className={clsx(css.thumb, index === activeIndex && css.active)}
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <img src={thumb} alt="" width="135" height="145" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery
