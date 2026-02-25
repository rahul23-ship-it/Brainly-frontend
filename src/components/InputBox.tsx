import { forwardRef } from "react";

interface InputBoxProps {
  placeHolder: string;
}

export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ placeHolder }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type="text"
          className="px-4 py-2 border border-bordercolor rounded-md"
          placeholder={placeHolder}
        />
      </div>
    );
  }
);
