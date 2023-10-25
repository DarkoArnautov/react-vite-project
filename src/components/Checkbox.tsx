import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FC } from "react";

type P = {
    checked?: boolean;
    label?: string;
    className?: string;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: FC<P> = ({ checked = false, label, className, onChange }) => {

    return (
        <div className={clsx("cursor-pointer flex space-x-[20px]", className)} onClick={() => onChange?.(!checked)}>
            {!checked && (
                <div className="w-[30px] h-[30px] border border-[#E6E6E6] border-solid"></div>
            )}
            {checked && (
                <div className="w-[30px] h-[30px] bg-[#FCBD0E] flex justify-center items-center">
                    <CheckIcon className="h-[18px] w-[18px] text-white" />
                </div>
            )}
            <div className="text-[20px] text-[#201D1D]">{label}</div>
        </div>
    )
}
