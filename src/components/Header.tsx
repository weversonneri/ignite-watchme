import { memo } from 'react';

interface Props {
	title: string;
}

function HeaderComponent({ title }: Props) {
	return (
		<header>
			<span className='category'>
				Categoria:<span> {title}</span>
			</span>
		</header>
	);
}

export const Header = memo(HeaderComponent);
