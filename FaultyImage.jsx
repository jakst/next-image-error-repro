
import Image from 'next/image'

export function FaultyImage() {
	return (
		<Image
			src="https://github.com/.png"
			alt="Faulty image"
			width={128}
			height={96}
		/>
	)
}