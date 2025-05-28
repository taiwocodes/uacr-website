import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  rootRef?: React.Ref<HTMLDivElement>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { children, inputProps, rootRef, ...rest } = props
    return (
      <ChakraRadioGroup.Item ref={rootRef} {...rest}>
        <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        <ChakraRadioGroup.ItemIndicator 
          _checked={{ color: "brand.900", backgroundColor: "white", borderColor: 'brand.900', borderWidth: 1 }} 
          _empty={{ borderColor: 'gray.150', borderWidth: 1 }}  
        />
        {children && (
          <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
        )}
      </ChakraRadioGroup.Item>
    )
  },
)
export const RadioGroup = ChakraRadioGroup.Root