import React from 'react';
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

export const AgeSelector = () => (
  <Select.Root>
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder="Select" />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            <SelectItem value="1to10" className='w-[25px]'>1 - 10</SelectItem>
            <SelectItem value="11to20">11 - 20</SelectItem>
            <SelectItem value="21to30">21 - 30</SelectItem>
            <SelectItem value="31to40">31 - 40</SelectItem>
            <SelectItem value="41to50">41 - 50</SelectItem>
            <SelectItem value="51to60">51 - 60</SelectItem>
            <SelectItem value="61to70">61 - 70</SelectItem>
            <SelectItem value="71to80">71 - 80</SelectItem>
            <SelectItem value="81to90">81 - 90</SelectItem>
            <SelectItem value="91to100">91 - 100</SelectItem>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className=''
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        {/* <CheckIcon /> */}
      </Select.ItemIndicator>
    </Select.Item>
  );
})