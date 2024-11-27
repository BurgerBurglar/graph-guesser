import { Fragment, type ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";
import { DialogTitle } from "~/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";

type BottomDrawerType = { trigger: ReactNode; children: ReactNode };
const BottomDrawer = ({ trigger, children }: BottomDrawerType) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DialogTitle className="sr-only">Options</DialogTitle>
        <DrawerHeader>{children}</DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

const ResponsiveDrawer = ({
  maxHeight,
  trigger,
  ...props
}: {
  maxHeight: string;
} & BottomDrawerType) => {
  const isShortScreen = useMediaQuery(`(max-height: ${maxHeight})`);

  return isShortScreen ? (
    <BottomDrawer trigger={trigger} {...props} />
  ) : (
    <Fragment {...props} />
  );
};

export default ResponsiveDrawer;