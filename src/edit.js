import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import './index.scss';

export default function Edit({ attributes, setAttributes }) {
	const { paddingDesktop, paddingTablet, paddingMobile } = attributes;

	const [activePadding, setActivePadding] = useState(paddingDesktop);

	useEffect(() => {
		const updatePadding = () => {
			const desktop = document.querySelector('.is-desktop-preview');
			const tablet = document.querySelector('.is-tablet-preview');
			const mobile = document.querySelector('.is-mobile-preview');

			if (desktop) {
				setActivePadding(paddingDesktop);
			} else if (tablet) {
				setActivePadding(paddingTablet);
			} else if (mobile) {
				setActivePadding(paddingMobile);
			} else {
				setActivePadding(paddingDesktop);
			}
		}
		updatePadding();
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Spacer Settings', 'distanziatore')}>
					<TextControl
						label={__('Desktop Padding (px)', 'distanziatore')}
						value={paddingDesktop}
						type="number"
						onChange={(value) => setAttributes({ paddingDesktop: parseInt(value, 10) })}
					/>
					<TextControl
						label={__('Tablet Padding (px)', 'distanziatore')}
						value={paddingTablet}
						type="number"
						onChange={(value) => setAttributes({ paddingTablet: parseInt(value, 10) })}
					/>
					<TextControl
						label={__('Mobile Padding (px)', 'distanziatore')}
						value={paddingMobile}
						type="number"
						onChange={(value) => setAttributes({ paddingMobile: parseInt(value, 10) })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} style={{ paddingTop: `${activePadding}px` }} data-desktop={`${paddingDesktop}px`} data-tablet={`${paddingTablet}px`} data-mobile={`${paddingMobile}px`}></div>
		</>
	);
}
