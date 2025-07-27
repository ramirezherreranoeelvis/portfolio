import "./text.css";

/**
 * Reusable Text component.
 *
 * @param {string} text              - Text text or content.
 *                                     If set, overrides any `<ng-content>`.
 *
 * @param {string} forId             - Used to link the label with an input via the `for` attribute.
 * @param {styleTheme} styleTheme    - Theme style of the container:
 *                                   - ''
 *                                   - 'glow-crimson' / 'glow-ember' (Red)
 *                                   - 'glow-fuchsia' / 'glow-cyberpink' (Neon Pink)
 *                                   - 'glow-amber' / 'glow-sunfire' (Yellow)
 *                                   - 'glow-jade' / 'glow-seafoam' (Green)
 *                                   - 'glow-amethyst' / 'glow-arcane' (Purple)
 *                                   - 'glow-cyan' / 'glow-hologram' (Blue)
 *                                   - 'glow-frost' / 'glow-celeste' (Celeste)
 *                                   - 'glow-quartz' / 'glow-aura' (Light Pink)
 *                                   - 'glow-emerald' / 'glow-matrix' (Intense Green)
 *                                   - '' (default)
 *
 * @param {string} className         - Additional Tailwind CSS classes for styling.
 *
 */
function AtomText({ tag: Tag, styleTheme, className, children, text }) {
    return (
        <Tag atom-text="" className={styleTheme + " " + className}>
            {text || children}
        </Tag>
    );
}

export default AtomText;
