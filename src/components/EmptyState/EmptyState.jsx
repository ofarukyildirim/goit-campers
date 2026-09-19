import illustration from '../../assets/images/empty-state.webp'
import css from './EmptyState.module.css'

const ILLUSTRATION_WIDTH = 488
const ILLUSTRATION_HEIGHT = 463

const EmptyState = ({ title, lines = [], children }) => (
  <div className={css.box}>
    <img
      src={illustration}
      width={ILLUSTRATION_WIDTH}
      height={ILLUSTRATION_HEIGHT}
      alt=""
      className={css.illustration}
    />
    <div className={css.text}>
      <p className={css.title}>{title}</p>
      {lines.length > 0 && (
        <p className={css.description}>
          {lines.map((line) => (
            <span key={line} className={css.line}>
              {line}
            </span>
          ))}
        </p>
      )}
    </div>
    {children && <div className={css.actions}>{children}</div>}
  </div>
)

export default EmptyState
