
import { useBlockProps } from '@wordpress/block-editor';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

//Get data attribute
const spacerBlock = document.querySelectorAll('.spacer-custom');

for (const el of spacerBlock) {
    const desktopAtt = el.getAttribute('data-desktop');
    const tabletAtt = el.getAttribute('data-tablet');
    const mobileAtt = el.getAttribute('data-mobile');


    function getPaddingValue() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var paddingValue;

        // Utilizza i breakpoint di Bootstrap per determinare il valore del padding
        if (screenWidth >= 1025) { // Desktop
            paddingValue = desktopAtt;
        } else if (screenWidth >= 768) { // Tablet
            paddingValue = tabletAtt;
        } else { // Mobile
            paddingValue = mobileAtt;
        }

        return paddingValue;
    }

    // Assegna i valori di padding al div con classe "spacer-custom"
    function setPadding() {
        var paddingValue = getPaddingValue();

        if (el) {
            el.style.paddingTop = paddingValue + "px";
            el.style.paddingBottom = paddingValue + "px";
        }
    }

    // Chiama la funzione al caricamento della pagina e al ridimensionamento della finestra
    setPadding();
    window.addEventListener("resize", setPadding);
}

export default function save({ attributes }) {
    const { paddingDesktop, paddingTablet, paddingMobile, paddingValue } = attributes;


    return (
        <div {...useBlockProps.save()}
            className="spacer-custom"
            data-desktop={paddingDesktop}
            data-tablet={paddingTablet}
            data-mobile={paddingMobile}>
            { }
        </div>
    );
}
