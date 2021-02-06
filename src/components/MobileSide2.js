import React, { useState, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
const overrides = {
	'Button2': {
		kind: 'Box'
	},
	'Button Liner': {
		kind: 'Box'
	},
	'Content2': {
		kind: 'Box'
	}
};

const MobileSidePanel = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides),
	      [isOpen, setOpen] = useState(false),
	      onToggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]),
	      stateOpen = isOpen ? ':open' : ':closed';
	return <Box {...rest}>
		<Box onPointerDown={onToggleOpen} {...override('Button2', `Button2 ${stateOpen}`)}>
			<Box {...override('Button Liner', 'Button Liner1', `Button Liner1 ${stateOpen}`)} />
			<Box {...override('Button Liner', 'Button Liner2', `Button Liner2 ${stateOpen}`)} />
			<Box {...override('Button Liner', 'Button Liner3', `Button Liner3 ${stateOpen}`)} />
		</Box>
		<Box {...override('Content2', `Content2 ${stateOpen}`)}>
			{children}
		</Box>
	</Box>;
};

export default Object.assign(MobileSidePanel, {
	title: 'Mobile Side Panel',
	overrides
});