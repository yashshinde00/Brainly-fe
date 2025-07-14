import { CrossIcon } from "../icons/crossIcon";
import { Input } from "./Input";
import { Button } from "./Button";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 bg-opacity-60 fixed top-0 left-0 flex items-center justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white p-6 rounded shadow-md min-w-[300px]">
              {/* Close Icon aligned right */}
              <div className="flex justify-end mb-4">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>

              {/* Inputs stacked with spacing */}
              <div className="flex flex-col gap-3 mb-4">
                <Input placeholder={"Title"} />
                <Input placeholder={"title"} />
              </div>

              {/* Centered Button */}
              <div className="flex justify-center">
                <Button variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
