import classNames from 'classnames';
import styles from './intro.module.scss';

export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h2>Junhee Kang</h2>
            <h3>Web Developer and Designer</h3>
            <hr />
        </div>
        <p>Freelanver providing services for programming and design content needs.</p>
        <button>Let&apos;s collaborate</button>
    </div>;
};
