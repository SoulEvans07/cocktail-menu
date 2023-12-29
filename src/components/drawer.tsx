import {
  forwardRef,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
} from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '~/utils/cn';

export const Drawer = (props: ComponentProps<typeof DrawerPrimitive.Root>) => {
  const { shouldScaleBackground = false, ...rest } = props;
  return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...rest} />;
};
Drawer.displayName = 'Drawer';

export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerPortal = DrawerPrimitive.Portal;
export const DrawerClose = DrawerPrimitive.Close;

export const DrawerOverlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn('drawer-overlay fixed inset-0 z-50 bg-black/80', className)}
      {...rest}
    />
  );
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

export const DrawerContent = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'drawer-content fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-2xl bg-slate-200',
          className
        )}
        {...rest}
      >
        <div className="drawer-handle absolute left-1/2 top-4 h-2 w-[100px] -translate-x-1/2 rounded-full bg-slate-400/60" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn('drawer-header grid gap-1.5 overflow-hidden rounded-t-xl text-center sm:text-left', className)}
      {...rest}
    />
  );
};
DrawerHeader.displayName = 'DrawerHeader';

export const DrawerFooter = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <div className={cn('drawer-footer mt-auto flex flex-col gap-2 p-4', className)} {...rest} />;
};
DrawerFooter.displayName = 'DrawerFooter';

export const DrawerTitle = forwardRef<
  ElementRef<typeof DrawerPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn('drawer-title px-3 pt-2 text-lg font-semibold leading-none tracking-tight', className)}
      {...rest}
    />
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

export const DrawerDescription = forwardRef<
  ElementRef<typeof DrawerPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn('drawer-description text-muted-foreground text-sm', className)}
      {...rest}
    />
  );
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
