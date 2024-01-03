import classNames from 'classnames';
import styles from './portofolio.module.scss';

export interface PortofolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portofolio = ({ className }: PortofolioProps) => {
    return <div className={classNames(styles.root, className)}>Portofolio</div>;
};
