import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import SelectRange from './SelectRange'
import Input from '../../../Atom/Form/Input/Input'

export default {
   title: 'Atomic Design/Organism/Form/SelectRange',
   component: SelectRange,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof SelectRange>

const Template: StoryFn<typeof SelectRange> = (args) => {
   const [currentId, setDropDown] = React.useState(null)

   const handleDropDown = (id) => {
      setDropDown(currentId === id ? null : id)
   }
   return (
      <div style={{ width: '300px', backgroundColor: 'red' }}>
         <SelectRange
            onHandleDropdown={() => handleDropDown(1)}
            label={'select'}
            isOpen={currentId === 1}
            id={'id'}
         >
            <Input
               type={'number'}
               state={'default'}
               value={'valude'}
               borderRadius={false}
               onChange={() => {}}
            />
         </SelectRange>
      </div>
   )
}
export const Default = Template.bind({})
