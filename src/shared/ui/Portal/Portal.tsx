import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
	containerId?: string;
}

const createDomElement = (id: string) => {
	const div = document.createElement('div');
	div.setAttribute('id', id);
	document.body.appendChild(div);

	return div;
};

export const Portal: FC<PortalProps> = (props) => {
	const { children, containerId = 'portal' } = props;
	let container = document.getElementById(containerId);

	if (!container) {
		container = createDomElement(containerId);
	}

	return createPortal(children, container);
};
