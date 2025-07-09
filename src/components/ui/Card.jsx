import { clsx } from "clsx"

const Card = ({ className, children, ...props }) => {
  return (
    <div className={clsx("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}>
      {children}
    </div>
  )
}

export default Card
