import {
  forwardRef,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '~/utils/cn';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetPortal = SheetPrimitive.Portal;

export const SheetOverlay = forwardRef<
  ElementRef<typeof SheetPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={cn(
        'sheet-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80',
        className
      )}
      {...rest}
    />
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'sheet-content fixed z-50 gap-4 bg-slate-300 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

type SheetContentProps = ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants>;
export const SheetContent = forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  (props, ref) => {
    const { side = 'right', className, children, ...rest } = props;

    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...rest}>
          {children}
          <SheetPrimitive.Close className="sheet-close absolute right-4 top-4 rounded-sm opacity-70 ring-offset-slate-300 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-slate-500">
            <X className="h-4 w-4 mix-blend-difference" />
            <span className="sr-only mix-blend-difference">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

export const SheetHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <div className={cn('sheet-header flex flex-col gap-1.5 text-center sm:text-left', className)} {...rest} />;
};
SheetHeader.displayName = 'SheetHeader';

export const SheetFooter = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn('sheet-footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...rest}
    />
  );
};
SheetFooter.displayName = 'SheetFooter';

export const SheetTitle = forwardRef<
  ElementRef<typeof SheetPrimitive.Title>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={cn('sheet-title px-3 text-lg font-semibold text-slate-900', className)}
      {...rest}
    />
  );
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;

export const SheetDescription = forwardRef<
  ElementRef<typeof SheetPrimitive.Description>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>((props: ComponentProps<typeof SheetPrimitive.Description>, ref) => {
  const { className, ...rest } = props;
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={cn('sheet-description text-sm text-slate-700', className)}
      {...rest}
    />
  );
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
