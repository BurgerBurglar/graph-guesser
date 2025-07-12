import { Fragment, type ReactNode } from "react"
import { useMediaQuery } from "usehooks-ts"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet"

type BottomSheetType = {
  trigger: ReactNode
  overlayClassName?: string
  children: ReactNode
}
const BottomSheet = ({
  trigger,
  overlayClassName,
  children,
}: BottomSheetType) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="px-4 py-6" overlayClassName={overlayClassName}>
        <SheetDescription className="sr-only">Options</SheetDescription>
        <SheetHeader>{children}</SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

const ResponsiveSheet = ({
  maxHeight,
  trigger,
  children,
  ...props
}: {
  maxHeight: string
} & BottomSheetType) => {
  const isShortScreen = useMediaQuery(`(max-height: ${maxHeight})`)

  return isShortScreen ? (
    <BottomSheet trigger={trigger} {...props}>
      {children}
    </BottomSheet>
  ) : (
    <Fragment>{children}</Fragment>
  )
}

export default ResponsiveSheet
