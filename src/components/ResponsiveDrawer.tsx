import { Fragment, type ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";

const BottomDrawer = ({ children }: { children: ReactNode }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>OPTIONS</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>{children}</DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

const ResponsiveDrawer = ({
  maxHeight,
  children,
}: {
  maxHeight: string;
  children: ReactNode;
}) => {
  const isShortScreen = useMediaQuery(`(max-height: ${maxHeight})`);

  return isShortScreen ? (
    <BottomDrawer>{children}</BottomDrawer>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default ResponsiveDrawer;
